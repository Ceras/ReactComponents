var React = require("react"),
    ReactDom = require("react-dom"),
    Component = require("./componentSource/component.jsx"),
    componentDefaults = require("./componentDefaults.json");


ReactDom.render(<Component {...componentDefaults} />, document.getElementById('component'));

