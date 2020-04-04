# Progressive Budget App
​
## Overview
Giving users a fast and easy way to track their money is important, but allowing them to access that information anytime is even more important. Having offline functionality is paramount to our applications success.

### Links

Github repository: https://github.com/tecain13/Progressive-Budget

Heroku site: https://sheltered-beach-07876.herokuapp.com/
​
### Problem
User Story
AS AN avid traveller
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
SO THAT my account balance is accurate when I am traveling
​
### Solution

This application allows a user to reach track their individualized transactions online or offline for seamless financial decisionmaking.
​
## Tech and Features Used
​
* Node.js
* Javascript
* JQuery
* Mongo DB
* NPM Modules: Express, Mongoose, Morgan
* MVC methodology

## How to use
​
On the hosted heroku webpage, enter the title/topic of the transaction and the amount. Then, decide whether to add to your current account or subtract from it based on the transaction time. See a graphical representation of your financial progress below the main chart.

## Technical Overview

The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.
Offline Functionality:

Enter deposits offline
Enter expenses offline

When brought back online:
Offline entries should be added to tracker.


Acceptance Criteria
GIVEN a user is on Budget App without an internet connection
WHEN the user inputs a withdrawal or deposit
THEN that will be shown on the page, and added to their transaction history when their connection is back online.




