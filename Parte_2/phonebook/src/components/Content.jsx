import phonebookServices from "../services/phonebookServices";


const Content = ({ filterList, persons, setPersons, setMessage, setError}) => {
    const list = filterList.length === 0 ? persons : filterList;
    const handleDelete = (id) => {
        const confirm = window.confirm(`Are you sure you want to delete the person with id ${id}?`)
        if (!confirm) return
        phonebookServices
            .deleteById(id)
            .then(response => phonebookServices.getAll()
                .then(updateList => {
                    setPersons(updateList)
                    return setMessage("Number has been deleted")
                }))
                .catch(err=> setError(err.error))
    }
    return (
        <table>
            <tbody>
                { Array.isArray(list) && list.map(person => (
                    <tr key={ person.id }>
                        <td>{ person.name }</td>
                        <td>{ person.number }</td>
                        <td><button onClick={ () => handleDelete(person.id) }>Delete</button></td>
                    </tr>
                )) }
            </tbody>
        </table>
    )
}


export default Content