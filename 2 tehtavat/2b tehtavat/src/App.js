import React, { useState } from 'react'

const Filter = (props) => {
    if (props.person.name.toUpperCase().includes(props.newFilter.toUpperCase())) {
      return (
        <div>{props.person.name} {props.person.number} </div>
        )
      }
      else {
        return (<div></div>)
      }
    }

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('') 
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')


  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const addPerson = (event) => {
    console.log(persons)
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
  
    if (!persons.some(person => person.name === newName)) {
      setPersons(persons.concat(personObject))
    }
    else {
      console.log('Nimi', newName, 'on jo')
      window.alert(`${newName} on jo osoitekirjassasi`)
    }
  }

  return (
    <div>
      <h1>Puhelinluettelo</h1>
      <form>
        <div>rajaa tuloksia: <input value={newFilter} onChange={handleFilterChange}/></div>
      </form>
      <h2>Lisää uusi</h2>
      <form onSubmit={addPerson}>
        <div>
          nimi: <input 
            value={newName}
            onChange={handleNameChange}/>
        </div>
        <div>
          numero: <input 
            value={newNumber}
            onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
      <h2>Numerot</h2>
      {persons.map(person => 
          <Filter key={person.name} persons={persons} newFilter={newFilter} person={person}/>
      )}
    </div>
  )
}

export default App