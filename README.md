#### Covid-Tracker
Application for informational purpose with data related to Covid-19. It is react application created with create-react-app and styled with styled-components.

##### Screenshot of page layout prototype.
![Alt text](./src/img/demo.png?raw=true "COVID-app")
##### Directory
```bash
├── gist.md
├── jsconfig.json
├── package.json
├── package-lock.json
├── public
│   └── index.html
├── README.md
└── src
    ├── api
    │   ├── Global.js
    │   ├── routes.js
    │   └── UK.js
    ├── App.jsx
    ├── components
    │   ├── common
    │   │   ├── Covid.jsx
    │   │   └── SectionHeader.jsx
    │   ├── Footer
    │   │   └── Footer.jsx
    │   ├── Header
    │   │   └── Header.jsx
    │   ├── index.js
    │   ├── Main
    │   │   ├── CountryPicker.jsx
    │   │   ├── Global.jsx
    │   │   ├── index.js
    │   │   ├── Main.jsx
    │   │   └── Summary.jsx
    │   └── styled.js
    ├── factory.js
    ├── img
    │   ├── covidIcon.svg
    │   ├── covidMain.png
    │   ├── graph.png
    │   └── index.js
    ├── index.js
    └── store
        ├── countries.json
        └── total.json
```
#### Packages
* styled-components
* axios
* nivo
* react-countup

#### To-do
* create footer
* deploy to Gcloud
* implement live api with fall back to store in case of 404
* create rwd for app
* refactor directory
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
