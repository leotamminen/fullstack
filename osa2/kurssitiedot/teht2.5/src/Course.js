const Course = ({ course }) => {
    return (
      <div>
        <Header course={course} />
        <Content course={course} />
        <Total parts={course.parts} />
      </div>
    )
  }
  
  const Header = ({ course }) => {
    return (
      <div>
        <h2>{course.name}</h2>
      </div>
    )
  }
  
  const Content = ({ course }) => {
    return (
      <div>
        {course.parts.map(part =>
          <Part key={part.id} part={part} />
        )}
      </div>
    )
  }
  
  const Part = ({ part }) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>
    )
  }
  
  const Total = ({ parts }) => {
    // const total that calculates the total exercises
    const total = parts.reduce(
      (prevValue, currentValue) => prevValue + currentValue.exercises, 0
    )
    return <p>
      <b>Total of {total} exercises</b>
    </p>
  }

  // exportataan Course.
  export default Course