import { useEffect, useState } from "react";
import Phonebook from "./Phonebook";
import phonebookServices from "./services/phonebookServices";

const App = () => {

  const [ persons, setPersons ] = useState([]);
  const [ filterList, setFilterList ] = useState([]);
  const [ message, setMessage ] = useState("");
  const [ error, setError ] = useState("");

  useEffect(() => {
    phonebookServices
      .getAll()
      .then(response => setPersons(response))
  }, []);
  return <Phonebook
    persons={ persons }
    setFilterList={ setFilterList }
    filterList={ filterList }
    setPersons={ setPersons }
    message={ message }
    setMessage={ setMessage } 
    error={error}
    setError={setError}/>
}

export default App;
