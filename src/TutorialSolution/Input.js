import colorNames from "colornames";

const Input = ({ colorValue,setColorValue,setHexValue,isDarkText,setIsDarkText }) => {
  return (
    <form className="formTwo" onSubmit={(e) => e.preventDefault()}>
        <input
            autoFocus   
            type="text"
            id="colorIput"
            placeholder="Add color name"
            required
            value={colorValue}
            onChange={(e) => {
                setColorValue(e.target.value)
                setHexValue(colorNames(e.target.value))
            }} 
        />
        <button type="button" onClick={()=> setIsDarkText(!isDarkText)}>Change Text Color</button>
    </form>
  )
}

export default Input