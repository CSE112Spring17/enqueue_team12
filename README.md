# Enqueue [![CircleCI](https://circleci.com/gh/CSE112Spring17/enqueue_team12/tree/development.svg?style=svg)](https://circleci.com/gh/CSE112Spring17/enqueue_team12/tree/development)

First Run
----------------------------
1. Setup Account with [mLab](https://mlab.com/)
2. Copy mongoDB access point into app.js:

        $ var mongoURI = process.env.MONGOLAB_URI || 'YOUR MONGODB CONNECTION ON mLAB';
        
2. Install [Node.js](http://nodejs.org/download/)
3. Navigate to the root directory
4. Install npm dependencies:

        $ npm install
        $ npm install --global gulp

6. Use ``gulp`` to run the application
7. Navigate your browser to [http://localhost:4000](http://localhost:4000/)

Development Flow
----------------------------

* Checkout `Dev` Branch

```
git checkout Dev
git pull
```
* Branch off of Dev

```
git checkout -b <branch_name>
```
* Develop on that branch
* Thoroughly test your new code
* Push up code to your branch

```
git add .
git commit -m "<some_message>"
git push
``` 
* Create a pull Request
	* From the Project Github Page
![alt text](http://i.imgur.com/eNYkKVQ.png "Pull Request Button")
	* Make sure you are merging your branch into Dev
![alt text](http://i.imgur.com/NB0FQuZ.png "Pull Request Button")
	* Once Integration Tests to pass on codeship and a thumbs up is received from another team member in the commments merge your branch into Dev and Delete your branch (Github provides all this functionality from the pull request page)

Deployment Flow
----------------------------
* Using `Google Compute Engine` with `ngninx`
* Dev Host: `http://104.199.112.182/`
* Production Host: `coming soon`
* On Fridays we will deploy the Dev Branch to the Dev Host (might change to automatic deployment)
* On Saturdays we will Merge the Dev Branch into Master and deploy to production Host
* When we push to the Dev branch, if all tests are passing, it will be deployed to the Dev server.

Testing Flow
----------------------------
* Add unit tests to enqueue/test/test.js
* Add e2e tests to enqueue/test/e2e/e2e.js

#### Running Tests
* `npm test`

Logging in as Peter
----------------------------
In order to login as peter, use the following credentials

	username: peter@enque.com
	password: peter
	
The live app can be found [here](http://team-fubar.herokuapp.com/).
	
Slack Integration can be found here

	team-fubar.slack.com
	
	username: gev@ucsd.edu
	password: teamfubar
