import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AlertDemo from './AlertDemo';
import TableDemo from './TableDemo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* <AlertDemo /> */}
    <TableDemo />
  </React.StrictMode>
);


reportWebVitals();
