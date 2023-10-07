import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/feedbacks")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <div className="Navbar">Feedback TA</div>;
      <div className="section-feedback-form container">
        <div className="form-container">
          <h1 className="title">Thầy Phú dạy có hay không????</h1>
          <div className="point-container">
            <div className={`point`}>1</div>
            <div className={`point`}>2</div>
            <div className={`point`}>3</div>
            <div className={`point`}>4</div>
            <div className={`point`}>5</div>
            <div className={`point`}>6</div>
            <div className={`point`}>7</div>
            <div className={`point`}>8</div>
            <div className={`point`}>9</div>
            <div className={`point`}>10</div>
          </div>
          <form className="main-form">
            <div className="input-wrapper">
              <input type="text" />
              <button>Send</button>
            </div>
          </form>
        </div>
      </div>
      <div className="section-total-review">
        <div className="total-review-container">
          <span>4 Reviews</span>
          <span>Average Rating: 9.3</span>
        </div>
      </div>
      <div className="section-feedback-item container">
        <div className="feedback-container">
          <div className="feedback-item-container">
            <p className="feedback-content">Thầy phú dạy hay lắm</p>
            <span className="point">10</span>
            <div className="action-container">
              <button>Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
