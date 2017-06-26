export default class DistrictRepository {
  constructor(data) {
    this.data = this.normalize(data);
  }

  normalize(data) {
    // return data.reduce((dataObj, e))




    return data.reduce((acc, e, i) => {
      let index = acc.findIndex(accE => {
        return accE.location === e.Location
      })

      if (index === -1) {
        acc[acc.length] = {
          location: e.Location,
          data: [{
            timeFrame: e.TimeFrame,
            data: e.Data,
          }],
        }
      } else {
        acc[index].data.push({
          timeFrame: e.TimeFrame,
          data: e.Data,
        });
      }

      return acc;
    }, []);
  }
}
