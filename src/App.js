import ListaAppuntamenti from "./ListaAppuntamenti";
import data from "./data";
import { useState } from "react";

function App() {
  const [people,setPeople] = useState(data);
  
  const removeItem = (id) =>{
    setPeople((oldValue) => oldValue.filter((value)=> value.id !== id));
  };

  const reloadItem = () =>{
    setPeople(data);
  };

  return (
    <section>
      <div className="container">
        <h2 className="title">Prossimi Incontri</h2>
        <div className="people-list">
          <ListaAppuntamenti data = {people} removeItem = {removeItem} />
        </div>
        <div className="btn-group">
          <button className="btn btn-reset" onClick={reloadItem}>
            {" "}
            Reload{" "}
          </button>
          <button className="btn btn-delete" onClick={() => setPeople([])}>
            {" "}
            Delete all
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;

