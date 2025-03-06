import axios from 'axios';
import { useState } from 'react'
import phonebookServices from "../services/phonebookServices"
const Form = ({ setPersons, persons }) => {
  const [ newPerson, setNewPerson ] = useState({ name: '', number: '' });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewPerson(prev => ({ ...prev, [ name ]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formatNumber = (num) => {
      const countryCode = num.slice(0, 2);
      const cityCode = num.slice(2, 4);
      const restCode = num.slice(4);

      return `${countryCode}-${cityCode}-${restCode}`
    };
    const newNumber = formatNumber(newPerson.number);
    const newPersonToAdd = {
      name: newPerson.name,
      number: newNumber,
      id: (persons.length + 1).toString()
    }
    phonebookServices
      .create(newPersonToAdd)
      .then(response => {
        setNewPerson({ name: '', number: '' });
        return phonebookServices.getAll();
      })
      .then(updateList => setPersons(updateList))
    // setPersons(prev => [ ...prev, { ...newPerson, number: newNumber, id: persons.length + 1 } ]);
  };

  return (
    <form onSubmit={ handleSubmit }>
      <div>
        name: <input type="text" value={ newPerson.name } name="name" onChange={ handleChange } required />
      </div>
      <div>
        number: <input type='text' value={ newPerson.number } maxLength={ 11 } name="number" onChange={ handleChange } required />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default Form