'use strict';

var React = require("react");
var ReactDOMRe = require("reason-react/src/legacy/ReactDOMRe.bs.js");
var Boot$ReactHooksTemplate = require("./Boot.bs.js");

((require("./tailwind.css")));

ReactDOMRe.renderToElementWithId(React.createElement(Boot$ReactHooksTemplate.make, {}), "root");

/*  Not a pure module */
