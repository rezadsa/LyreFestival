import styled from "./textInput.module.css";
function TextInput(props) {
  return (
    <div className={styled.inputWrapper}>
      <input type="text" 
      placeholder={props.placeholder}
      name={props.name} id="" onChange={props.handelChange} />
    </div>
  );
}

export default TextInput;
