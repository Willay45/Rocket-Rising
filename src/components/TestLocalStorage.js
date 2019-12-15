import React from 'react';
const TestLocalStorage = () => {
    const [value, setValue] = React.useState(
        localStorage.getItem('myValueInLocalStorage') || ''
    );
    React.useEffect(() => {
        localStorage.setItem('myValueInLocalStorage', value);
    }, [value]);
    const onChange = event => setValue(event.target.value);
    return (
        <div>
            <h1>Hello React with Local Storage!</h1>
            <input value={value} type="text" onChange={onChange} />
            <p>{value}</p>
        </div>
    );
};
export default TestLocalStorage;