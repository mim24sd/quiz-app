import ProgressBar from "react-bootstrap/ProgressBar";

const ProgressDetail = () => {
  return (
    <div>
      <span>10 question</span>
      <ProgressBar now={60} />
    </div>
  );
};

export default ProgressDetail;
