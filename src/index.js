import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css';
import 'jquery/dist/jquery.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {  MediaContextProvider } from './MediaContext/MediaContext';
import {SearchContext} from './SearchContext/SearchContext';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <MediaContextProvider>
  <SearchContext>



  <BrowserRouter  basename={process.env.PUBLIC_URL}>

  <App/>
  </BrowserRouter>

  </SearchContext>
  </MediaContextProvider>



);

