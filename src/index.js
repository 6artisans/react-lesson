require('./index.css')

var React = require('react')
var ReactDOM = require('react-dom')
var App = require('./containers/app')

ReactDOM.render(<App />, document.getElementById("todos-app-root"))
