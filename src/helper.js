export default class DistrictRepository {
  constructor (districts) {
    this.stats = this.organizeData(districts);
  }
  organizeData (districts) {
    const districtData = districts.reduce((districtAcc, districtData) => {
      const dataLocation = districtData.Location.toUpperCase();
      const dataNum = (
        districtData.Data === 'N/A' ?
          0 :
          Math.round(1000 * districtData.Data)/1000
      );

      if (!districtAcc[dataLocation]) {
        districtAcc[dataLocation] = {
          data: {},
          location: districtData.Location.toUpperCase()
        };
      }
      districtAcc[dataLocation].data = {
        ...districtAcc[dataLocation].data,
        [districtData.TimeFrame]: dataNum
      };
      return districtAcc;
    }, {});

    return districtData;
  }

  findByName (districtName) {
    if (districtName) {
      districtName = districtName.toUpperCase();
    }
    if (Object.keys(this.stats).includes(districtName)) {
      return this.stats[districtName];
    } else {
      return undefined;
    }
  }
}

