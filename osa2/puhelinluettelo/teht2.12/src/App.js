import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([])
  
  const [filterValue, setFilterValue] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const filterPersons = filterValue.length > 0
    ? persons.filter(person => person.name.toLowerCase().includes(filterValue.toLowerCase()) === true)
    : persons

    const hook = () => {
      console.log('effect')
      axios
        .get('http://localhost:3001/persons')
        .then(response => {
          console.log('promise fulfilled')
          setPersons(response.data)
        })
    }
    
    useEffect(hook, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      axios
    .post('http://localhost:3001/persons', personObject)
    .then(response => {
      console.log(response)
      setPersons(persons.concat(response.data))
      setNewName('')
      setNewNumber('')
    })
    }
  }

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
    setFilterValue(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filterValue={filterValue} handleFilterChange={handleFilterChange} />

      <h3>Add a new</h3>

      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange}
      newNumber={newNumber} handleNumberChange={handleNumberChange}/>

      <h3>Numbers</h3>
      
      <Persons filterPersons = {filterPersons}/>
    </div>
  )
}

export default App