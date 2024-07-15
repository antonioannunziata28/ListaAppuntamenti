import React from "react";


const ListaAppuntamenti = (props) => {
  return (
    <React.Fragment>
        <ul className="user-list">
            {props.data.map((person) => (
                <li key={person.id}>
                    {" "}
                    <Person {...person} removeItem = {props.removeItem} />
                </li>
            ))}
        </ul>
    </React.Fragment>
  )
};

const Person = ({id,nome,stato,img,removeItem}) => {
  return (
    <article>
        <img src={img} alt={id} className="person-img"/>
        <div className="person-info">
            <div className="person-action">
                <h3>{nome}</h3>
                <button className="btn" onClick={()=> removeItem(id)}>
                    X
                </button>
            </div>
            <p>{stato}</p>
        </div>
    </article>
  )
};

export default ListaAppuntamenti;