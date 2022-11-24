import { useState } from 'react';
import { Todo } from '../../App';
import  './styles.css'

type  CardPropos={
   todo: Todo;
   completeTodo:(id:number) => void;
   deleteTodo:(id:number)=> void
}

function Card({todo, completeTodo, deleteTodo}: CardPropos){
    function handleCompleteTodo(){
    completeTodo(todo.id)
}
  
function handleDeleteTodo(){
   deleteTodo(todo.id)
}
  
    return(
        <div className={`card${todo.completed ? 'done': ''}`}>
            <h2>{todo.title}</h2>
            <div  className="card_buttons">
                <button onClick={handleCompleteTodo}>
                    {todo.completed ? 'Retomar': 'Completar'}</button>
                <button onClick={handleDeleteTodo}>Deletar</button>
            </div>
           
        </div>
    )
}

export default Card