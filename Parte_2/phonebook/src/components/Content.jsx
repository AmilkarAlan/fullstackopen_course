import React from 'react'

const Content = ({filterList, persons}) => {
    return (
        <table>
            <tbody>
                { (filterList.length === 0 ? persons : filterList).map(person => (
                    <tr key={ person.id }>
                        <td>{ person.name }</td>
                        <td>{ person.number }</td>
                    </tr>
                )) }
            </tbody>
        </table>
    )
}

export default Content