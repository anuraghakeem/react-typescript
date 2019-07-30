//Reference for Typescript
// const sum = (a:number,b:number):number=> a+b
// return(
//     <h1>Hello {sum(1,2)}</h1>
// );

import React, {Fragment, useState} from 'react'
import ReactDOM from 'react-dom'

type FormElem = React.FormEvent<HTMLFormElement>

interface ITodo{
    text: string,
    complete:boolean
}

export default function App():JSX.Element{
    const [value,setValue] = useState<string>('')
    const [todos,setTodos] = useState<ITodo[]>([])

    const handleSubmit = (e:FormElem): void =>{
        e.preventDefault()
        addTodo(value)
        setValue('')
    }

    const addTodo = (text:string):void =>{
        const newTodos: ITodo[] = [...todos, { text, complete:false}]
        setTodos(newTodos)
    }

    const completeTodo = (index:number):void =>{
        const newTodos: ITodo[] = [...todos]
        newTodos[index].complete = !newTodos[index].complete
        setTodos(newTodos)
    }

    const removeTodo = (index:number):void =>{
        const newTodos: ITodo[] = [...todos]
        newTodos.splice(index,1)
        setTodos(newTodos)
    }

    return(
        <Fragment>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' value={value} onChange={(e)=>setValue(e.target.value)} required />
                <button type='submit'>Add Todo</button>
            </form>
            <section>
                {todos.map((todo:ITodo, index:number)=>(
                    <div key={index}>
                        <span style={{textDecoration:todo.complete?'line-through':''}}>
                            {todo.text}
                        </span>
                        <button type='button' onClick={()=>completeTodo(index)} >{' '}{todo.complete?'Incomplete':'Complete'}{' '}</button>
                        <button type='button' onClick={()=>removeTodo(index)}>&times;</button>
                    </div>
                ))}
            </section>
        </Fragment>
    );
}

ReactDOM.render(<App />, document.getElementById('app-root'))