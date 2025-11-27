import { useEffect, useRef, useState } from "react";
import { GiWeightLiftingUp } from "react-icons/gi";
import { IoTimeOutline } from "react-icons/io5";
import { TbMetronome } from "react-icons/tb";

function AnimatedNumber({ value, className }) {
  const [display, setDisplay] = useState(value);
  const [bump, setBump] = useState(false);
  const prev = useRef(value);

  useEffect(() => {
    if (prev.current !== value) {
      setDisplay(value);
      setBump(true);
      const t = setTimeout(() => setBump(false), 180);
      prev.current = value;
      return () => clearTimeout(t);
    }
  }, [value]);

  return (
    <span className={`${className} transition-transform duration-200 ${bump ? "scale-110" : "scale-100"}`}>{display}</span>
  );
}

export default function ExerciseCard({ exercise, i }) {
  const [setsCompleted, setSetsCompleted] = useState(0);
  function handleSetIncrement() {
    setSetsCompleted((setsCompleted + 1) % 6);
  }
  return (
    <div className="flex flex-col gap-4 bg-white/95 p-5 sm:p-6 rounded-xl sm:flex-wrap border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-4">
        <h4 className="text-3xl sm:text-4xl md:text-5xl font-semibold hidden sm:inline text-gray-200">
          0{i + 1}
        </h4>
        <h2 className="capitalize whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl flex-1 sm:text-center text-gray-900">
          {exercise?.name.replaceAll("_", " ")}
        </h2>
        <span className={`text-xs px-2 py-1 rounded-full border ${exercise?.type === 'compound' ? 'bg-red-50 text-red-700 border-red-200' : 'bg-sky-50 text-sky-700 border-sky-200'} capitalize`}>
          {exercise?.type}
        </span>
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
      <div className="grid grid-cols-2 sm:grid-cols-4 sm:place-items-start gap-3">
        {["reps", "rest", "tempo"].map((info) => {
          return (
            <div
              key={info}
              className={`flex flex-col p-4 rounded-xl border w-full bg-white shadow-sm ${
                info === 'reps' ? 'border-emerald-200' : info === 'rest' ? 'border-amber-200' : 'border-indigo-200'
              }`}
            >
              <div className="flex items-center gap-2 text-gray-500">
                {info === 'reps' && <GiWeightLiftingUp className="text-emerald-600" />}
                {info === 'rest' && <IoTimeOutline className="text-amber-600" />}
                {info === 'tempo' && <TbMetronome className="text-indigo-600" />}
                <h3 className="capitalize text-xs">
                  {info === "reps" ? `${exercise?.unit}` : info}
                </h3>
              </div>
              <AnimatedNumber
                value={exercise[info]}
                className={`${
                  info === 'reps' ? 'text-emerald-700' : info === 'rest' ? 'text-amber-700' : 'text-indigo-700'
                } mt-0.5 text-2xl font-bold tracking-tight`}
              />
            </div>
          );
        })}

        <button onClick={handleSetIncrement} className="flex flex-col p-4 rounded-xl border duration-200 border-gray-200 hover:border-red-600 bg-white shadow-sm">
          <h3 className="text-sm capitalize text-gray-500">Sets completed</h3>
          <AnimatedNumber value={`${setsCompleted} / 5`} className="text-xl font-bold text-gray-900" />
        </button>
      </div>
    </div>
  );
}


