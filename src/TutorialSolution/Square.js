
const Square = ({ colorValue,hexValue,isDarkText }) => {
  return (
    <div>
        <div
            className="Square"
            style={{background: colorValue, color: isDarkText ? "black" : "white"}}
        >
            <p>{colorValue ? colorValue : "Empty Value"}</p>
            <p>{hexValue ? hexValue : null}</p>
        </div>
    </div>
  )
}
Square.defaultProps = {
    colorValue: "Empty Color Value"
}

export default Square