// Code SubmitButton Component Here

function SubmitButton (){
    // add mouse enter and leave event 
    const handleEnter = () => {
        console.log("Mouse entering...")
    };
    const handleLeave = () => {
        console.log("Mouse exiting...")
    };
    return(
        <>
            <button onMouseEnter="" onMouseLeave="">Submit Password</button>
        </>
    )
}

export default SubmitButton;