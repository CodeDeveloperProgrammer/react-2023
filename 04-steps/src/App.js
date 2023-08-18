import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    console.log("previous");
    step > 1 ? setStep((s) => s - 1) : setStep(1);
  }
  function handleNext() {
    console.log("next");
    step >= 3 ? setStep(3) : setStep((s) => s + 1);
  }
  /*
  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            Step {step} of 3: {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button
              textColor="#7950f2"
              bgColor="#fff"
              onClick={handlePrevious}
              emoji="👈🏼"
              text="Previous"
            />
            <Button
              textColor="#7950f2"
              bgColor="#fff"
              onClick={handleNext}
              emoji="👉🏼"
              text="Next"
            />
          </div>
        </div>
      )}
    </div>
  );
}

 function Button({ bgColor, textColor, onClick, emoji, text }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {text === "Previous" ? (
        <span>
          {emoji} {text}
        </span>
      ) : (
        <span>
          {text} {emoji}
        </span>
      )}
    </button>
  );
}
 */

  //Usando children
  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <StepMessage step={step}>
            {/* children */}
            Step {step} of 3: {messages[step - 1]}
            <div className="buttons">
              <Button
                textColor="#e7e7e7"
                bgColor="#444"
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
                emoji="⬅"
                text="Previous"
              >
                Learn how
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button textColor="#7950f2" bgColor="#fff" onClick={handlePrevious}>
              {/* Children */}
              <span>👈🏼</span> Previous
            </Button>
            <Button textColor="#7950f2" bgColor="#fff" onClick={handleNext}>
              {/* Children */}
              Next <span>👉🏼</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
