import { useState } from "react";
import Timer from "./Timer";
import AddTimerForm from "./AddTimerForm";
import { v4 } from 'uuid'
import EditForm from "./EditForm";

const TimerFond = () => {
    const [select, setSelect] = useState(false)
    const [edit, setEdit] = useState(false)
    const [title, setTitle] = useState("");
    const [name, setName] = useState("");

    const [tim, setTim] = useState([
        {
            id: v4(),
            title: 'bostrap',
            name: 'ali',
            time: false,
            edit: true
        },
        {
            id: v4(),
            title: 'bostrap',
            name: 'ali',
            time: false,
            edit: true
        }

    ])
    const removeTodo = (id) => {

        const newArr = [...tim].filter(elem => elem.id !== id)
        setTim(newArr)

    }

    const EditTodo = (id) => {

        const newArr1 = [...tim];
        newArr1.forEach((el) => {
            if (el.id === id) {
                el.edit = false
            }

        })
        setTim(newArr1)

    }


    const cancel = (id) => {

        const newArr1 = [...tim];
        newArr1.forEach((el) => {
            if (el.id === id) {
                el.edit = true
            }
        })
        setTim(newArr1)

    }

    const AffichageTimer = () => {
        return tim.map((el) => (
            <div key={el.id}>
                {el.edit ? (
                    <div className="card col-3 text-start mx-auto mt-2">
                        <div className="card-body ">
                            <div className="row ">
                                <p className="text-start">{el.title}</p>
                                <p className="text-start">{el.name}</p>
                                <Timer removeTodo={() => removeTodo(el.id)} updateTodo={() => EditTodo(el.id)} />
                            </div>
                        </div>
                    </div>
                ) : (
                    <EditForm id={el.id} titre={el.title} nom={el.name} setTim={setTim} tim={tim} select={select} setSelect={setSelect} cancel={() => cancel(el.id)} setTitle={setTitle} setName={setName} />
                )}
            </div>
        ))
    }


    return (
        <div>
            <AffichageTimer />
            {
                select ? (
                    <AddTimerForm setSelect={setSelect} setTim={setTim} tim={tim} select={select} title={title} setTitle={setTitle} name={name} setName={setName} />

                ) : (<p className="btn fs-4 " onClick={() => setSelect(!select)}>+</p>)
            }
        </div>
    )

}

export default TimerFond;
