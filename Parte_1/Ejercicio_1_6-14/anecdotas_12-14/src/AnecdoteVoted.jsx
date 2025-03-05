

const AnecdoteVoted = ({votes, anecdotes}) => {
    const mostVotes = Math.max(...votes);
    const mostVotedIndex = votes.indexOf(mostVotes);
    const mostVotedAnecdote = anecdotes[ mostVotedIndex ];
  return (
    <div>
    <h1>Anecdote with most votes</h1>
    <p>{ mostVotedAnecdote }</p>
    <p>Has { mostVotes } votes</p>
  </div>
  )
}

export default AnecdoteVoted