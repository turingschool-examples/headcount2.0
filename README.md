### 05-06-2018

This app takes in data we were given as if it were 3rd party data. The data is then cleaned and displayed as cards, with any
of the data that is less than 0.5 being displayed in brick red and a lighter font weight, and any data that is greater
than 0.5 being displayed in dark blue with a heavier font weight. The search component dynamically updates the cards on
the page as you type. Clicking on card will select them or deselect them. If two cards are clicked at the same time, 
you will be shown a card comparing the average data between the two selected cards. Only two cards can be selected at 
a time, and the cards should persist in the shown cards component while searching. As of the writing of this README,
there is a know issue with the selected card highlighting while searching.


### To use this app:

Clone down the repository

Run `npm install` from the root directory

Run `npm start` and visit localhost:3000 in your browser