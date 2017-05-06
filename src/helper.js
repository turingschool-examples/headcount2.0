export default class DistrictRepository {
  constructor(data) {
    this.data = this.mappedData(data)
    // console.log(this.data)
  }


  sanitizedData(data) {
    if (typeof data === 'number') {
      return Math.round(data * 1000) / 1000
    } else {
      return 0
    }
  }

  mappedData(data) {
    let newData = {}

    data.forEach(val => {
      let { Location, TimeFrame, Data } = val
      let sanitizedData = this.sanitizedData(Data)
      Data = parseFloat(Data).toFixed(3)*1

      if(!newData[Location]) {
        newData[Location] = {}
        newData[Location].location = Location
        newData[Location].data = {}
      }
        newData[Location].data[TimeFrame] = sanitizedData
        // console.log(typeof parseFloat(Data.toFixed(3)))
    })


    return newData
  }

  findByName(name) {
    if(!name) {
      return undefined
    }
    let school = Object.keys(this.data).find(specificLocation => {
      if (name.toLowerCase() === specificLocation.toLowerCase()) {
        return this.data[specificLocation]
      }
    })

    return this.data[school];
  }

  findAllMatches(input = null) {
    const districtKeys = Object.keys(this.data);
    let searchedKeys = []

      districtKeys.forEach((key) => {
        if(input == null){
          searchedKeys.push(this.data[key])
        }
        else if(key.toLowerCase().includes(input.toLowerCase())) {
         searchedKeys.push(this.data[key])
        }
      })
      return searchedKeys
  }

}
