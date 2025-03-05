

const AnecdoteDay = ({anecdotes, selected, votes, handleSelect, handleVotes}) => {
  return (
    <div>
    <h1>Anecdote of the day</h1>
    <p>{anecdotes[selected]}</p>
    <p>Has {votes[selected]} votes</p>
    <button onClick={handleVotes}>Vote</button>
    <button onClick={handleSelect}>Next anecdote</button>
  </div>
  )
}

export default AnecdoteDay