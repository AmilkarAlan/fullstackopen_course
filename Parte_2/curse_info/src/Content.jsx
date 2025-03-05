
import Part from './Part'

const Content = ({ parts }) => {
    const total = parts.reduce((acc, cur) => acc + cur.exercises, 0)
    return (

        <table>
            <tbody>
                { parts.map(part => <Part key={part.id} name={ part.name } exercises={ part.exercises } />) }
            </tbody>
            <h3>Total of { total } exercises</h3>
        </table>

    )
}

export default Content