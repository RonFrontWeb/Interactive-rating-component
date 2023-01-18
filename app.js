const { useState } = React;

function App() {
    return (
        <>
        <Container/>
        </>
    )
}

function Container() {
    return (
        <div className="container">
            <Icon/>
            <Text/>
            <Rating/>
            <Button/>
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
function Icon() {
    return (
        <img className="icon" src="../images/icon-star.svg" alt="star" />
    )
}
function Rating() {
    const [id,setId] = useState("");
        const handleClick = (e) => {
            setId(e.target.id)   
        }
            return (
       <div className="rating__container">
            <button id="ratingButton1" onClick={handleClick} className={`rating__number ${id === "ratingButton1" ? "rating__number--selected" : "rating__number" }`}>1</button>
            <button id="ratingButton2" onClick={handleClick} className={`rating__number ${id === "ratingButton2" ? "rating__number--selected" : "rating__number" }`}>2</button>
            <button id="ratingButton3" onClick={handleClick} className={`rating__number ${id === "ratingButton3" ? "rating__number--selected" : "rating__number" }`}>3</button>
            <button id="ratingButton4" onClick={handleClick} className={`rating__number ${id === "ratingButton4" ? "rating__number--selected" : "rating__number" }`}>4</button>
            <button id="ratingButton5" onClick={handleClick} className={`rating__number ${id === "ratingButton5" ? "rating__number--selected" : "rating__number" }`}>5</button>
       </div>
    )
}

function Button() {
    const handleClick = (e) => {
        location.href ="submit.html"
        }
    return (
       <div onClick={handleClick}className="button" >
        <p className="button__link" href="">submit</p>
       </div>
        
    )
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
