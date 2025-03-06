import { useEffect, useState } from "react";
import Phonebook from "./Phonebook";
import phonebookServices from "./services/phonebookServices";

const App = () => {

  const [ persons, setPersons ] = useState([]);
  const [ filterList, setFilterList ] = useState([]);
  useEffect(() => {
    phonebookServices
      .getAll()
      .then(response => setPersons(response))
  }, []);
  return <Phonebook
    persons={ persons }
    setFilterList={ setFilterList }
    filterList={ filterList }
    setPersons={ setPersons } />
}

export default App;
