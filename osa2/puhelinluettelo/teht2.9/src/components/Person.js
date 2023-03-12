const Person = ({ person }) => {
  return (
    <p>{person.name} {person.number}</p>
  )
}

const Persons = (props) => {
  return (
    <div>
      {props.filterPersons.map(person =>
        <Person key={person.name} name={person.name} number={person.number} />
      )}
    </div>
  )
}

export default Person