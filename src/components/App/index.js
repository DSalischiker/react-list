import React from 'react';
/* import logo from './logo.svg'; */
import './index.css';
import Main from '../Main';
import Dropdown from '../Dropdown';
import faker from 'faker';

class App extends React.Component {
  constructor(props) {
    super(props);
    faker.locale = 'es';
    console.log('Se ejecutó el constructor');
    //INITIALIZE STATE
    const employees = Array.from({ length: 30 }, () => ({
      name: faker.name.findName(),
      sector: faker.name.jobArea(),
      avatar: faker.image.avatar(),
      id: faker.random.uuid(),
    }))

    const sectors = employees.map(({ sector }) => sector);
    const sectorsUnrepeated = new Set(sectors);
    const sectorsArray = [...sectorsUnrepeated];
    this.state = {
      employees: employees,
      listBackup: employees,
      employeeOTM: null,
      employeeName: '',
      sectors: sectorsArray,
      selectedSector: '',
      employeeToEdit: {}
    };
    this.handleEmployeeOTM = this.handleEmployeeOTM.bind(this);
    this.handleAddEmployeeChange = this.handleAddEmployeeChange.bind(this);
    this.handleAddEmployeeSubmit = this.handleAddEmployeeSubmit.bind(this);
    this.handleDeleteEmployee = this.handleDeleteEmployee.bind(this);
    this.handleSelectSector = this.handleSelectSector.bind(this);
    this.handleRemoveSelectedSector = this.handleRemoveSelectedSector.bind(this);
  }

  handleEmployeeOTM(employeeId) {
    this.setState({
      employeeOTM: employeeId
    });
    setTimeout(() => {
      console.log('EmployeeOTM: ', this.state.employeeOTM);
    }, 1);

  }

  handleAddEmployeeChange = event => {
    //Destructure value from input
    const { value } = event.target;
    this.setState({ employeeName: value });
  }

  handleAddEmployeeSubmit = event => {
    event.preventDefault();
    //destructure employees and employeeName from state
    const { employees, employeeName } = this.state;

    const newEmployee = {
      name: employeeName,
      sector: faker.name.jobArea(),
      avatar: faker.image.avatar(),
      id: faker.random.uuid()
    }

    //new employeelist copying the current list and the added employee
    const newList = [newEmployee, ...employees];
    //set to state
    this.setState({ employees: newList });
  }

  handleDeleteEmployee(id) {
    const { employees } = this.state;
    const newListWithoutDeleted = employees.filter(employee => employee.id !== id);
    this.setState({ employees: newListWithoutDeleted });
  }

  handleSelectSector = sector => {
    console.log('Estoy en handleSelectSector');
    const { listBackup } = this.state;
    const listFilteredBySector = listBackup.filter(employee => employee.sector === sector);

    this.setState({
      selectedSector: sector,
      employees: listFilteredBySector
    });
  }

  handleRemoveSelectedSector = () => {
    console.log('Estoy en handleRemoveSelectedSector');
    this.setState(prevState => ({ employees: prevState.listBackup, selectedSector: '' }));
  }

  componentDidMount() {
    console.log('Se ejecutó CDM');
    //FETCH DE DATA

  }

  render() {
    //MOSTRAR DATA EN HTML (SOLO JSX)
    //IT EXECUTES AT THE START AND EVERY TIME THE STATE CHANGES
    console.log('Se ejecutó el render');
    return <div className="App">
      APP REACT
      {/* <Dropdown sectors={this.state.sectors}></Dropdown> */}
      {/* <Dropdown sectors={this.state.sectors} /> */}
      <Dropdown
        sectors={sectors}
        selectedSector={selectedSector}
        onSelectSector={this.handleSelectSector}
        onRemoveSelectedSector={this.handleRemoveSelectedSector}></Dropdown>
      <Main
        employeeData={this.state.employees}
        handleAddEmployeeChange={this.handleAddEmployeeChange}
        handleAddEmployeeSubmit={this.handleAddEmployeeSubmit}
        handleDeleteEmployee={this.handleDeleteEmployee}
        handleEmployeeOTM={this.handleEmployeeOTM}
        employeeOTM={this.state.employeeOTM}
        sectors={this.state.sectors}
        selectedSector={this.state.selectedSector}
        onSelectSector={this.handleSelectSector}
        onRemoveSelectedSector={this.handleRemoveSelectedSector}
      />
    </div>
  }
}

const Dropdown = props => {
  const {
    sectors,
    selectedSector,
    onSelectSector,
    onRemoveSelectedSector
  } = props;
  return (
    <div>
      <select name='sectors'>
        {
          sectors.map((sector) =>
            <option
              key={sector}
              value={sector}
              onClick={() => onSelectSector(sector)}>
              {sector}
            </option>
          )
        }
      </select>

      {
        selectedSector && (
          <button
            className='button'
            aria-haspopup='true'
            aria-controls='dropdown-menu'
            onClick={onRemoveSelectedSector}
            style={{ marginLeft: '15px' }}
          >
            <span>{selectedSector}</span>
            <span className='icon is-small'>
              <i className='fas fa-trash-alt' aria-hidden='true' />
            </span>
          </button>
        )
      }
    </div>
  )
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

