// import kinderData from '../data/kindergartners_in_full_day_program';

export default class DistrictRepository {
  constructor(data) {
    this.data = this.formatData(data)
  }

  formatData(raw) {
    const baseValue = raw.reduce( (formattedData, curVal) => {
      let time = curVal.TimeFrame;

      !formattedData[curVal.Location] ?
       formattedData[curVal.Location] = [] :
        formattedData[curVal.Location].push(
          { [time]: curVal.Data }
        )

      return formattedData;
    }, {})
    console.log(baseValue);
    return baseValue
  };

findByName(name) {

}

};
