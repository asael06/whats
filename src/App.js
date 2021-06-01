import { Fragment } from 'react';
import Header from './components/header/header'
import Navbar from './components/navbar/navbar'
import './App.css';

const App = () => (
  <Fragment>
    <div className="main-container">
      <Header title="WhatsApp"/>
      <Navbar/>
    </div>
  </Fragment>
)

export default App;
