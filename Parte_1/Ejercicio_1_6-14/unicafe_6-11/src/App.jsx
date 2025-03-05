import { useState } from 'react'
import Header from './Header'
import ButtonsVotes from './ButtonsVotes'
import Statistics from './Statistics'

const App = () => {

  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)

  return (
    <div>
      <Header />
      <ButtonsVotes good={ good } neutral={ neutral } bad={ bad } setGood={ setGood } setNeutral={ setNeutral } setBad={ setBad } />
      <Statistics good={ good } neutral={ neutral } bad={ bad } />
    </div>
  )
}

export default App