const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  const Header = ({course}) => {
    return (
      <div>
        <h1>{course.name}</h1>
      </div>
    )
  }

  const Content = ({parts}) => {
    return (
      <div>
        <p>{parts[0].name} {parts[0].exercises}</p>
        <p>{parts[1].name} {parts[1].exercises}</p>
        <p>{parts[2].name} {parts[2].exercises}</p>
      </div>
    )
  }

  const Total = ({parts}) => {
    return (
      <div>
        <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
      </div>
    )
  }

  return (
    <div>
      <Header course = {course} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  )
}

export default App