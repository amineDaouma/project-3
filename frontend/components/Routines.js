import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import CreateRoutine from "./CreateRoutine";
import UpdateRoutine from "./UpdateRoutine";
import DeleteRoutine from "./DeleteRoutine";
import SingleRoutine from "./SingleRoutine";

const ROUTINES_QUERY = gql`
  query ROUTINES_QUERY {
    routines {
      id
      name
    }
  }
`;

const Routines = props => {
  // console.log("Debug Routines");
  // console.log(props.data);
  const { routines } = props.data.loggedInUser;
  console.log("Dbg -> routines for user");
  console.log(routines);
  return (
    <div className="routine">
      <CreateRoutine />
      <UpdateRoutine />
      <DeleteRoutine />
      {routines.map(routineData => (
        <SingleRoutine key={routineData.id} routineData={routineData} />
      ))}
      <style jsx>
        {`
          .routine {
            padding: 8px 0px;
            /*display: flex;
          flex-direction: row;
          justify-content: flex-end;*/
            background: white;
            margin: 8px 0px;
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
