This project (Holidays by Country [HC]) was bootstrapped with [Vue-cli-3](vue create).

# HOLIDAYS BY COUNTRY (HC)

It is a responsive single page web application that provides the holidays info based on the chosen country. This app is powered by holidayapi.com.

## Getting Started

HC was developed using Vue.

### Prerequisites

The following web technologies are necessary to run this application

[node.js](https://nodejs.org/en/)<br/>
[git](https://git-scm.com/downloads)

### Set up

``` 
git clone https://github.com/angsherpa232/HolidaysFinder.git
cd HolidaysFinder
```

Install the necessary node modules specified in [package.json] using:

``` 
npm install
```
### Create .env.local file in the root directory to store your API key. (important step)

``` 
touch .env.local
```
In this file create a variable that holds your API key as it's value:
VUE_APP_API = YOUR_API_KEY (One can get public API from holidayapi.com) 

### Compiles and minifies for production

To build the application, from the root directory, run:

``` 
npm run build
```

This will create a dist directory. Once the app is built, follow the running instructions

### Running

The built app can be run using any server: Example python simple server (python should be pre-installed)

``` 
python -m simpleHTTPServer
```

Open your web browser and view the app at `localhost:8000` 

### Compiles and hot-reloads for further development

``` 
npm run serve
```

### Run your unit tests

``` 
npm run test:unit
```

### Lints and fixes files

``` 
npm run lint
```

