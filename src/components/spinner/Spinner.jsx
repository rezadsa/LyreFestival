import styled from "./spinner.module.css";
function Spinner() {
  return (
    <div className={styled.spinner}>
      <p>Please Wait...</p>
      <div className={styled.ldsRoller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Spinner;
