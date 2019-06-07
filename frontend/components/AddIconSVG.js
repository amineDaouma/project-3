import PropTypes from "prop-types";

const AddIconSVG = props => {
  const { fill } = props;
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="icon-add"
      >
        <path
          fill={fill}
          className="secondary"
          fillRule="evenodd"
          d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"
        />
      </svg>
      <style jsx>{`
        svg:hover {
          color: red;
        }
      `}</style>
    </>
  );
};

AddIconSVG.propTypes = {
  fill: PropTypes.string.isRequired
};

export default AddIconSVG;
