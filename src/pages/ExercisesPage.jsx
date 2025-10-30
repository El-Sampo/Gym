import { useState } from "react";
import Generator from "../components/excercises/Generator";
import { generateWorkOut } from "../utils/exercises/functions";
import WorkOut from "../components/excercises/WorkOut";

export default function ExercisesPage() {
  const [workout, setWorkout] = useState(null);
  const [poison, setPoison] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState("strength_Power");


  function updateWorkout(){
    if(muscles?.length < 1){
      return;
    }
    let newWorkout = generateWorkOut({poison,muscles,goal})
    setWorkout(newWorkout)
    window.location.hash = '#workout'
  }

  return (
    <main className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <div className="pt-24" />
      <Generator 
        poison={poison}
        setPoison={setPoison}
        muscles={muscles}
        setMuscles={setMuscles}
        goal={goal}
        setGoal={setGoal}
        updateWorkout={updateWorkout}
      />
      {workout && <WorkOut workout={workout}/>}
    </main>
  );
}


