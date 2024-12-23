const Header = (props) => {
  // console.log(props)
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Part = (props) => {
  // console.log(props)
  return (
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}

const Content = ({ parts }) => {
  // console.log('Content', parts)
  return (
    <div>
      {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
    </div>
  )
}

const Total = ({ parts }) => {
  // console.log('Total', parts)
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <div>
      <p><b>Total of exercises {total}</b></p>
    </div>
  )
}

const Course = ({ course }) => {
  // console.log('Course', course)
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Courses = ({ courses }) => {
  // console.log('Courses', courses)
  return (
    <div>
      {courses.map(course => <Course key={course.id} course={course} />)}
    </div>
  )
}

export default Courses
