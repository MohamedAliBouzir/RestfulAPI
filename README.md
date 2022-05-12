
# Authentification RESTful API
---
## 🧾 Contents
* [About the project](#)
* [Packages](#)
* [Project tree](#)
* [Getting Started](#)
    * [Development Technologies](#)
    * [Prerequisites](#)
    * [Installing](#)
    * [Running the project](#)
* [Authors](#)

## 💭 About the project
Authentification RESTful API is an academic project in which we were asked to create a RESTful API and to test its integrity using mulesoft with anypoint.
## 🧱 Packages

* [Nodemon](https://www.npmjs.com/package/nodemon) : nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
* [Sequelize](https://www.npmjs.com/package/sequelize) : Sequelize is a promise-based Node.js ORM tool for Postgres, MySQL, MariaDB, SQLite, DB2 and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.
* [mysql](https://www.npmjs.com/package/mysql) : This is a node.js driver for mysql. It is written in JavaScript, does not require compiling, and is 100% MIT licensed.
* [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken) : JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties.  The claims in a JWT are encoded as a JSON object that is used as the payload of a JSON Web Signature (JWS) structure or as the plaintext of a JSON Web Encryption (JWE) structure, enabling the claims to be digitally signed or integrity protected with a Message Authentication Code (MAC) and/or encrypted.
* [BCrypt](https://www.npmjs.com/package/bcrypt) : bcrypt is a password-hashing function designed by Niels Provos and David Mazières, based on the Blowfish cipher and presented at USENIX in 1999.

[]() : 
## 🌳 Project tree
```text
  ├───config
  │   └───config.json
  ├───db
  │   ├───reversed schema.mwb
  │   ├───reversed schema.mwb.bak
  │   └───schema.mwb
  ├───migrations
  │   ├───create-user.js
  │   ├───create-message.js
  │   └───create-like.js
  ├───models
  │   ├───index.js
  │   ├───like.js
  │   ├───message.js
  │   └───user.js
  ├───routes
  │   ├───likesCtrl.js
  │   ├───messagesCtrl.js
  │   └───usersCtrl.js
  ├───seeders
  ├───utils
  │   └───jwt.utils.js
  ├───.gitignore
  ├───apiRouter.js
  ├───package.json
  ├───package-lock.json
  ├───README.md
  └───server.js
```
## 🏁 Getting Started

### Development Tools:
<p align="left"> 
<a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://mariadb.org/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg" alt="mariadb" width="40" height="40"/> </a> <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> </p>


#### 📋 Prerequisites
* You need [Git](https://git-scm.com/), [Node.js](https://nodejs.org/) and [Express](https://expressjs.com) to install the project.

#### 📥 Installing
Node version must be 16 or higher.
```sh
> npm install
```
or
```sh
> yarn install
```

#### 🌠 Running the project
Execute this command to run the project:

```sh
> npm start
```
## 💼 Authors
* [**BOUZIR Mohamed Ali**](https://www.linkedin.com/in/bouzir-mohamed-ali/) - *Developer*
* [**BEN MABROUK Ons**](https://www.linkedin.com/in/ons-ben-mabrouk-499904197/) - *Developer*


