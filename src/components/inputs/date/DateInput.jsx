import styled from './dateInput.module.css'

function DateInput(props){

    return(
        <div className={styled.inputWrapper}>
        <label htmlFor="">{props.caption} </label>
        <input type="date" name={props.name} id="" onChange={props.handelChange} />
        </div>
    )
}

export default DateInput;