import React, { useState } from 'react'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const MostVoted = (props) => {
  const votelist=[props.Määrä0, props.Määrä1, props.Määrä2, props.Määrä3, props.Määrä4, props.Määrä5, props.Määrä6]
  let max=Math.max(...votelist)
  console.log(max)
  console.log(votelist)
  const index=votelist.indexOf(max)
  if (max!==0) {
    return (
      <div>
        <h1>
          Eniten ääniä
        </h1>
        {props.anecdotes[index].text}
        <div>Äänet: {max}</div>
      </div>
    )
  }
  else {
    return (
      <div></div>
    )
  }
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {

  const handleAnecdote = () => {
    setSelected(getRandomInt(7))
  }

  const handleVote = () => {
    if (selected === 0) {
      setMäärä0(Määrä0+1)
    }
    else if (selected === 1) {
      setMäärä1(Määrä1+1)
    }
    else if (selected === 2) {
      setMäärä2(Määrä2+1)
    }
    else if (selected === 3) {
      setMäärä3(Määrä3+1)
    }
    else if (selected === 4) {
      setMäärä4(Määrä4+1)
    }
    else if (selected === 5) {
      setMäärä5(Määrä5+1)
    }
    else {
      setMäärä6(Määrä6+1)
    }
  }

  const [Määrä0, setMäärä0] = useState(0)
  const [Määrä1, setMäärä1] = useState(0)
  const [Määrä2, setMäärä2] = useState(0)
  const [Määrä3, setMäärä3] = useState(0)
  const [Määrä4, setMäärä4] = useState(0)
  const [Määrä5, setMäärä5] = useState(0)
  const [Määrä6, setMäärä6] = useState(0)

  const anecdotes = [
    {text: 'If it hurts, do it more often.',
    votes: Määrä0},
    {text: 'Adding manpower to a late software project makes it later!',
    votes: Määrä1},
    {text: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    votes: Määrä2},
    {text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    votes: Määrä3},
    {text: 'Premature optimization is the root of all evil.',
    votes: Määrä4},
    {text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    votes: Määrä5},
    {text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    votes: Määrä6}
  ]
   
  const [selected, setSelected] = useState(0)
  return (
    <div>
      <div>
      <h1>
          Päivän anekdootti
        </h1>
      </div>
      <div>
        {anecdotes[selected].text}
      </div>
      <div>
      äänet: {anecdotes[selected].votes}
      </div>
      <div>
        <Button handleClick={handleAnecdote} text='next anecdote' />
        <Button handleClick={handleVote} text='vote' />
        <MostVoted anecdotes={anecdotes} Määrä0={Määrä0} Määrä1={Määrä1} Määrä2={Määrä2} Määrä3={Määrä3} Määrä4={Määrä4} Määrä5={Määrä5} Määrä6={Määrä6}></MostVoted>
      </div>
    </div>
    
  )
}

export default App