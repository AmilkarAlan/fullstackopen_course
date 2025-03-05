import React from 'react'

const ButtonsVotes = ({ good, neutral, bad, setGood, setNeutral, setBad }) => {
    return (
        <div>
            <button onClick={ () => setGood(good + 1) }>Good</button>
            <button onClick={ () => setNeutral(neutral + 1) }>Neutral</button>
            <button onClick={ () => setBad(bad + 1) }>Bad</button>
        </div>
    )
}

export default ButtonsVotes