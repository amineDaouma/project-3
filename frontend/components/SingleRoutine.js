const SingleRoutine = props => {
  const { id, name } = props.routineData;
  return (
    <p>
      {id} - {name}
    </p>
  );
};

export default SingleRoutine;
