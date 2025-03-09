import axios from 'axios';
import { useState } from 'react'
import phonebookServices from "../services/phonebookServices"
const Form = ({ setPersons, persons, setMessage,setError }) => {
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
        setMessage("New number added ✔️")
        return phonebookServices.getAll();
      })
      .then(updateList => setPersons(updateList))
      .catch(err=> setError(err.error))
  };

  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="name">name: </label><input type="text" value={ newPerson.name } name="name" onChange={ handleChange } required />
      </div>
      <div>
        <label htmlFor="number">number: </label> <input type='text' value={ newPerson.number } maxLength={ 11 } name="number" onChange={ handleChange } required />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default Form