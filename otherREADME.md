# Note Taker

## Table of Contents

1.[Description and Purpose](#description)

2.[Installation](#installation)

3.[Usage](#usage)

4.[Contribution](#contribution)

5.[License](#license)

6.[Questions](#questions)

## Description

The Note Taker application is a browser-based note taking application that can be used to write and save notes.

It allows the user to write and save notes without having their desk top covered in sticky notes.

## Installation

You can install this application by forking the repository from github.com/alanhornbaker/noteTaker and opening the repository in your text editor. You will also want the LTS version of NPM so the node works.

## Usage

Functions that you will use to to use the application once you have installed it:
npm install, other node functionality, server setup, and routing organization

## Contribution

You can contribute to this application by opening a pull request at github.com/alanhornbaker/noteTaker. Currently there are no rules or standards for contribution.

## License

some license

## Questions

Known erros and other issues can be raised to the repository on github at github.com/alanhornbaker/noteTaker , or can be sent to my github profile at github.com/alanhornbaker. As last resort, questions can be emailed to me directly at alanhornbaker@gmail.com

## User Story

AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete

## Acceptance Criteria

GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page

WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column

WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page

WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes

WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column

WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

## Bonus

You haven’t learned how to handle DELETE requests, but this application has that functionality in the front end. As a bonus, see if you can add the DELETE route to the application using the following guideline:

DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.

## Mock-Up Examples

![ Mock Up Image 1](./Develop/public/assets/images/11-express-homework-demo-01.png "Basic Layout")

![ Mock Up Image 2](./Develop/public/assets/images/11-express-homework-demo-02.png "Adding Note")
