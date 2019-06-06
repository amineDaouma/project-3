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
          <style jsx>{``}</style>
        </>
      )}
    </Mutation>
  );
};

export default DeleteRoutine;
