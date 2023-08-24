import "./App.css";
import Lamaw from "./Lamaw/Lamaw";
import Todo from "./Todo/Todo";

function App() {
  return (
    <>
      <div className="Row">
        <div className="column">
          <Lamaw />
        </div>
        <div className="column">
          <Lamaw />
        </div>
      </div>
      <Todo />
    </>
  );
}

export default App;
