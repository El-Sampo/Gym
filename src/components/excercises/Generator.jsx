import { IoCaretDown } from "react-icons/io5";
import { SCHEMES, WORKOUTS } from "../../utils/exercises/swoldier";
import SectionWrapper from "./SectionWrapper";
import Button from "./Shared/Button";
import Title from "./Shared/Title";
import { useState } from "react";

export default function Generator({
  poison,
  setPoison,
  muscles,
  setMuscles,
  goal,
  setGoal,
  updateWorkout
}) {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }
  function updateMuscles(muscleGroup) {
    if (muscles?.includes(muscleGroup)) {
      setMuscles(muscles?.filter((val) => val !== muscleGroup));
      return;
    }
    if (muscles?.length > 2) {
      return;
    }
    if (poison !== "individual") {
      setMuscles([muscleGroup]);
      setShowModal(false);
      return;
    }

    setMuscles([...muscles, muscleGroup]);
    if (muscles?.length === 2) {
      setShowModal(false);
    }
  }
  return (
    <SectionWrapper
    id={'generate'}
      header={"Generate your workout"}
      title={["It's", "time", "to train"]}
    >
      <Title
        index={"01"}
        title={"Pick your Program"}
        description={"Select the workout you wish to follow."}
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              onClick={() => {
                setMuscles([]);
                setPoison(type);
              }}
              key={typeIndex}
              className={`py-3 px-4 rounded-lg font-semibold duration-200 border ${
                type === poison
                  ? "border-red-600 bg-white text-gray-900 shadow-sm ring-1 ring-red-600/10"
                  : "border-gray-200 bg-white/80 text-gray-700 hover:border-red-600 hover:shadow"
              }`}
            >
              <p className="capitalize">{type?.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>

      <Title
        index={"02"}
        title={"Choose target muscles"}
        description={"Select the muscles you want to focus on."}
      />
      <div className="flex flex-col border rounded-lg border-gray-200 font-semibold duration-200 bg-white/90 backdrop-blur">
        <button
          onClick={toggleModal}
          className={`relative flex justify-center items-center p-3 ${
            showModal && "border-b-2 border-gray-200"
          } text-gray-800`}
        >
          <p className="capitalize">
            {muscles?.length === 0
              ? "Select muscle groups"
              : muscles?.join(",")}
          </p>
          <IoCaretDown className="absolute right-3 top-1/2 -translate-y-1/2" />
        </button>
        {showModal && (
          <div className="flex flex-col px-3 pb-3 text-gray-800 animate-in fade-in">
            {(poison === "individual"
              ? WORKOUTS[poison]
              : Object.keys(WORKOUTS[poison])
            ).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button
                  onClick={() => {
                    updateMuscles(muscleGroup);
                  }}
                  key={muscleGroupIndex}
                  className={`py-3 duration-200 capitalize text-left rounded-md px-2 ${
                    muscles?.includes(muscleGroup)
                      ? "text-red-600 bg-red-50"
                      : "hover:text-red-600 hover:bg-gray-50"
                  }`}
                >
                  <p className="uppercase">{muscleGroup}</p>
                </button>
              );
            })}
          </div>
        )}
      </div>

      <Title
        index={"03"}
        title={"Select your goal"}
        description={"Choose the objective that matches your plan."}
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        {Object.keys(SCHEMES).map((scheme, schemesIndex) => {
          return (
            <button
              onClick={() => setGoal(scheme)}
              key={schemesIndex}
              className={`py-3 px-4 rounded-lg font-semibold duration-200 border ${
                scheme === goal
                  ? "border-red-600 bg-white text-gray-900 shadow-sm ring-1 ring-red-600/10"
                  : "border-gray-200 bg-white/80 text-gray-700 hover:border-red-600 hover:shadow"
              }`}
            >
              <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <div className="mt-6">
        <Button fun={updateWorkout} text={"Generate Plan"} />
      </div>
    </SectionWrapper>
  );
}


