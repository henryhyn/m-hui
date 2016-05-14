const Hex = {};

Hex.handleChange = function (name, event) {
    const e = event.target;
    const newState = {};
    newState[name] = e.type === 'checkbox' ? e.checked : e.value;
    this.setState(newState);
};

export default Hex;
