import React,{useEffect,useState} from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"

import Detail from "../component/Detail"
import ExerciseVideos from "../component/ExerciseVideos"
import SimilarExercises from "../component/SimilarExercises"

import {fetchData, exerciseOptions , youtubeOptions} from '../utils/fetchData'

const ExerciseDetails = () => {
const [exerciseDetail, setExerciseDetail] = useState({})

const [exerciseVideos , setExerciseVideos] = useState([])

const [targetMuscleExercises , settargetMuscleExercises]= useState([])
const [equipmentExercises , setEquipmentExercises]= useState([])
const { id }=useParams();

useEffect(()=>{

  const fetchExercisesData = async() => {
    const exerciseDbUrl='https://exercisedb.p.rapidapi.com'
    const YoutubeSearchUrl='https://youtube-search-and-download.p.rapidapi.com'

    const exerciseDetailData = await fetchData(`
    ${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions)
    setExerciseDetail(exerciseDetailData);

    const exerciseVideoData= await fetchData(`
    ${YoutubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions)
    setExerciseVideos(exerciseVideoData.contents)

    const targetMuscleExercisesData = await fetchData(`
    ${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,exerciseOptions)
    settargetMuscleExercises(targetMuscleExercisesData)

    const equipmentExercisesData = await fetchData(`
    ${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions)
    setEquipmentExercises(equipmentExercisesData)

  }
  fetchExercisesData();
},[id]);

  return (
    <Box>
      <Detail exerciseDetail = {exerciseDetail}/>
      <ExerciseVideos exerciseVideo={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
    
  )
}
export default ExerciseDetails