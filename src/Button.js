const Button = ({ buttonText,requestedType,setRequestedType }) => {
  return (
    <button
        className={buttonText === requestedType ? "selectedBtn" : null}
        type="button"
        onClick={()=> setRequestedType(buttonText)}
    >
        {buttonText}    
    </button>
  )
}

export default Button