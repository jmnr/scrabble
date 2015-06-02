#Crossword Solver

This is an autocomplete app for people who solve crossword puzzles. Enter letters at specific positions and get all the words in the dictionary with letters at those positions.

This project was completed as part of the Founders and Coders Javascript bootcamp along with @Ronan_Mccabe, @MsMichelleGellar, and @JoshuaPitzalis.

[![Build Status](https://travis-ci.org/jmnr/scrabble.png?branch=master)](https://travis-ci.org/jmnr/scrabble)
[![Code Climate](https://codeclimate.com/repos/5565ab08e30ba00ffb008e17/badges/063396e0507dff112f33/gpa.svg)](https://codeclimate.com/repos/5565ab08e30ba00ffb008e17/feed)
[![Test Coverage](https://codeclimate.com/repos/5565ab08e30ba00ffb008e17/badges/063396e0507dff112f33/coverage.svg)](https://codeclimate.com/repos/5565ab08e30ba00ffb008e17/coverage)
[![Dependency Status](https://david-dm.org/jmnr/scrabble.svg)](https://david-dm.org/jmnr/scrabble)
[![devDependency Status](https://david-dm.org/jmnr/scrabble.svg)](https://david-dm.org/jmnr/scrabble.svg#info=devDependencies)

##How to get it running

You will need to have a basic understanding of hwo to use git, your terminal and you will need nodejs and nodemon installed to get this working.

#### 1. Clone the repo

```sh
git clone https://github.com/jmnr/scrabble.git
```

#### 2. Install the node.js dependencies:

```sh
npm install
```

#### 3. Run the (*module*) Tests:

```sh
npm test
```

#### 4. Run the Server with [Nodemon](https://github.com/remy/nodemon):

```sh
npm run nodemon
```
#### 5. Go to localhost:3000 in your browser.

## How we built it

### Autocomplete Module

+ [x] import a list of words into an array called words.
+ [x] search through list of words for a string and return list of suggestions.
+ [x] record the string that was searched for (for stats and graphs!).

### Autocomplete HTTP Server (API)

+ [x] serve an html page with a ***search box***.
+ [x] expose the `ac.findWords` method as an API endpoint /find/:word
+ [x] display the ***definition*** of a word when the person clicks/taps (*or navigates using the keyboard arrows - for extra credits*!) to their desired word.

### Back end
+ [x] create an ***endpoint*** in server.js for the   format: /define/:word which uses the ac module's  findWords method to lookup word suggestions and returns an array of these suggestions as the http response

+ [x] Integrate - Search for Tweets based on the word the person looked up to give them context on how to use it.

### Front end / UX

1. [x] Wireframe a great word searching user experience!

2. [x] Using the knowledge of QUnit for front-end TDD you gained in the last two weeks, build great user experience for searching words!

### Repo Owner

+ [x] Add a ***.jshintrc*** file to your project
+ [x] learn about ***pre-commit hooks*** and add a pre-commit hook to lint
your code *before* anyone can commit (*unlinted*) code
+ [x] Learn about ***CodeClimate***
+ [x] Learn about (*Continuous Integration*) ***Travis-CI*** and
  + [x] add .**travis.yml** to your repo
  + [x] add "***build passing***" badge to your readme
+ [x] Add **Dependencies Badge** to your readme.
+ [x] Deploy to Heroku.
