# gdoc_clone

Clone for Google Docs crafted with Node, Express, Mongodb, Jquery and a splash of good ole' fashioned Vanilla JavaSCript.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

This project uses NodeJS, we recommend installing that before continuing
For db edits, this uses mongodb -> install any related software or npms
```

### Installing

A step by step series of examples that tell you how to get a development environment running

```
1. Create a new repository in your account | select Node from gitignore and initialize with a readme
2. Create a folder on your local machine
3. Clone this existing Repository into this folder
4. Open this folder in your workspace (vscode, atom, etc.)
5. Initialize a new  node project, npm install, and Start node server
6. Open Mongo/mongod and create a new db
7. Make any desired changes
8. Add/Commit/Push to your new repo

```

```
Heroku/public
1. Create a new repository in your account | select Node from gitignore and initialize with a readme
2. Create a new project in heroku and link to your github
3. Add Mongodb as an add on in your heroku project and copy the login/url credentials
4  Create a folder on your local machine
5. Clone this existing Repository into this folder
   - Open this folder in your workspace (vscode, atom, etc.)
5. Initialize a new  node project, npm install all related, and Start node server
6. Add your db information to your server page -- Make any desired changes
7. Add/Commit/Push to your new repo
8. 

```

### And coding style tests

This app uses dynamic rendering to display the documents to the page. This is a one page app, so any rendered element will be in the separate stylesheet titled doc.css

```
Styling Home UI // Sections to look out for

header 
- #top nav -> Houses Entire nav section
- #top h1 img -> Logo
- .new : Div w/ plus icon for creating a new document
- .docPrev : Image/Caption cards for content

```

```
Styling Docs Page // Sections to look out for
- #measure: Empty nav section which can be used for a margin editor
- #docArea: White space for document and keypress entry
- #options: File/ Edit/ View / ETc.
- The rest are semantic
```
```
## Deployment

Add additional notes about how to deploy this on a live system. Gonna add stuff here on deploying to Heroku

## Built With

* [NodeJS](https://nodejs.org/) - The Server!!
* [ExpressJS](https://expressjs.com//) - Route/Server Management
* [Mongoose](https://mongoosejs.com/) - Interacting w/ MongoDB
* [BootStrap](https://mongoosejs.com/) - Very sparingly for a few styled elements
* [JQuery](https://api.jquery.com/) - 


## Authors

* **Dishanta Kpatrick** - *Lead Dev - UI, Support, Global CSS, deployment, etc. * - [DishantaK](https://github.com/DishantaK)
* **Christian Graves** - *Style Rendering - Menu styles/Saving to Object* - [christiangraves](https://github.com/christiangraves)
* **Matt Byrnes** - *Document Creation - Adding/Saving/Accessing Docs to and From DB* - [mattbyrnes](https://github.com/mattbyrnes)
* **Marcus Robinson** - *Keypress - Add/Saving Document Text* - [MarcusRobinson928](https://github.com/MarcusRobinson928)

See also the list of [contributors](https://github.com/DishantaK/gdoc_clone/graphs/contributors) who participated in this project.

## License

This project is free for private or public use, just be nice and give us a shoutout!

## Acknowledgments

* Hat tip to our instructors CJ and Hannah!
* Google Docs for being awesome
* Thanks for watching....

