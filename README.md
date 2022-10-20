# NoSQL: Social Network API

### License

![GitHub license](https://img.shields.io/badge/license-MIT-green.svg)

---

## Description

This application was to build a Social Network API built using Mongoose and is ready to be connect to the front end. User just need to use Insomnia in order to run the application.

---

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Test](#test)
4. [Questions](#questions)

---

<a name="installation"></a>

## Installation Instructions

The user should clone the repository from GitHub and download Node.js. This application also requires to npm install node_modules, package-lock.json, and npm install MySql

---

<a name="usage"></a>

## Usage Information

- If you would like to view a video on walkthrougth the application demonstrating, please go to my [Usage Video](https://drive.google.com/file/d/1bP6JR2H7vEN2iMqOTMKtOulUTPMW0jO9/view)

---

<a name="test"></a>

## Test ScreenShot
 You can create, read, update, and delete users and thoughts, and add and delete reactions and friends using these urls:

http://localhost:3001/api/user

http://localhost:3001/api/user/:id (required to delete, update, or just to read one category)
To post a user - JSON being sent will be this: { "username": "username", "email": "email@example.com" }

http://localhost:3001/api/user/:userId/friends/:friendsId (required to delete and add a friend)

http://localhost:3001/api/thoughts
To create a thought - JSON being send will be formated like this: { "thoughtText": "This is an example thought", "username": "username of person creating the thought" }

http://localhost:3001/api/thoughts/:id (required to delete, update, or just to read one tag)

http://localhost:3001/api/thougts/:thoughtsId/reactions (required to add a reaction to a thought)
To create a reaction - JSON being send will be formated like this: { "reactionBody": "This is an example reaction", "username": "username of person creating the reaction" }

http://localhost:3001/api/thoughts/:thoughtsId/reactions/:reactionsId (required to delete a reaction from a thought)

![Screen-Shot](./Assets/getAllUsers.png)
![Screen-Shot](./Assets/getAllThought.png)
![Screen-Shot](./Assets/getThoughtbyId.png)
![Screen-Shot](./Assets/AddReaction.png)
![Screen-Shot](./Assets/deleteReaction.png)

<a name="questions"></a>

## Questions

### GitHub Profile:

https://github.com/TottoMoe

### Contact Me:

If you have any additional questions, please send me an email.

#### jennydhj@gmail.com

---
