let sally = "Sally Smith";
let mark = "Mark Martin";
let holly = "Holly Unlikely";
let arvind = "Arvind Kejriwal";
let lalit = "Lalit Modi";
let amit = "Amit Shah";
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    color: "blue",
    fontSize: "24px"
  }
}, /*#__PURE__*/React.createElement("li", null, sally), /*#__PURE__*/React.createElement("li", null, mark), /*#__PURE__*/React.createElement("li", null, holly), /*#__PURE__*/React.createElement("li", null, arvind.toUpperCase()), /*#__PURE__*/React.createElement("li", null, lalit), /*#__PURE__*/React.createElement("li", null, amit));
ReactDOM.render(element, document.getElementById("content"));