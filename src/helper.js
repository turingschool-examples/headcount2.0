export default class DistrictRepository {
  constructor(dataPassedIn){
    this.data = this.cleanUpData(dataPassedIn);
    console.log(this.data);
  }

  cleanUpData(data){
    return data.reduce( (accu, dataPiece) => {
      if(!accu[dataPiece.Location]){
        accu[dataPiece.Location] = [];
      }
      accu[dataPiece.Location].push(dataPiece);
      return accu;
    }, {})
  }
}
