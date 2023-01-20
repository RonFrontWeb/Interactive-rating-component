const { useState } = React;

function App() {
    const [submit,setSubmit] = useState(false)
    const [id,setId] = useState("");
    return (
        <>
        {submit ? <SubmitContainer number={id}/> : <Container id={id} setId={setId} setSubmit={setSubmit}/>}
        </>
    )
}

function Container({setSubmit,id,setId}) {
    return (
        <div className="container">
            <Icon/>
            <Text/>
            <Rating  id={id} setId={setId}/>
            <Button setSubmit={setSubmit}/>
        </div>
    )
}
function SubmitContainer({number}) {
    return (
        <div className="submit__container">
            <SubmitImage/>
            <SubmitSelected number={number}/>
            <SubmitText/>
        </div>
    )
}

function Text() {
    return (
        <div className="text__container">
            <h1 className="title">How did we do?</h1>
            <p className="text"> Please let us know how we did with your support request. All feedback is appreciated 
  to help us improve our offering!</p>
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
function Icon() {
    return (
        <img className="icon" src="images/icon-star.svg" alt="star" />
    )
}
function SubmitImage() {
    return (
        <img className="submit__image" src="images/illustration-thank-you.svg" alt="star" />
    )
}
function Rating({id,setId}) {
        const handleClick = (e) => {
            setId(e.target.id)   
        }
            return (
       <div className="rating__container">
           
            <button id="1" onClick={handleClick} className={`rating__number ${id === "1" ? "rating__number--selected" : "rating__number" }`}>1</button>
            <button id="2" onClick={handleClick} className={`rating__number ${id === "2" ? "rating__number--selected" : "rating__number" }`}>2</button>
            <button id="3" onClick={handleClick} className={`rating__number ${id === "3" ? "rating__number--selected" : "rating__number" }`}>3</button>
            <button id="4" onClick={handleClick} className={`rating__number ${id === "4" ? "rating__number--selected" : "rating__number" }`}>4</button>
            <button id="5" onClick={handleClick} className={`rating__number ${id === "5" ? "rating__number--selected" : "rating__number" }`}>5</button>
            {/* <form  onSubmit={handleClick}>
                 <input type="radio" value="1"  className={`rating__number ${id === "1" ? "rating__number--selected" : "rating__number" }`}/>
            </form> */}
       </div>
    )
}
function SubmitSelected({number}) {
    return (
<div className="seleted__container">
    <p className="selected__text">you selected {number} out of 5</p>
</div>
)
}

function Button({setSubmit}) {
    const handleClick = (e) => {
        setSubmit(true)
        setTimeout(()=> setSubmit(false),2000);
        }
    return (
       <div onClick={handleClick}className="button" >
        <p className="button__link" href="">submit</p>
       </div>
        
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
