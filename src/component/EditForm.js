import { useState } from "react";
import AddTimerForm from "./AddTimerForm";

const EditForm = ({ setTim, el, cancel, titre, nom, tim, AddTodo, id, edit, Update, setEdit }, props) => {
    const [title, setTitle] = useState(titre);
    const [name, setName] = useState(nom);
    const UpdateTodo = (id) => {
        const newArr2 = [...tim];
        newArr2.forEach((el) => {
            if (el.id === id) {
                el.name = name
                el.title = title
                el.edit = true
            }

        })
        setTim(newArr2)

    }

    return (
        <div className="card col-3 text-start mx-auto mt-2">
            <div className="card-body ">
                <label>Titre:</label>
                <input className="form-control" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>la:</label>
                <input className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <button type="submit" className="btn btn-primary my-2 col-6" onClick={() => UpdateTodo(id)}>
                    <span>Update</span>
                </button>
                <button className="btn btn-danger my-2 col-6 " onClick={cancel}>Cancel</button>
            </div>
        </div>
    )
}

export default EditForm;