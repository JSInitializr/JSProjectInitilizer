# JSProjectInitilizer [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](https://github.com/JSInitializr/JSProjectInitilizer/pulls)

BootStrap Your Application.

- [Creating an App](#creating-an-app) – How to create a new app.

## Quick Overview

Whether you’re developing a simple web application or constructing a modern application, JavaScript framework or library will help you achieve your goals. This article will focus on a custom web application development tool JS Initializr which helps you to create a project with a variety of related libraries and frameworks to achieve this goal.

Many a time configuring frameworks is a way too tedious job and even after downloading the frameworks we come across many dependencies that might not be required for our development, these dependencies increase the overall bundle size leading to increase in initial load time. The aim of this JS Initializr project is to provide a simple user interface where you can select technology, dependencies, and generate your project to start with.

There are several options for initializing a web application. While I could walk you through the steps of creating a project directory structure and defining a build specification, that’s wasted time better spent actually writing application code. Therefore, we’re going to lean on the JS Initializr to bootstrap our application.

The JS Initializr is a browser-based web application that can produce a skeleton of JavaScript project structure that you can flesh out with whatever functionality you want.

### Get Started Immediately

You **don’t** need to install or configure tools like Webpack or Babel.<br>
They are preconfigured so that you can focus on the code.

Just select the technology, choose dependencies and download a project, and you’re good to go.

## Creating an App

**You’ll need to have Node 8.16.0 or Node 10.16.0 or later version on your local development machine** (but it’s not required on the server). You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to easily switch Node versions between different projects.

To create a new app, you may choose one of the following methods:

### 1. Select the Technology 
#### Light Theme
![alt text](https://github.com/JSInitializr/JSProjectInitilizer/blob/master/public/githubImages/jspro.png)
#### Dark Theme
![alt text](https://github.com/JSInitializr/JSProjectInitilizer/blob/master/public/githubImages/jsprob.png)

### 2. Select dependencies
![alt text](https://github.com/JSInitializr/JSProjectInitilizer/blob/master/public/githubImages/searchSelectDep.png)

![alt text](https://github.com/JSInitializr/JSProjectInitilizer/blob/master/public/githubImages/searchSelectDepchoose.png)

### 3. Download the zip.
### 4. npm or yarn Install

```sh
npm install
```

### Yarn

```sh
yarn install
```

Inside the newly created project, you can run some built-in commands:

### `npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

## Contributing

We'd love to have your helping hand on `JS Initailzr`! See [CONTRIBUTING.md](CONTRIBUTING.md) for more information on what we're looking for and how to get started.
It is still in development and hosted on Heroku https://start-jsproject.herokuapp.com/

## License

JS Initialzr is open source software [licensed as MIT].
