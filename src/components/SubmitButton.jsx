// Code SubmitButton Component Here
import { useState } from 'react';

function SubmitButton (){
    // add mouse enter and leave event 
  const [password, setPassword] = useState('');
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    setMousePosition({x: e.clientX, y: e.clientY});
    console.log(`Mouse moved x=${e.clientX}, y=${e.clientY}`)
  };

    const handleEnter = () => {
        console.log(`Mouse Entering`)
        setIsHovering(true)
    };
    const handleLeave = () => {
        console.log(`Mouse Exiting`)
        setIsHovering(false)
    };
    return(
        <div>
            <button onMouseEnter={handleEnter} onMouseMove={handleMouseMove} onMouseLeave={handleLeave} >Submit Password</button>
            <p><strong>Mouse Hover Status:</strong> {isHovering ? 'Inside Input' : 'Outside Input'}</p>
            <p><strong>Last Mouse Position (X, Y):</strong> ({mousePosition.x}, {mousePosition.y})</p>
        </div>
    )
}

export default SubmitButton;