import PropTypes from "prop-types";

const CircleIconSVG = props => {
  const { innerFill, outerFill, completed } = props;
  return (
    <>
      <svg
        width="22px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="icon-add-circle"
      >
        {completed && (
          <path
            fill="white"
            d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"
          />
        )}
      </svg>
    </>
  );
};

CircleIconSVG.propTypes = {
  innerFill: PropTypes.string.isRequired,
  outerFill: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};

export default CircleIconSVG;
