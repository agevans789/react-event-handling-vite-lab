// Code PasswordInput Component Here

function PasswordInput (){
    // render input with password type
    // add change event to the <input>
    const handleChange = (e) => {
        console.log("Entering password...");
        setPassword(e.target.value);
    };
    return(
        <div>
            <label htmlFor="password-field">Enter Password:</label>
            <input
            id="password-field"
            type="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
            style={{marginLeft: '10px', padding: '5px'}}
            />
            <p>
                Current Input Value: <code>{password}</code>
            </p>
        </div>
    )
}

export default PasswordInput;