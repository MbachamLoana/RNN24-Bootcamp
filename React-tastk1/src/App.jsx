import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const languages = [
    { name: "JavaScript", color: "yellow" },
    { name: "Python", color: "blue" },
    { name: "Java", color: "red" },
    { name: "C++", color: "green" },
    { name: "c", color: "orange" },
    { name: "react", color: "indigo" },
    { name: "php", color: "violet" },
    { name: "laravel", color: "pink" },
    { name: "kotlin", color: "swift" },
    { name: "flutter", color: "brown" },
    { name: "sql", color: "lavender" },
    { name: "dart", color: "mint" },
    { name: "r", color: "teal" },
    { name: "perl", color: "purple" },
    { name: "scala", color: "magenta" },
    { name: "haskell", color: "apricot" },
    { name: "rust", color: "lime" },
    { name: "go", color: "maroon" },
    { name: "html", color: "cyan" },
  ];

  const App = () => {
    const [showLanguages, setShowLanguages] = React.useState(true);
    const [results, setResults] = React.useState([]);
    const [attemptNumber, setAttemptNumber] = React.useState(1);
    const [usedLanguages, setUsedLanguages] = React.useState([]);

    const toggleLanguages = () => {
      setShowLanguages(!showLanguages);
    };

    const handleCheck = (language, color) => {
      if (!showLanguages && !usedLanguages.includes(language)) {
        const isSuccess = languages.some(
          (lang) => lang.name === language && lang.color === color
        );
        setResults([
          ...results,
          {
            attempt: attemptNumber,
            language,
            color,
            status: isSuccess ? "Success" : "Failed",
          },
        ]);
        setAttemptNumber(attemptNumber + 1);
        setUsedLanguages([...usedLanguages, language]);
      }
    };
  };

  const renderResultsTable = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Attempt Number</th>
            <th>Programming Language</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td>{result.attempt}</td>
              <td style={{ backgroundColor: result.color, color: "white" }}>
                {result.language}
              </td>
              <td
                style={{
                  backgroundColor:
                    result.status === "Success" ? "green" : "red",
                }}
              >
                {result.status === "Success" ? "✔" : "❌"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  setTimeout(toggleLanguages, 4000);

  return (
    <div>
      {showLanguages ? (
        <div className="container">
          {languages.map((lang, index) => (
            <div
              key={index}
              className="language"
              style={{ backgroundColor: lang.color }}
              onClick={() => handleCheck(lang.name, lang.color)}
            >
              {lang.name}
            </div>
          ))}
        </div>
      ) : (
        <div>
          <label htmlFor="language">Language: </label>
          <input type="text" id="language" />
          <br />
          <label htmlFor="color">Color: </label>
          <input type="text" id="color" />
          <br />
          {renderResultsTable()}
        </div>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
return (
  <>
    <title>Find Programming Language by Color</title>
    <p>
      Enter the corresponding color that matches for every programming language
    </p>
    <section>
      <form>
        <div>
          <span>Programming language</span>
          <input id="pl" name="programming language" />
        </div>
        <div>
          <span>Color</span>
          <input id="color" name="color" />
        </div>
        <button type="submit" name="submit">
          Submit
        </button>
      </form>
    </section>
  </>
);

export default App;
