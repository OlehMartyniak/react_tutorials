import { useState } from "react"

const Content = () => {
    const [myColor,setMyColor] = useState('');

  return (
    <form className="content">
        <h1>My Solution</h1>
        <div
            className="colorContainer"
            style={{background: myColor}}
        >{myColor ? myColor : "Empty Value"}
        </div>
        <input
            type="text"
            id="addColor"
            placeholder="Add color name"
            value={myColor}
            onChange={(e) => setMyColor(e.target.value)}
        />
    </form>
  )
}

export default Content