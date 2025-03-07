import { useState } from 'react'

const Filter = ({persons,setFilterList}) => {
  const [ filter, setFilter ] = useState('');
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

    <form>
      <div>
        filter shown with <input type='text' name='filter' value={ filter } onChange={ handleFilter } placeholder='Person name'/>
      </div>
    </form>

  )
}

export default Filter