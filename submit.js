// setTimeout(sendback,2000);

function sendback() {
        location.href= "index.html";
}

function App() {
    return (
        <>
        <SubmitContainer/>
        </>
    )
}

function SubmitContainer() {
    return (
        <div className="submit__container">
            <Image/>
            <Selected number="4"/>
            <Text/>
        </div>
    )
}

function SubmitText() {
    return (
        <div className="submit__text__container">
            <h1 className="submit__title">Thank you!</h1>
            <p className="submit__text"> We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!</p>
        </div>
    )
}
function SubmitImage() {
    return (
        <img className="submit__image" src="images/illustration-thank-you.svg" alt="star" />
    )
}
function SubmitSelected({number}) {
            return (
       <div className="seleted__container">
            <p className="selected__text">you selected {number} out of 5</p>
       </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
