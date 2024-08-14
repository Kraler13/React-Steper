const Form = (props) => {
    const handleInputChange = (event) => {
        const value = parseInt(event.target.value, 10);
        if (!isNaN(value)) {
            props.handleStepValueChange(value);
        }
    };

    return (
        <div>
            <label>
                Enter Step Value:
                <input type="number" onChange={handleInputChange} defaultValue={1} />
            </label>
        </div>
    );
};


export default Form;
