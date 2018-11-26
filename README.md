# HeadCount 2.0

HeadCount 2.0 is a project designed to challenge your skills at manipulating data and creating small, reusable React components.  

You will start the project by importing files containing various educational stats from districts within Colorado by year, per district.  

In the spirit of TDD we have created some unit tests for you to start off with. These tests will help you break out calculation logic into a `DistrictRepository` class. After you finish `iteration 1` you'll move on to creating the rest of the react application on your own, with the expectation that you will continue to test the application on your own.

This application was built using the `create-react-app` boilerplate. This boilerplate provides a lot of build in content and dependencies for free. Take a few minutes to read through [the documentation](https://github.com/facebookincubator/create-react-app), and remember to refer back to these docs if you run into unexpected issues.  

## Set Up

Fork this project

Run `npm install` from the root directory

Run `npm start` and visit localhost:3000 in your browser

You can begin running your tests with `npm test`

## Project Goals

* Separate application logic into small, testable functions.
* Create modular, reusable React components.
* Use propTypes to validate props passed to each component.
* Write meaningful, comprehensive unit and integration tests.

## Testing

You may find the testing utilitiy Enzyme helpful for this project. To use it to your project, check out the following
documentation:

[create-react-app
setupTests.js](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#initializing-test-environment)  
[initializing the enzyme adapter](http://airbnb.io/enzyme/docs/installation/react-15.html)  

## Project Requirements

This project is broken out into multiple iterations. You are expected to complete all required iterations for a passing score, additional extensions are provided to push your comfort level.  

### Data Access Layer

#### Iteration 0 - Initial Data
  Create a constructor/class that takes in data and formats it appropriately. Tests have been written to help guide you in this process. You should pass each iterations' relative tests before moving forward. For `Iteration 0`, tests can be found in `test/unit/iteration-0.test.js`.  

**Things to keep in mind:**  
* Treat the data coming in as if it is from a third party. The existing tests are written in a particular format - you are encouraged to continue the camelCase pattern that is provided within the tests, although you can also choose to write your code differently as long as you stay consistent within your app.

* How you choose to manipulate the data will determine how you can interact with it as the app expands. Use JavaScript to it's advantage and spend time thinking about what types of operations you will need to call on the data provided.

**Notes on the District Repository**  
As an example, take a minute to look at the `kindergartners_in_full_day_program.js` data file.  

The `DistrictRepository` helper class you create will be responsible for holding data pertaining to each educational district. Off the bat, it should have a property `.stats` that contains the information pertaining to to that file:  

Example:  

```javascript
  const district = new DistrictRepository(data);
  district.stats // =>s an object or an array depending on how you want to sort your data that pulls in the information from this given file.
```
#### Iteration 1 - Finding Data
Here we will solve the problem of finding singular or multiple data points.  

You will be working on passing the tests in `iteration-1-part1.js` and `iteration-1-part2.js`.

Besides pulling in a particular file, the `DistrictRepository` should also be responsible for parsing data based on search criteria. It should offer the following methods:

* `.findByName()` - returns either `undefined` or `{}` having done a *case insensitive* search

* `.findAllMatching()` - returns an empty array `[]`, or an array of objects `[Object, Object]` pertaining to the results that match the search passed into `findAllMatching()`, also *case insensitive*.

Example:  

```javascript
import kindergartnerData from '../../data/kindergartners_in_full_day_program.js';

const district = new DistrictRepository(kindergartnerData);

district.findByName('ACADEMY 20').data;
// => { "2004": 0.302, "2005": 0.267, "2006": 0.354, "2007": 0.392, "2008": 0.385, "2009":  0.39, "2010": 0.436, "2011": 0.489, "2012": 0.479, "2013": 0.488, "2014": 0.49 };

district.findAllMatching('Colorado');
// => [{location: Colorado, stats: {2005: 0.56, ...}}, {location: Colorado Springs, stats: {2007: 0.7, ...}}];
```

## Visual layer

**Overview:**
The visual layer will be a single page application using React. Each component should be thoroughly tested with defined `PropTypes` validating what props are being passed in.

#### Iteration 2 - Displaying Data

Now that you have manipulated the data, it's time to build out the front end to display that information. Each component should be thoroughly tested before moving on. This will be a lot easier to do if you break things out into small, modular components.  

As you look into each district, the data points should meet the following criteria:  

* All data should be rounded to the nearest thousandth (ie: .012).
* All data should have a *visual indication* of if the data is above or below `0.5`. The provided comp below uses red and green colors to indicate the difference as an example, but you should tap into your front-end-developer design skills and come up with a better way to indicate those values.   

![Iteration 2 Comp Screen Shot](http://i.imgur.com/GzhO2EO.png)  

CSS **is** graded on this project. Choose something other than red and green.  

### Iteration 3 - Search  

Users should be able to search for a particular district title.  

The search should be *case insensitive* and should fire on each key press.  
*Hint:* Use your helper `DistrictRepository` class!  

### Iteration 4 - Comparative Data Analysis  

Now that we can average and search for individual districts, we should be able to compare two districts to each other. For iteration 4, create a new method on DistrictRepository called `compareDistrictAverages`. This will take in two arguments and return an answer rounded to the nearest thousandth. There are existing tests to help you with this step.  

Example:  

```javascript
  district.compareDistrictAverages('ACADEMY 20', 'Colorado');
  // => { "ACADEMY 20": 0.407, "COLORADO": 0.53, "compared": 0.768};
```

### Iteration 5 - Displaying Compared Data

Now that we can compare data between two districts in code, we need to display that to our users. This iteration should meet the following criteria:  

1. Users should be able to click on an individual district.
2. Once clicked, there should be a visual indication in the UI that the district has been clicked.
3. If clicked a second time, the district should revert back to its previous state. *Hint:* Use CSS classes to help toggle between the UI changes.  
4. Once a district is selected, it must be displayed at the top of the page. It should also remain in the collection of districts displayed in the main body of the app.  

Example:  

![](http://i.imgur.com/pqP1E3N.png)  

5. Once two districts have been clicked, there should be a comparative analysis between the two.  

Example:  

![](http://i.imgur.com/KpSdTaW.png)  

**A maximum of two districts should be able to be selected.**  

### Extensions

#### More Data Files  
* Right now we are only loading the `kindergartners_in_full_day_program.js` file. Create a header with buttons that dynamically load each of the different files provided in this repo.  
* The UI should change to reflect the data provided by the file selected.  
* The buttons should be modular React components.  

#### Individual District Data Analysis
* When a district is selected it should display the average of its data anywhere it is displayed.  

## Specification Adherence

- 4 - The application completes all 5 iterations above and implements one or more of the extensions.
- 3 - The application completes all 5 iterations.
- 2 - The application is in a usable state, but is missing 1 of the features outlined in the specification above.
- 1 - The application is missing multiple features essential to having a complete application.

### Code Quality

- 4 - Developer demonstrates complete understanding of React with appropriately separated components and exceptionally well refactored code.
- 3 - Developer appears comfortable in React. There are minor opportunities to refactor.
- 2 - Developer selected appropriate libraries and frameworks to build the app but did not use them as intended. Significant refactoring necessary.
- 1 - Developer did not make any effort to use React effectively or refactor code.

### CSS/Design

- 4 - Developer has made a targeted effort to make the app appealing and user friendly. Evaluator has minimal recommendations for design changes. Follows [10 Essential Usability Guidelines.](https://speckyboy.com/10-essential-web-application-usability-guidelines/)
- 3 - Developer has made a targeted effort to make the app appealing and user friendly. Evaluator has multiple recommendations for design changes. Follows majority of the [10 Essential Usability Guidelines.](https://speckyboy.com/10-essential-web-application-usability-guidelines/)
- 2 - Developer has made intentional design decisions to create a user friendly application but Louisa would be mad. Attempts to follow [10 Essential Usability Guidelines.](https://speckyboy.com/10-essential-web-application-usability-guidelines/)
- 1 - Developer did minimal to no CSS for this project besides what was indicated in the comp.

### Testing

- 4 - Every component is tested from both a unit and acceptance standpoint, all crucial functionality is tested
- 3 - Almost all components are tested to a level that indicates developer has an understanding of testing
- 2 - A valid attempt was made to test functionality with obvious gaps where functionality is not tested
- 1 - There was little to no attempt to test this application.

### PropType Implementation

- Pass - Proptype validation is implemented for any component receiving props.
- Fail - There are components missing proptype validation.

### README Updates
- Pass - The README.md file has been updated with a description of the project, the team, and how to get it up and
  running
- Fail - The boilerplate README is still in place

### Code Sanitation

The output from ESLint shows…

* 4 - Zero complaints
* 3 - Five or fewer complaints
* 2 - Six to ten complaints
* 1 - More than ten complaints

### Workflow
- 4 - Developer(s) make many small, atomic commits that clearly document the evolution of the application and do not contain irrelevant changesets that aren't reflected by the commit message. Commit messages are concise and consistent in syntax and tense. Developer(s) effectively use git branches and pull requests when applicable to incorporate changes into the application, and are not pushing directly to master. There are no instances where the developer(s) have committed source code that should be .gitignored. There are no instances of "dead" or commented-out code and debugger statements like console.log.

- 3 - Developer(s) make many small, atomic commits that document the evolution of the application but sometimes contain irrelevant changesets and inconsistent commit messages. Developer(s) use git branches and pull requests when applicable to incorporate changes into the application, and are not pushing fresh changes directly to master. Pull requests may contain little or no code review. There may be slight instances where the developer(s) have committed source code that should be .gitignored. There may be some instances of "dead" or commented-out code and debugger statements like console.log that need to be cleaned up.

- 2 - Developer(s) make large, inconsistent commits that contain irrelevant changesets and make it difficult to follow the evolution of the application. Developer(s) rarely use git branches and frequently incorporate changes directly into master with little or no review process. There are instances of committed source code that should be .gitignored and instances of dead code and/or debugger statements.

- 1 - Developer(s) make very few commits that each cover too much responsibility and aren't indicative of how the application evolved. Branches and pull requests were not used and changesets were applied directly to master. There are many instances of committed source code that should be .gitignored and many instances of dead code and/or debugger statements.

## Surprise and Delight
- 4 - Unicorn
- 3 - Hot Fire
- 2 - Sparkles
- 1 - Magic
