import DistrictRepository from '../../src/Helpers/helper.js'
import kinderData from '../../data/kindergartners_in_full_day_program.js'


describe('makeCardArray', () =>{
  const district = new DistrictRepository(kinderData)

  test('makeCardArray returns an array', () => {
    let newData = district.findAllMatches().map((school, i) =>{
      return school.data
    })
    expect(Array.isArray(district.makeCardArray(newData))).toBe(true)
  })

  test('makeCardArray returns an array of objects', () => {
    let newData = district.findAllMatches().map((school, i) =>{
      return school.data
    })
    expect(typeof district.makeCardArray(newData)).toBe('object')
  })

  test('makeCardArray returns an array of objects with specific values', () => {
    let newData = district.findAllMatches().map((school, i) =>{
      return school.data
    })

    let zero = district.makeCardArray(newData[0])
    expect(zero['0']).toBe('2004: 0.24')
  })
})

describe('highLowValues', () =>{
  const district = new DistrictRepository(kinderData)

  test(('highLowValues should return an array of strings'), () => {
    let newData = district.findAllMatches().map((school, i) =>{
      return school.data
    })
    let zero = district.makeCardArray(newData[0])

    zero.forEach((school, i) => {
      expect(typeof district.highLowValues(zero[i])).toBe('string')
    })
  })

  test(('highLowValues should return a low-data if the value is < .5'), () => {
    let newData = district.findAllMatches().map((school, i) =>{
      return school.data
    })
    let zero = district.makeCardArray(newData[0])
    expect(district.highLowValues(zero['0'])).toBe('low-data')
  })

  test(('highLowValues should return a high-data if the value is >=  .5'), () => {
    let newData = district.findAllMatches().map((school, i) =>{
      return school.data
    })
    let zero = district.makeCardArray(newData[0])
    expect(district.highLowValues(zero['4'])).toBe('high-data')
  })
})

describe('sanitizeNumbers', () =>{
  const district = new DistrictRepository(kinderData)

  test('sanitizeNumbers should round numbers up at .5', () => {
    expect(district.sanitizeNumbers(0.3455)).toBe(0.346)
  })

  test('sanitizeNumbers should round numbers down at .4', () => {
    expect(district.sanitizeNumbers(0.3454)).toBe(0.345)
  })

  test('sanitizeNumbers should round numbers to 3 decimals', () => {
    expect(district.sanitizeNumbers(0.345414387347363)).toBe(0.345)
  })

  test('sanitizeNumbers should return 0 if it is not passed a number', () => {
    expect(district.sanitizeNumbers('bears')).toBe(0)
    expect(district.sanitizeNumbers()).toBe(0)
  })
})
