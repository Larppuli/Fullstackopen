const Total = (props) => {

  const reducer = (previousValue, currentValue) =>  {
    console.log('Mikä meisinki', previousValue, currentValue)
    if(typeof  previousValue.exercises !== "undefined") {
      return (
        previousValue.exercises + currentValue.exercises
      )
    }
    else {
      return (
        previousValue + currentValue.exercises
      )
    }
  }

  return (
    <div>
      <b>
        total of {props.course.parts.reduce(reducer)} exercises
      </b>
    </div>
  )
}

const Part = (props) => {
  return (
    <ul>
      <h2>
        {props.name}
      </h2>
      {props.parts.map(part => 
        <li key={part.id}>
          {part.name} {part.exercises}
        </li>
      )}
      <div>
        <Total course={props.course}/>
      </div>
  </ul>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.courses.map(course => 
        <li key={course.id}>
          <Part parts={course.parts} name={course.name} exercises={course.exercises} course={course}/>
        </li>
      )}
    </div>
  )
}

const Header = () => {
    return (
        <div>
            <h1>
                Web development curriculum
            </h1>
        </div>
    )
}

const Course = (props) => {
    return (
        <div>
          <Header/>
          <Content courses={props.courses}/>
      </div>)
}

export default Course