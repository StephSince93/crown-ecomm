import { useEffect, useState } from "react";
import "./select-correct-color.styles.scss";
const SelectCorrectColor = () => {
  const [color, setColor] = useState();
  const [answers, setAnswers] = useState([]);
  const [response, setResponse] = useState("");
  const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  const initializeColors = () => {
    let randomColor = getRandomColor();
    setColor(randomColor);
    setAnswers(
      [randomColor, getRandomColor(), getRandomColor()]
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
    ); //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  };

  useEffect(() => {
    initializeColors();
  }, []);

  const checkColorSelection = (selectedColor) => {
    if (selectedColor === color) {
      setResponse("Correct!");
      initializeColors();
    } else {
      setResponse("Wrong Answer, Try Again!");
    }
  };
  return (
    <div className="color-wrapper">
      <div className="color-box" style={{ background: color }}></div>
      {answers.map((a) => (
        <button
          key={a}
          className="color-button"
          type="button"
          onClick={() => checkColorSelection(a)}
        >
          {a}
        </button>
      ))}
      <p>{response}</p>
    </div>
  );
};

export default SelectCorrectColor;
