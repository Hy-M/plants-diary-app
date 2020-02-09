exports.formatDates = (data) => {
    let formattedDatesArr = data.map((plantObj) => {
        let newPlantObj = { ...plantObj };
        let formattedSownDate = newPlantObj.date_sown && new Date(newPlantObj.date_sown); 
        let formattedPlantedDate = newPlantObj.date_planted && new Date(newPlantObj.date_planted);
        newPlantObj.date_sown = formattedSownDate;
        newPlantObj.date_planted = formattedPlantedDate;        
        return newPlantObj;
    })

    return formattedDatesArr;
}