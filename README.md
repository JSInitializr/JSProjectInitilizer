# JSProjectInitilizer [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](https://github.com/JSInitializr/JSProjectInitilizer/pulls)

BootStrap Your Application.

- [Creating an App](#creating-an-app) – How to create a new app.

## Quick Overview


The Desc


### Get Started Immediately

You **don’t** need to install or configure tools like Webpack or Babel.<br>
They are preconfigured so that you can focus on the code.

Just create a project, and you’re good to go.

## Creating an App

**You’ll need to have Node 8.16.0 or Node 10.16.0 or later version on your local development machine** (but it’s not required on the server). You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to easily switch Node versions between different projects.

To create a new app, you may choose one of the following methods:

### Select the Technology 

Download the zip.

### npm Install

```sh
npm install
```

### Yarn

```sh
yarn install
```


It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-app
├── README.md
├── node_modules
├── package.json
├─- .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
```

No configuration or complicated folder structures, just the files you need to build your app.<br>
Once the installation is done, you can open your project folder:

```sh
cd my-app
```

Inside the newly created project, you can run some built-in commands:

### `npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

## Contributing

We'd love to have your helping hand on `JS Initailzr`! See [CONTRIBUTING.md](CONTRIBUTING.md) for more information on what we're looking for and how to get started.


## License

JS Initialzr is open source software [licensed as MIT].
