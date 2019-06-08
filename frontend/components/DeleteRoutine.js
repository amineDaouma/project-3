import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

const CREATE_ROUTINE_MUTATION = gql`
  mutation CREATE_ROUTINE_MUTATION($name: String!) {
    createRoutine(name: $name) {
      id
      name
      ownedBy {
        id
        username
      }
    }
  }
`;
const DeleteRoutine = () => {
  return (
    <Mutation
      mutation={CREATE_ROUTINE_MUTATION}
      variables={{
        name: "toto"
      }}
    >
      {(createRoutine, payload) => (
        <>
          <button onClick={createRoutine}>Delete</button>
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
              }
              button:hover {
                color: #e12d39;
                background: #cbd2d9;
              }
            `}
          </style>
        </>
      )}
    </Mutation>
  );
};

export default DeleteRoutine;
