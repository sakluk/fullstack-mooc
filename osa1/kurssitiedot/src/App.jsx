const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.part1.name} exercises={props.part1.exercises} />
      <Part name={props.part2.name} exercises={props.part2.exercises} />
      <Part name={props.part3.name} exercises={props.part3.exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}

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

  return (
    <div>
       <Header name={course} />
       <Content 
         part1={part1}
         part2={part2} 
         part3={part3} />
       <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <Header name={course} />
//       <Content 
//         name1={part1} exercises1={exercises1}
//         name2={part2} exercises2={exercises2} 
//         name3={part3} exercises3={exercises3} />
//       <Content part={part3} exercises={exercises3} />
//       <Total total={exercises1 + exercises2 + exercises3} />
//     </div>
//   )
// }

export default App

// Tips:
// Download the React DevTools for a better development experience:
// https://react.dev/learn/react-developer-tools