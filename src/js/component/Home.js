import React, { useState } from "react";
import ("../../styles/Home.css")

const Home = () => {
    let [input, setInput] = useState("")
    let [guardarlist, setGuardarList] = useState([])

    const enter = (evento) => {
        if (evento.key === "Enter") {
            setGuardarList([...guardarlist, input]);
            setInput("");
        }
    }

    return (
        <div className="container mt-5">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="todo's list By Jhojan" aria-label="Recipient's username" aria-describedby="button-addon2"
                    onChange={(e) => setInput(e.target.value)}
                    onKeyUp={enter}
                    value={input} />

            </div>

            <div>
                {guardarlist.map((value, index) => (
                    <div className="list d-flex justify-content-between">
                        <p key={index}>{value}</p>

                        <button className="btn btn-danger" type="button" id="button-addon2"
                            onClick={() => {
                                setGuardarList(guardarlist.filter((value, indexFiltro) => indexFiltro !== index));
                            }}>X</button>
                    </div>
                ))}

            </div>

        </div>

    );
};
export default Home;
