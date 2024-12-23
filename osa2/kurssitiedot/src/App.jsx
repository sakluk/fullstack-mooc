const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  console.log(props.parts[0].name)
  return (
    <div>
      {props.parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  const total = props.parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <div>
      <p><b>Total of exercises {total}</b></p>
    </div>
  )
}

const Course = ({ course }) => {
  console.log('Course', course)
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Courses = ({ courses }) => {
  // console.log('Courses', props) 
  console.log(courses)
  return (
    <div>
      {courses.map(course => <Course key={course.id} course={course} />)}
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Courses courses={courses} />
    </div>
  )
}

export default App