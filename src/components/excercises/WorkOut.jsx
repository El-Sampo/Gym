import ExerciseCard from "./ExerciseCard";
import SectionWrapper from "./SectionWrapper";

export default function WorkOut({ workout }) {
  return (
    <SectionWrapper id={'workout'} header={"Your"} title={["Training", "Plan", "Ready"]}>
      <div className="flex flex-col gap-4 sm:gap-6">
        {workout?.map((exercise, i) => {
          return (
            <ExerciseCard i={i} exercise={exercise} key={i}/>
          );
        })}
      </div>
    </SectionWrapper>
  );
}


