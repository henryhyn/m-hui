const Hex = {};

Hex.handleChange = function (event) {
    const e = event.target;
    const newState = {};
    newState[e.name] = e.type === 'checkbox' ? e.checked : e.value;
    this.setState(newState);
};

export default Hex;
