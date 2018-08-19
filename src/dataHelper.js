import thirdGradeData from './data/3rd_grade_tests';
import eighthGradeData from './data/8th_grade_test_scores';
import mathData from './data/average_race_ethnicity_math_scores';
import readingData from './data/average_race_ethnicity_reading_scores';
import writingData from './data/average_race_ethnicity_writing_scores';
import dropoutData from './data/dropout_rates_by_race_and_ethnicity';
import highSchoolGradData from './data/high_school_graduation_rates';
import kinderData from './data/kindergartners_in_full_day_program';
import householdIncomeData from './data/median_household_income';
import onlineEnrollData from './data/online_pupil_enrollment';
import enrollByRaceData from './data/pupil_enrollment_by_race_ethnicity';
import enrollData from './data/pupil_enrollment';
import remediationData from './data/remediation_in_higher_education';
import povertyData from './data/school_aged_children_in_poverty';
import specialEdData from './data/special_education';
import lunchData from './data/students_qualifying_for_free_or_reduced_price_lunch';
import titleIData from './data/title_i_students';

const districtData = [
  { title: 'THIRD GRADE TESTS', data: thirdGradeData },
  { title: 'EIGTH GRADE TEST SCORES', data: eighthGradeData },
  { title: 'AVERAGE RACE AND ETHNICITY MATH SCORES', data: mathData },
  { title: 'AVERAGE RACE AND ETHNICITY READING SCORES', data: readingData }, 
  { title: 'AVERAGE RACE AND ETHNICITY WRITING SCORES', data: writingData }, 
  { title: 'DROPOUT RATES BY RACE AND ETHNICITY', data: dropoutData },
  { title: 'HIGH SCHOOL GRADUATION RATES', data: highSchoolGradData }, 
  { title: 'KINDERGARTNERS IN FULL DAY PROGRAM', data: kinderData }, 
  { title: 'MEDIAN HOUSEHOLD INCOME', data: householdIncomeData }, 
  { title: 'ONLINE PUPIL ENROLLMENT', data: onlineEnrollData }, 
  { title: 'PUPIL ENROLLMENT BY RACE AND ETHNICITY', data: enrollByRaceData }, 
  { title: 'PUPIL ENROLLMENT', data: enrollData }, 
  { title: 'REMEDIATION IN HIGHER EDUCATION', data: remediationData }, 
  { title: 'SCHOOL AGED CHILDREN IN POVERTY', data: povertyData }, 
  { title: 'SPECIAL EDUCATION', data: specialEdData }, 
  { title: 'STUDENTS QUALIFYING FOR FREE OR REDUCED LUNCH', data: lunchData },
  { title: 'TITLE I STUDENTS', data: titleIData }
];

export default districtData;