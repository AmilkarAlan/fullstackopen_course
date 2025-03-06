
import Filter from './components/Filter';
import Form from './components/Form';
import Content from './components/Content';

const Phonebook = ({ persons, setFilterList, filterList, setPersons }) => {
    return (
        <div>
            <h2>Phonebook</h2>
            <Filter
                persons={ persons }
                setFilterList={ setFilterList } />

            <h2>Add a new</h2>
            <Form
                persons={ persons }
                setPersons={ setPersons } />

            <h2>Numbers</h2>
            <Content
                filterList={ filterList }
                persons={ persons }
                setPersons={ setPersons } />
        </div>
    )
}

export default Phonebook