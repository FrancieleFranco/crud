import { ChangeEvent, useEffect, useState } from 'react'
import Card from './components/Card'
import './App.css'

export type Todo={
  id: number;
  title: string;
  completed: boolean

}

function App() {
  const [todoInput, setTodoInput]= useState('')
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos= localStorage.getItem('acorderList:todos')
      if(storedTodos){
        return JSON.parse(storedTodos)
      }
      return[]
  })
  //get item para recuperar
 

  useEffect(()=>{
    localStorage.setItem('acorderList:todos', JSON.stringify(todos))
  }, [todos])

  function addTodo(){
   setTodos((
              previousTodos) =>[...previousTodos, {id: Math.random(), title: todoInput, completed: false}
            ])
   setTodoInput('');        
  }

  function completeTodo(id: number){
   setTodos((
      previousTodos) => previousTodos.map((todo) => todo.id != id ? todo:{...todo, completed: !todo.completed})
    );
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>){
    setTodoInput(event.target.value);
  }

  function deleteTodo(id:number){
    setTodos((previousTodos)=> previousTodos.filter((todo)=> todo.id != id) )
  }

  return (
    <div className="App">
      <div className='add_todo'>
        <input placeholder='Fazer café' value={todoInput} onChange={handleInputChange}/>
        <button onClick={addTodo}>Adicionar</button>
      </div>
      {
        todos.map((todo)=> 
        (<Card key={todo.id} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
          ))
      }  
    </div>
  )
}

export default App
