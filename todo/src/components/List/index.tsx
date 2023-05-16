import { useState } from "react";
import Header from "../Header";
useState
import { Form, Search, TaskList } from "./style";
import { AiFillEdit } from 'react-icons/ai'
import { BsFillTrash2Fill } from 'react-icons/bs'


export default function List(): JSX.Element{
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('')
    const [taskList, setTaskList] = useState([])
    const [searchValue, setSearchValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if(task === ''){
            alert('Campo de tarefa não pode ser enviado vazio')
        }
        else if (description === ''){
            alert('Campo de descrição não pode ser enviado vazio')
        }

       else {
        const newTask = {
            task: task,
            description: description
        }
        // Usado para atualizar o estado, utilizando o '...' que cria uma cópia do array e em seguida adiciona a nova tarefa no final do array, em seguida, setDescription e setTask
        // são iniciados como string vazia, limpando assim os campos de entrada do formulário. Dessa forma quando a nova tarefa é adicionada a taskList, os camos são limpos para permitir a adição de mais tarefas
        setTaskList([...taskList, newTask])
        setDescription('')
        setTask('')
        
        }

        
        console.log(task)
        console.log()
 }
    const handleDeleteTask = (index) => {

        const updatedTaskList = [...taskList]
        updatedTaskList.splice(index, 1)
        setTaskList(updatedTaskList)
    }
    
     const filteredTasks = taskList.filter((taskItem) =>
    taskItem.task.toLowerCase().includes(searchValue.toLowerCase())
    
  );


    return (
        <>
        <Header/>
        <Search>
        
        <input type="search" id="task-search" name="task-search" placeholder="Pesquisar tarefa" onChange={(e) => setSearchValue(e.target.value)}/>
        
        </Search>
        <Form>
            <label>Nome da Tarefa:</label>
            <input type="text" id="task-name" name="task-name" placeholder="Digite o nome da tarefa" value={task} required onChange={(e) => {
                setTask(e.target.value)
            }}/>
            
            <label>Descrição da Tarefa:</label>
            <textarea id="task-description" name="task-description" placeholder="Digite a descrição da tarefa" required value={description} onChange={(e) => {
            setDescription(e.target.value)
        }}></textarea>

            
            
            <button onClick={handleSubmit} type="submit">Adicionar Tarefa</button>
            </Form>

        <TaskList>
            <h2>Lista de tarefas</h2> 
            
            <ul>
                {filteredTasks.map((taskItem, index) => (
                    <li key={index}>
                        <h3>{taskItem.task}
                        <div>
                            <button><AiFillEdit size={17}/>
                            </button>
                            <button onClick={() => handleDeleteTask(index)}><BsFillTrash2Fill size={17}/>
                            </button>
                        </div>
                        </h3>
                        <p>{taskItem.description}</p>
                    </li>
                ))}
                
             
                
                
                
            </ul>
        </TaskList>
        </>
    )
}