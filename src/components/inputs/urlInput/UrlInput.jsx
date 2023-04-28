import styled from "./urlInput.module.css";

function UrlInput(props) {
  return (
    <div className={styled.inputWrapper}>
      <input type="url" 
      name={props.name} 
      placeholder={props.placeholder}
      onChange={props.handelChange} />
    </div>
  );
}

export default UrlInput;
