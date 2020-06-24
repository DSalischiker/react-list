import React from 'react';
/* import logo from './logo.svg'; */
import './index.css';
import Main from '../Main';


class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('Se ejecutó el constructor');
    //INITIALIZE STATE
    this.state = {
      date: new Date(),
      personas: [{
        img: '',
        name: 'Diego',
        position: 'Estudiante'
      },
      {
        img: '',
        name: 'Diego2',
        position: 'Estudiant'
      },
      {
        img: '',
        name: 'Diego3',
        position: 'Estudian'
      },
      {
        img: '',
        name: 'Diego4',
        position: 'Estudia'
      }]
    };
  }

  componentDidMount() {
    console.log('Se ejecutó CDM');
    //FETCH DE DATA
    /* const personas = [{
      img: '',
      name: 'Diego',
      position: 'Estudiante'
    },
    {
      img: '',
      name: 'Diego2',
      position: 'Estudiant'
    },
    {
      img: '',
      name: 'Diego3',
      position: 'Estudian'
    },
    {
      img: '',
      name: 'Diego4',
      position: 'Estudia'
    }]
    this.setState({ personas }); */
  }

  render() {
    //MOSTRAR DATA EN HTML (SOLO JSX)
    //IT EXECUTES AT THE START AND EVERY TIME THE STATE CHANGES
    console.log('Se ejecutó el render');
    return <div className="App">
      APP REACT
      <Main data={this.state.personas} />
    </div>
  }
}
export default App;
/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

