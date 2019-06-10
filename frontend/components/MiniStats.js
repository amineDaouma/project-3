import PropTypes from "prop-types";
import { findTodayWithinArray } from "../lib/utils";

const MiniStats = props => {
  const { routines } = props.data.loggedInUser;
  const routinesCompletedCount = routines.filter(({ days }) => {
    const todayElement = findTodayWithinArray(days);
    return todayElement.isCompleted;
  }).length;
  return (
    <div className="mini-stats">
      <p>{`${routinesCompletedCount}/${routines.length}`}</p>
      <style jsx>
        {`
          .mini-stats {
            position: fixed;
            top: 8px;
            right: 8px;
            /*padding: 8px 8px;
            width: 192px;
            height: 192px;*/
            background: #e1fcf8;
            border: 1px solid #e1fcf8;
            border-radius: 5px;
            box-shadow: 0px 3px 5px rgba(154, 165, 177, 0.8);
          }
          .mini-stats p {
            padding: 0px;
            margin: 0px;
            font-weight: 700;
          }
        `}
      </style>
    </div>
  );
};

MiniStats.propTypes = {
  data: PropTypes.object
};

export default MiniStats;
