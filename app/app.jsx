var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Load Foundation
$(document).foundation();

//Load App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}></Router>, document.getElementById('app'));
