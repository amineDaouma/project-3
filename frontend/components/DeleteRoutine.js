import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import { LOGGEDINUSER_QUERY } from "./LoggedInUser";
import { buttonSpinnerStyle } from "../style/reactSpinner";
import { ScaleLoader } from "react-spinners";

const DELETE_ROUTINE_MUTATION = gql`
  mutation DELETE_ROUTINE_MUTATION($routineId: String!) {
    deleteRoutine(routineId: $routineId) {
      id
    }
  }
`;
const DeleteRoutine = props => {
  const { routineId } = props;
  return (
    <Mutation
      mutation={DELETE_ROUTINE_MUTATION}
      variables={{
        routineId
      }}
      refetchQueries={() => [{ query: LOGGEDINUSER_QUERY }]}
    >
      {(deleteRoutine, { data, error, loading }) => {
        if (error) console.log(error);
        return (
          <>
            <button onClick={deleteRoutine}>
              {loading ? (
                <ScaleLoader
                  css={buttonSpinnerStyle}
                  heightUnit={"px"}
                  height={16}
                  widthUnit={"px"}
                  width={4}
                  radius={4}
                  color={"#9AA5B1"}
                  loading={true}
                  margin={"2px"}
                />
              ) : (
                "Delete"
              )}
            </button>
            <style jsx>
              {`
                button {
                  border-radius: 4px;
                  padding: 4px 8px;
                  display: block;
                  margin-left: 8px;
                  font-size: 16px;
                  border: none;
                  color: #9aa5b1;
                  background: #f5f7fa;
                  cursor: pointer;
                  width: 64px;
                  height: 32px;
                }
                button:hover {
                  color: #e12d39;
                  background: #cbd2d9;
                }
              `}
            </style>
          </>
        );
      }}
    </Mutation>
  );
};

export default DeleteRoutine;
