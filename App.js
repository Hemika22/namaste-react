const heading=React.createElement("div", {id:"parent"}, React.createElement("div", {id:"child"},[React.createElement('h1',{id: "heading"},"hello React....!"),React.createElement('h2',{id: "heading"},"h2 React....!")]
));



const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); // render() will convert this heading object into an h1 tag
