#### Covid-Tracker
Application for informational purpose with data related to Covid-19. It is react application created with create-react-app and styled with styled-components.\
[Live Demo](http://pawelsiwek.co.uk/covid)

##### Screenshot of page layout prototype.
![Alt text](./src/img/demo.png?raw=true "COVID-app")
##### Directory
```bash
├── api
│   ├── Global.js
│   └── UK.js
├── components
│   ├── common
│   │   ├── Covid.jsx
│   │   └── SectionHeader.jsx
│   ├── factory.js
│   ├── Footer
│   │   └── Footer.jsx
│   ├── Header
│   │   └── Header.jsx
│   ├── index.js
│   ├── Main
│   │   ├── Chart.jsx
│   │   ├── CountryPicker.jsx
│   │   ├── Global.jsx
│   │   ├── index.js
│   │   ├── Main.jsx
│   │   └── Summary.jsx
│   └── styled.js
├── Covid.jsx
├── img
│   ├── covidIcon.svg
│   ├── covidMain.png
│   ├── demo.png
│   ├── graph.png
│   └── index.js
└── store
    ├── countries.json
    ├── PageFeed
    │   └── Footer.js
    └── total.json
```
#### Packages
* styled-components
* axios
* nivo
* react-countup

#### To-do
* <s>merge with portfolio</s>
* <s>deploy to Gcloud </s>
* <s>refactor directory </s>
* <s>fix chart bug</s>
* <s>create Global component
* create Country Summary component
* consider implementation of library nivo</s>
* <s> create header
* create country picker
* setup Api
* save data from Api in store for production and fall back </s>
* <s>create list of details and data displayed in app</s>
* <s>create in figma structure of the app</s>
* <s>creat app with create-react-app</s>
* <s>create gcp app instance</s>
* <s>add jsconfig with base folder src</s>
* <s>create base directory with:
  * public
  * src
    * components
    * img
      * index.js
    * factory.js
    * store.js
    * styled.js
  * jsconfig.json </s>
* <s>find free Covid data API</s>
