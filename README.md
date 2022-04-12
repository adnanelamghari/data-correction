# data-correction

Each endpoint holds some data, but someone made a mistake and shuffled it.
Thankfully, all users ids are still here !
You have to fix it ! For that, you have to make a backup of each endpoint locally (one json file per endpoint),
then compile them in one file, sanitize the data, store it locally and upload it on [Krates](https://app.krat.es/).

Here are the endpoints :
GET : https://recrutement-practice-default-rtdb.firebaseio.com/informations.json

```json
{
  "$userId" : {
    "name":"L43t1t14"
  }
}
```

GET : https://recrutement-practice-default-rtdb.firebaseio.com/jobs.json

```json
{
  "$userId" : {
    "job": "Developer"
  }
}
```

GET : https://recrutement-practice-default-rtdb.firebaseio.com/users.json

````json
{
  "$userId":{
    "city": "pArIs",
    "age": 26
  }
}
````

Be careful when you sanitize the data because :

- if user name is "#ERROR", you have to skip it and pick the name in another table
- name vowel are replaced by number (e by 3, a by 4, i by 1 and o by 0).
- cities are not written in a proper way (there are some letters in uppercase in the middle of the word, but they should
  only be at the beginning)
- You have to delete all `null` or `undefined` fields in the sanitize format
  Some informations like name are injected in the bad table, so you've to sort them :
- always take the name in users, and if missing, pick it in an other table if available
- always take the age in informations, and if missing, pick it in an other table

The output should look like `data/source/results.json`.

---
This guide will walk you through using the backend of the application.

## Set up your workstation

* Install [Node.js](http://nodejs.org) to your local workstation

## Clone your Application

Clone the application to your local workstation:

	$ git clone https://github.com/adnanelamghari/data-correction.git
	$ cd data-correction

## Prepare your Application

To use this Node JS application, you will need to conform to 2 basic requirements:

1. Use [NPM](https://npmjs.org/) to manage dependencies
2. Use [Node](https://nodejs.org/en/) to run the project

#### 1. Install dependencies with NPM

Then install the dependencies with `npm`.

	npm install

#### 2. Use Nodemon to manage processes

To run the application use npm start or find-record script on the package.json file :

	npm run start

#### 3. Output files

The application will generate the output files in the `data/exported` folder and upload the sanitized data to krat

To change the Krat id, simply change it in the `env.js` file.

## Test code

To test the code of this project simply run the test script :

    npm run test