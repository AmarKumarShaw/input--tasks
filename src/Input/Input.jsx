import React from 'react'



const Input = ({inputTitle,inputStyle,required,disable,customChangeFunction,holder,errorMessage,error,maxLength,minLength,InputType}) => {
  return (
    <div className='flex flex-col mt-10'>
    <label>{inputTitle}</label>
    <input className={`border ${inputStyle}`} type={InputType}  placeholder={holder}  minLength={minLength} maxLength={maxLength} disabled={disable} required={required}   />
    <p>{errorMessage}</p>
    </div>
  )
}
// onChange={customChangeFunction}
export default Input