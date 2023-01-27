import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hello from './App';
import { NombreCompleto as Name } from './components/NombreCompleto';
import Mascota from './components/Mascota';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hello />
    <Name name="Trinity" age={10} show={true} />
    <Mascota name="Froyo" age={10} show={true} />
    <Name name="Switch" age={20} show={false}/>
    <Name name="Mouse" age={20} show={false}/>
  </React.StrictMode>
);
