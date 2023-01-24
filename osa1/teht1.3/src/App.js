const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const Header = (props) => {
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    )
  }

  const Part = (props) => {
    return (
      <div>
        <p>{props.part1} {props.exercises1}</p>
        <p>{props.part2} {props.exercises2}</p>
        <p>{props.part3} {props.exercises3}</p>
      </div>
    )
  }

  const Content = (props) => {
    return (
      <div>
        <Part part1={part1} exercises1={exercises1} />
        <Part part2={part2} exercises2={exercises2} />
        <Part part3={part3} exercises3={exercises3} />
      </div>
    )
  }

  const Total = (props) => {
    return (
      <div>
        <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
      </div>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content />

      <Total exercises1={exercises1} exercises2={exercises2}
        exercises3={exercises3} />
    </div>
  )
}

export default App