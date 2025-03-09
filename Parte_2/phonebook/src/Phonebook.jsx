
import Filter from './components/Filter';
import Form from './components/Form';
import Content from './components/Content';
import style from "./Phonebook.module.css"
import Message from './components/Message';

const Phonebook = ({ persons, setFilterList, filterList, setPersons, message, setMessage, error, setError }) => {
    return (
        <div className={ style.layout }>
            <div className={ style.header }>
                <h2>Phonebook</h2>
            </div>
            <div className={ style.filterContainer }>
                <h2>Search</h2>
                <Filter
                    persons={ persons }
                    setFilterList={ setFilterList } />
            </div>
            <div className={ style.formContainer }>
                <h2>Add a new</h2>
                <Form
                    persons={ persons }
                    setPersons={ setPersons }
                    setMessage={ setMessage }
                    setError={ setError } />
            </div>
            <div className={ style.contentContainer }>
                <h2>Numbers</h2>
                <Content
                    filterList={ filterList }
                    persons={ persons }
                    setPersons={ setPersons }
                    setMessage={ setMessage } />
            </div>
            <div className={ style.messageContainer }>
                <Message message={ message } setMessage={ setMessage } error={ error } setError={ setError } />
            </div>
        </div>
    )
}

export default Phonebook