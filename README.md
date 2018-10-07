# HeadCount 2.0

This application is a project assigned as a part of the Front End Engineering program at the Turing School of Software and Design. It is fundamentally designed to challenge the developer to simultaneously manage multiple React components combined with having to make some difficult decisions about where and how data should be organized, stored, and manipulated.

The project is centered around a data set of kindergarten test scores organized by year and district that must be cleaned and formatted so that it can be properly deployed in the web app.

HeadCount 2.0 also stresses a focus a test-driven development with requirements that all functions, props, state, conditionals, and JSX rendering be thoroughly tested.

This application was built using the `create-react-app` boilerplate. 

## Fundamental Project Goals: 

* Separate application logic into small, testable functions.
* Create modular, reusable React components.
* Use propTypes to validate props passed to each component.
* Write meaningful, comprehensive unit and integration tests.

## App Functionality: 

* Clean and deploy the data set as if it were an API call.
* Write a function to filter the data set by district name.
* Make pairs of district data comparable via a comparison component.
* Layout and style the application while keeping an eye for appropriate user experience and design.

![main](https://user-images.githubusercontent.com/29719272/46584808-2f3e1a80-ca25-11e8-9e4a-0b65bdb2e149.png)
![filter](https://user-images.githubusercontent.com/29719272/46584806-2f3e1a80-ca25-11e8-9032-1bda90ffad46.png)
![compare](https://user-images.githubusercontent.com/29719272/46584805-2f3e1a80-ca25-11e8-86fa-f9f156ecc834.png)
![info](https://user-images.githubusercontent.com/29719272/46584807-2f3e1a80-ca25-11e8-9491-828aec9abe0c.png)


## Process:

I started this project by focusing first on the data set I was working with so that it could be mapped over and leveraged into individual card components. This was followed by writing a simple case-insensitive search function that would allow users to filter the data by district name. 

Once the data was made workable, I set about with basic design and layout by creating readable cards for each district data point. This was followed by writing logic to access the filter function via the user interface.

Next I worked on the comparison components that would allow the user to select two different sets of district data so that they could be compared side-by-side.

Each of these steps was taken side-by-side with the associated testing for each component and its logic.

This was followed by design and layout focus, sticking to a clean interface with a mono-color scheme.

## Challenges:

This project is deceptively difficult since it requires difficult decisions to be made about how data is stored and manipulated. Some data initially presents as being ideally suited for storing at the granular level but are better kept at a much higher place in the component hierarchy. A specific example of this is with the selected state of each card component. While one can do this at the card level, this makes rendering and interacting with filtered content exceptionally difficult.