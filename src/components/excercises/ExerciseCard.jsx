import { useState } from "react";

export default function ExerciseCard({ exercise, i }) {
  const [setsCompleted, setSetsCompleted] = useState(0);
  function handleSetIncrement() {
    setSetsCompleted((setsCompleted + 1) % 6);
  }
  return (
    <div className="flex flex-col gap-4 bg-white p-4 rounded-md sm:flex-wrap border border-gray-200">
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-4">
        <h4 className="text-3xl sm:text-4xl md:text-5xl font-semibold hidden sm:inline text-gray-300">
          0{i + 1}
        </h4>
        <h2 className="capitalize whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl flex-1 sm:text-center text-gray-900">
          {exercise?.name.replaceAll("_", " ")}
        </h2>
        <p className="text-sm text-gray-500 capitalize">{exercise?.type}</p>
      </div>
      <div className="flex flex-col">
        <h3 className="text-gray-500 text-sm">Muscle Group</h3>
        <p className="capitalize text-gray-800">{exercise?.muscles.join(" & ")}</p>
      </div>
      <div className="flex flex-col gap-2 rounded bg-white">
{exercise.description.split('___').map((val)=>{
    return(
        <div className="text-sm text-gray-700">
            {val}
        </div>
    )
})}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 sm:place-items-start gap-2">
        {["reps", "rest", "tempo"].map((info) => {
          return (
            <div
              key={info}
              className="flex flex-col p-2 rounded border border-solid border-gray-300 w-full bg-white"
            >
              <h3 className="capitalize text-gray-500 text-sm">
                {info === "reps" ? `${exercise?.unit}` : info}
              </h3>
              <p className="font-medium text-gray-900">{exercise[info]}</p>
            </div>
          );
        })}

        <button onClick={handleSetIncrement} className="flex flex-col p-2 rounded border duration-200 border-solid border-gray-300 hover:border-red-600 bg-white">
          <h3 className="text-sm capitalize text-gray-500">Sets completed</h3>
          <p className="font-medium text-gray-900">{setsCompleted} / 5</p>
        </button>
      </div>
    </div>
  );
}


