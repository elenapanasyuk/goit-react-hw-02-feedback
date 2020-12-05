import PropTypes from "prop-types";
import Notification from "../Notification";

function Statistics({ good, bad, neutral, total, positivePercentage }) {
  return (
    <>
      {" "}
      {total > 0 && (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positivePercentage}%</li>
        </ul>
      )}
      {total === 0 && <Notification infoMessage="No feedback given:(" />}
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
