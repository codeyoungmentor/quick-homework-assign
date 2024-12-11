
import exerciseData from "../data/machineLearning.json";

const data = exerciseData;

const ExerciseCards = () => {
  const sortedData = data.data.sort((a, b) => {
    const numA = parseInt(a.name.match(/\d+/)?.[0] || "0", 10);
    const numB = parseInt(b.name.match(/\d+/)?.[0] || "0", 10);
    return numA - numB;
  });

  return (
    <div className="exercise-card-container flex flex-row">
      {sortedData.map((session) => (
        <div
          key={session.id}
          className="exercise-card p-2 border-2 border-black rounded-md w-1/12 flex-wrap"
        >
    
          <h3>{session.name}</h3>
          <p>{session.description}</p>
          <p>
            <strong>Exercises:</strong> {session.exercises.completed}/
            {session.exercises.total}
          </p>
         
          <a
            target="_blank"
            href={`https://sandbox.codeyoung.com/#/exercises/${session.id}`}
          >
            Open
          </a>
        </div>
      ))}
    </div>
  );
};

export default ExerciseCards;