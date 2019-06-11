import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import CreateRoutine from "./CreateRoutine";
import UpdateRoutine from "./UpdateRoutine";
import DeleteRoutine from "./DeleteRoutine";
import SingleRoutine from "./SingleRoutine";

const Routines = props => {
  const { routines } = props.data.loggedInUser;

  return (
    <div className="routine">
      <CreateRoutine />
      {routines.map(routineData => (
        <SingleRoutine key={routineData.id} routineData={routineData} />
      ))}
      <style jsx>
        {`
          .today-label {
            font-size: 16px;
            padding-left: 128px;
          }
          .routine {
            margin: 8px 0px;
            padding: 8px 0px;
            background: white;
            border: 1px solid white;
            border-radius: 5px;
            box-shadow: 0px 3px 5px rgba(154, 165, 177, 0.8);
          }
        `}
      </style>
    </div>
  );
};

export default Routines;
