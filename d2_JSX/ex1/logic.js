
function render(data) {

    ReactDOM.render(
        <div>
            <a className="border" href={data.linkAddress}>go to {data.linkText}</a>
            <br/>
            <input type="range" min={data.min - 1} max={data.max * 2} step="2"></input>
            <br/>
            <button id="click" style={{ color: data.color, "font-weight": data.fontWeight }}>{data.buttonText}</button>
        </div>,
        document.getElementById("root")
    );
}
var data = {
    linkAddress: "https://www.google.com/",
    linkText: "google",
    min: -5,
    max: 5,
    color: "maroon",
    fontWeight: "bold",
    buttonText: "click me"
};

render(data);

