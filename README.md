<<<<<<< HEAD
# autocomplete - Node JS Week

## Features
* [x] import a list of words into an array called words
* [x] search through list of words for a string and return a list of suggestions
* [x] record a string that was searched for (for stats and graphs)
=======
#Scrabble Search

* why
* what
* how

Search for a word given random characters and their positions. Find out the meaning of the word as well as how to use it.

[![Build Status](https://travis-ci.org/jmnr/scrabble.png?branch=master)](https://travis-ci.org/jmnr/scrabble)
[![Code Climate](https://codeclimate.com/repos/5565ab08e30ba00ffb008e17/badges/063396e0507dff112f33/gpa.svg)](https://codeclimate.com/repos/5565ab08e30ba00ffb008e17/feed)
[![Test Coverage](https://codeclimate.com/repos/5565ab08e30ba00ffb008e17/badges/063396e0507dff112f33/coverage.svg)](https://codeclimate.com/repos/5565ab08e30ba00ffb008e17/coverage)
[![Dependency Status](https://david-dm.org/jmnr/scrabble.svg)](https://david-dm.org/jmnr/scrabble)
[![devDependency Status](https://david-dm.org/jmnr/scrabble.svg)](https://david-dm.org/jmnr/scrabble.svg#info=devDependencies)

## Features

### Autocomplete Module

+ [x] import a list of words into an array called words
+ [x] search through list of words for a string and return list of suggestions
+ [x] record the string that was searched for (for stats and graphs!)

### Autocomplete HTTP Server (API)

+ [ ] serve an html page with a ***search box***
+ [x] expose the `ac.findWords` method as an API endpoint /find/:word
+ [ ] display the ***definition*** of a word when the person clicks/taps (*or navigates using the keyboard arrows - for extra credits*!) to their desired word
+ [ ] display the ***history*** of words people have searched for


### Back end
+ [x] create an ***endpoint*** in server.js for the format: /define/:word which uses the ac module's findWords method to lookup word suggestions and returns an array of these suggestions as the http response

In your module (index.js)
+ [ ] write a ***test*** for a new method "**define**" which will return a `callback(err, definition)` when you call it in the following way: `ac.define(word, callaback)`
+ [ ] write the `ac.define` method to **request** a word definition from Wiktionary API
  + [ ] parse the result of this API request and extract the definition
  + [ ] return the *just* the definition to the client for display in the UI when client visits url: **/define/awesome**
+ [ ] expose the **searches** property of the **ac** module url: /searches/ should return a json object which the client can interpret and display

### Front end / UX

1. [x] Wireframe a great word searching user experience!

2. [ ] Using the knowledge of QUnit for front-end TDD you gained in the last two weeks, build great user experience for searching words!

3. [ ] Display a stats (*searches*) for the words people have looked up in an intuitive and creative way!

### Repo Owner

+ [x] Add a ***.jshintrc*** file to your project
+ [x] learn about ***pre-commit hooks*** and add a pre-commit hook to lint
your code *before* anyone can commit (*unlinted*) code
+ [x] Learn about ***CodeClimate***
+ [x] Learn about (*Continuous Integration*) ***Travis-CI*** and
  + [x] add .**travis.yml** to your repo
  + [x] add "***build passing***" badge to your readme
+ [x] Add **Dependencies Badge** to your readme

# Stretch Goals

+ [ ] Deploy to Heroku

+ [x] Integrate - Search for Tweets based on the word the person looked up to give them context on how to use it

+ [ ] highlight the characters the person typed in the word suggestions

+ [ ] Search for a string of characters *anywhere* in the word!
>>>>>>> master
