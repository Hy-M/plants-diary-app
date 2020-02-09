const { expect } = require('chai');
const { formatDates } = require('../db/utils/utils');

describe('formatDates()', () => {
    const data = [{
        name: 'Rosemary',
        date_sown: 1496231984183,
        date_planted: 1496231984183,
        image_first: '',
        image_second: '',
        image_third: '',
        notes: ''
    }]
    it('returns an array', () => {
        expect(formatDates(data)).to.be.an('array');
    });
    it('returns an array with a different reference to the passed in array', () => {
        expect(formatDates(data)).to.not.equal(data);
    });
    it('the objects in the returned array have a different reference to the passed in objects', () => {
        expect(formatDates(data)[0]).to.not.equal(data[0]);
    });
    it('returns the dates unchanged if they are null', () => {
        const dataWithoutDates = [
            {
                name: 'Rosemary',
                date_sown: null,
                date_planted: null,
                image_first: '',
                image_second: '',
                image_third: '',
                notes: ''   
            }
        ];
        expect(formatDates(dataWithoutDates)).to.eql(dataWithoutDates);
    });
    it('returns the dates formatted if they are not null', () => {
        const formattedPlantedDate = new Date(data[0].date_planted);   
        expect(formatDates(data)[0].date_planted).to.eql(formattedPlantedDate);
    });
    it('checks that the formatted date is an instance of Date object', () => {
        expect(formatDates(data)[0].date_planted).to.be.a.instanceOf(Date);
    });
});