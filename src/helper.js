// import kinderData from '../data/kindergartners_in_full_day_program';

export default class DistrictRepository {
  constructor(data) {
    this.data = this.formatData(data)
  }

  formatData(raw) {
    const baseValue = raw.reduce( (formattedData, curVal) => {

      !formattedData[curVal.Location] ?
       formattedData[curVal.Location] = 1 :
       formattedData[curVal.Location]++

      return formattedData;
    }, {})
    return baseValue
  };
};
