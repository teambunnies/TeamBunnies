# Discover Chicago

Discover Chicago was created to aggregate information for new Immigrants to Chicago. The App has a built-in Chicago Name Generator which automatically generates a fun new Chicago Landmark based name everytime you log in. We have an Image Gallery, Must Try Foods and Experiences, Consulate Information, and a language speaking density map so you can get the most out of your stay in Chicago.

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Contact](#contact)

## General info
This a Full Stack MERN app using JSONWebToken for authentication and Redux for global auth scope.


## Screenshots

Title

gif


## Technologies

*   bcryptjs version 2.4.3
*   bootstrap version 4.3.1
*   config version 3.2.2
*   dotenv version 8.0.0
*   express version 4.16.3
*   express-validator version 6.1.1
*   if-env version 1.0.4
*   jsonwebtoken version 8.5.1
*   mongoose version 5.6.5
*   morgan version 1.9.1
*   request version 2.88.0
*   axios version 0.18.0
*   google-map-react version 1.1.4
*   moment version 2.24.0
*   react version 16.6.3
*   react-animated-css version 1.2.1
*   react-dom version 16.6.3
*   react-moment version 0.9.2
*   react-redux version 7.1.0
*   react-router-dom version 4.3.1
*   react-scripts version 2.1.1
*   react-select version 3.0.4
*   redux version 4.0.4
*   redux-devtools-extension version 2.13.8
*   redux-thunk version 2.3.0
*   uuid version 3.3.2

## Setup
Describe how to install / setup your local environement / add link to demo version.

Install all dependencies

Open your terminal and enter the following command.

```bash
npm i
```
Setup your local environment

 *Create a process.env file with the following code in order to connect to the database.

```
 APP_ENV=local
 
# DB Config (following this pattern) 
mongoURI= mongodb://<dbuser>:<dbpassword>@<servername>:<port>/<dbname>

# Google Maps Config
REACT_APP_MAP_KEY=<your API Key goes here>

# JSONWebtoken Config
jwtSecret=<generateakey>

```

Directory Structure of MERN App using MVC design pattern

```
.
├── app
│   ├── schedule.js
│   └── tweet.js
│   └── twitter.js
|   
|── config
│   ├── config.js
│   └── orm.js
|
├── db
│   ├── schema.sql
│   └── category_seed.sql
│ 
├── models
│   └── goal_config.js
│   └── users.js
│
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── imgs
│   └── js
|       └── goalLists.js
|       └── userForm.js
|       └── view.js
|   └── testpages
|   └── about.html
|   └── goalLists.html
|   └── index.html
|   └── userForm.html
|
│
└── server.js

```
  

## Code Examples

Scheduling Code Example

```

var cron = require('node-cron');
var goal_config = require('../models/goal_config')
const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const twilioPhone = process.env.twilioPhone
const client = require('twilio')(accountSid, authToken);




/*
Cron schedule to establish time stamps and execute functions
to query the databse for texts and calls that need to be made
*/
cron.schedule('*/15 * * * * *', () => {

//Generate Current Time
var d = new Date();
var h = d.getHours();
var m = ("0" + d.getMinutes()).slice(-2);
var textTime = `* ${m} ${h} * * *`

//Generate Date in needed format
var dd = ("0" + d.getDate()).slice(-2)
var mm = ("0" + (d.getMonth() + 1)).slice(-2)
var yyyy = d.getFullYear();
var curDate = `${yyyy}-${mm}-${dd}`;

//Modify current time to trigger calls 2 hours prior 
var cH = h + 2;
var callTime = `* ${m} ${cH} * * *`

//format to update time stamp on SQL
var texted = { last_fired: `${curDate}` }
var called = { last_called: `${curDate}` }

  console.log(`
running ${h}:${m} | ${curDate} | ${textTime} | ${callTime}
  `)
  queryAlerts(textTime, texted)
  queryCalls(callTime, called)
});

//query mysql for Text Alerts

function queryAlerts(textTime, texted) {
  goal_config.allGoals(function (result) {
    // console.log(result)

    //loop api response for data formatting to twilio API
    console.log(`Texts Phone -   ID  - Goal Name - Time`)
    for (i = 0; i < result.length; i++) {
      var time = result[i].daily_occurance
      var phone = result[i].phone
      var id = result[i].id
      var goalName = result[i].name
      // console.log(time)
      console.log(`Texts ${phone} - ${id} - ${goalName} - ${time}`)
    }

    //if the time the user needs to be reminded matches the current time
    if (time === textTime) {
      console.log("text match", id)

      sendText(goalName, phone)
      updateTable(texted, id)
    } else {
      console.log("No texts to Send")
    }
  })
}

function queryCalls(callTime, called) {
  goal_config.callGoals(function (result) {
    // console.log(result)
    console.log(`CALLS Phone -   ID  - Goal Name - Time`)
    //loop api response for data formatting to twilio API
    for (i = 0; i < result.length; i++) {
      var time = result[i].daily_occurance
      var phone = result[i].phone
      var id = result[i].id
      var goalName = result[i].name
      // console.log(time)
      console.log(`Calls ${phone} - ${id} - ${goalName} - ${time}`)
    }

    //if the time matches 2 hours prior to the current time, send the call
    if (time === callTime) {
      console.log("call match", id)
      callUser(phone, id)
      updateTable(called, id)
    } else {
      console.log("No Calls to send")
    }
  })
}

function sendText(goalName, phone) {

  let msg = `Guess you're not gonna ${goalName} today`

  console.log(msg);

  // send text via twillio  
  client.messages
    .create({
      body: `${msg}`,
      from: `+1${twilioPhone}`,
      to: `+1${phone}`
    })
    .then(message => console.log(message.sid));

}
//Call User via Twilio 
function callUser(phone, id) {

  client.calls
    .create({
      //url must be PUBLIC address, in order for Twilio text-2-speech module to function
      //an xml page must be generated with the text to be read off, and it must be public
      url: `https://agile-wildwood-70962.herokuapp.com/api/twiml/${id}`,
      to: `+1${phone}`,
      from: `+1${twilioPhone}`
    })
    .then(call => console.log(call.sid));
}

//update the table both for texts and calls so that duplicates are not made in the same day
function updateTable(update, id) {
  goal_config.updateOne(update, id, function (data) {
    console.log(`Updated ${id}: ${update}`)
    console.log(data)
  });



}

```



## Features
List of features ready and TODOs for future development

* Responsive design
* Easy user experience
* Client Phone Calls
* Client Text messages

To-do list:
* User Authentification
* Twilio IVR
* Twitter integration
* HTML Notifications 

## Status
Project is: in progress because we want to continue to make improvements and improve the user experience. 


## Contact
Created by  [@somemothersson] [@ambreenfafzal] [@FaraahIbarra]  - feel free to contact us!