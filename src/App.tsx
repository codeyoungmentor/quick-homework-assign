

import { useState } from 'react'
import './App.css'
import Courses from './components/Courses'

import ExerciseCards from './components/ExerciseCards'

function App() {

  const [exercises , setExercises] = useState();
  const [courses , setCourses] = useState() ; 
  const [sessions , setSessions] = useState() ; 

  const [currentCourse , setCurrentCourse] = useState() ; 
  const [currentSession , setCurrentSession] = useState() ; 

  return (
  <div className='flex'>
    <div className='w-2/12'>
      <Courses/>
    </div>
    <div className='w-3/12'>
      <ExerciseCards/>
    </div>
    <div className='w-7/12'>
      <h1>Questions</h1>
    </div>
  </div>
  )
}

export default App
