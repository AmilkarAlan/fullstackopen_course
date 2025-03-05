import { useState } from 'react'
import Filter from './components/Filter';
import Form from './components/Form';
import Content from './components/Content';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [ filterList, setFilterList ] = useState([]);
  const [ newPerson, setNewPerson ] = useState({ name: '', number: '' });
  const [ filter, setFilter ] = useState('');

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

    setPersons(prev => [ ...prev, { ...newPerson, number: newNumber, id: persons.length + 1 } ]);
    setNewPerson({ name: '', number: '' });
  };

  const handleFilter = (e) => {
    const value = e.target.value.toLowerCase();
    setFilter(value);
    if (value !== "") {
      const filterPersons = persons.filter(person => person.name.toLowerCase().includes(value));
      setFilterList(filterPersons);
    } else {
      setFilterList([]);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={ filter } handleFilter={ handleFilter } />
      <h2>Add a new</h2>
      <Form handleChange={ handleChange } handleSubmit={ handleSubmit } newPerson={ newPerson } />
      <h2>Numbers</h2>
      <Content filterList={ filterList } persons={ persons } />
    </div>
  )
}

export default App;
