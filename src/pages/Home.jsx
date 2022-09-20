import React, { useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../componenets/HeroBanner'
import SearchExercises from '../componenets/SearchExercises'
import Exercises from '../componenets/Exercises'
const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exercises}
        bodyPart={bodyPart}
        setExercises={setExercises}
      />
    </Box>
  )
}

export default Home
