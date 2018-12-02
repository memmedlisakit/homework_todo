import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faPenAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


export default ({ todo, id, onClick, event }) => (
    <tr>
        <td>
            <button onClick={onClick(id, "status")} className="btn btn-default btn-sm mr-2">
                <FontAwesomeIcon className={todo.status ? "green" : "red"} icon={faCheckCircle} />
            </button>
            {!todo.editAble && (todo.status ? <del>{todo.text}</del> : <span>{todo.text}</span>)}
            {todo.editAble ?
                <input className="edit-form form-control" value={todo.text} onChange={event(id, "edit")} />
                : null}
            <button onClick={event(id, "remove")} className="btn btn-default btn-sm float-right">
                <FontAwesomeIcon className="blue" icon={faTrashAlt} />
            </button>
            <button onClick={onClick(id, "editAble")} className="btn btn-default btn-sm float-right mr-2">
                <FontAwesomeIcon className="blue" icon={faPenAlt} />
            </button>
        </td>
    </tr>

)
