import CreateRoutine from "./CreateRoutine";
import SingleRoutine from "./SingleRoutine";

const Routines = props => {
  const { routines, isTrusted } = props.data.loggedInUser;

  return (
    <div className="routine">
      {isTrusted && <CreateRoutine />}
      {routines.map(routineData => (
        <SingleRoutine
          key={routineData.id}
          routineData={routineData}
          isTrusted={isTrusted}
        />
      ))}
      <style jsx>
        {`
          .today-label {
            font-size: 16px;
            padding-left: 128px;
          }
          .routine {
            margin: 8px auto;
            padding: 8px 0px;
            background: white;
            border: 1px solid white;
            border-radius: 5px;
            box-shadow: 0px 3px 5px rgba(154, 165, 177, 0.8);
          }
          @media (max-width: 400px) {
            .routine {
              margin: 8px 8px;
            }
          }
          @media (max-width: 800px) {
            .routine {
              margin: 8px 8px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Routines;
