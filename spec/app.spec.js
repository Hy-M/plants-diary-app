process.env.NODE_ENV = "test";

const app = require("../app");
const connection = require("../db/connection");
const { expect } = require("chai");
const request = require("supertest")(app);

beforeEach(function() {
  this.timeout(50000);
  return connection.migrate
    .rollback()
    .then(() => connection.migrate.latest())
    .then(() => connection.seed.run());
});

after(() => connection.destroy());

describe("/api", () => {
  describe("GET", () => {
    it("status: 200 returns an object with all of the available endpoints", () => {
      return request
        .get("/api")
        .expect(200)
        .then(({ body }) => {
          expect(body).to.haveOwnProperty("endpoints");
        });
    });
  });
  describe("/garden", () => {
    describe("GET", () => {
      it("status: 200 returns an array with a key of garden", () => {
        return request
          .get("/api/garden")
          .expect(200)
          .then(({ body }) => {
            expect(body).to.haveOwnProperty("garden");
            expect(body.garden).to.be.an("array");
            expect(body.garden[0]).to.haveOwnProperty("plant_id");
          });
      });
    });
    describe("POST", () => {
      it("status: 201 returns the newly posted plant", () => {
        return request
          .post("/api/garden")
          .send({
            name: "Dahlia",
            date_sown: "2020-03-12",
            notes: "Two tubers"
          })
          .then(({ body }) => {
            expect(body).to.haveOwnProperty("plant");
          });
      });
    });
    describe("DELETE", () => {
      it("status: 200", () => {
        return request
          .delete("/api/garden")
          .send({ plant_id: "2" })
          .expect(200);
      });
    });
  });
  describe("/wishlist", () => {
    describe("GET", () => {
      it("status: 200 returns an array with a key of wishlist", () => {
        return request
          .get("/api/wishlist")
          .expect(200)
          .then(({ body }) => {
            expect(body).to.haveOwnProperty("wishlist");
            expect(body.wishlist).to.be.an("array");
            expect(body.wishlist[0]).to.haveOwnProperty("plant_id");
            expect(body.wishlist[0].is_growing).to.equal(false);
          });
      });
    });
    describe("POST", () => {
      it("status: 201 returns the newly posted plant", () => {
        return request
          .post("/api/wishlist")
          .send({
            name: "Lavender"
          })
          .then(({ body }) => {
            expect(body).to.haveOwnProperty("plant");
          });
      });
    });
    describe("DELETE", () => {
      it("status: 200", () => {
        return request
          .delete("/api/wishlist")
          .send({ plant_id: "2" })
          .expect(200);
      });
    });
  });
});
