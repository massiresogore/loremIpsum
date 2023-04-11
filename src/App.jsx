import { useState } from "react";
import data from "./data";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  let amount = parseInt(count);

  const handleSubmit = (e) => {
    setText(data.slice(0, amount));
    e.preventDefault();
  };
  return (
    <section className="section-center">
      <h2>Lorem Ipsum Starter</h2>
      <form action="" className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount"></label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          step="1"
          max="8"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <div className="lorem-text">
        {text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </section>
  );
};
export default App;
