import kinderData from './data/kindergartners_in_full_day_program.js';


export default class DistrictRepository {
	constructor(stats) {
		this.stats = this.removeDuplicate(kinderData)
		
	}

	removeDuplicate = (data) => {
		return data.reduce((acc, school) => {
			if(!acc[school.Location]) {
				acc[school.Location] = [] 
			}
			acc[school.Location].push(school)

			return acc;

		}, {});
	}

	findByName = () => {

	}


}
