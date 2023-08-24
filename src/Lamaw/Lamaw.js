import lohg from "../lohg.jpg";
import "./Lamaw.css";

const Lamaw = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={lohg} className="App-logo" alt="logo" />
        <img src={lohg} className="App-logo" alt="logo" />
        <p></p>

        <a
          className="App-link"
          href="http://192.168.18.220:3000"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lamaw
        </a>
      </header>
    </div>
  );
};

export default Lamaw;
