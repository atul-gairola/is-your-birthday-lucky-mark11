import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({
    birthdate: "",
    luckyNumber: "",
  });
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getSumOfDigitsInBirthdate = (birthdate) => {
    const birthdateArr = birthdate.replaceAll("-", "").split("");
    return birthdateArr.reduce((total, cur) => {
      return total + Number(cur);
    }, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult("");
    
    const { birthdate, luckyNumber } = data;
    
    if (!birthdate || !luckyNumber) {
      setResult("Please fill both the fields");
      return;
    }

    const sum = getSumOfDigitsInBirthdate(birthdate);
    if (sum % luckyNumber === 0) {
      setResult("Congratulations!! You have a lucky birthdate");
    } else {
      setResult("Your birthdate is not so lucky :(");
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Is your birthday lucky?</h1>
      </header>
      <main>
        <form>
          <input
            type="date"
            name="birthdate"
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="luckyNumber"
            min="0"
            onChange={handleInputChange}
            required
          />
          <button onClick={handleSubmit}>Is it?</button>
        </form>
        <div>{result && <p>{result}</p>}</div>
      </main>
      <footer>
        <p>
          Made with love by <a href="https://atulgairola.tech">Atul Gairola</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
