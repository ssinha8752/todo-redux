import { useState } from 'react';
import './App.css';
import TodoItem from './TodoItem';

function App() {

  const [item, setItem]=useState('');
  const [items,setItems]=useState([]);

  function handleChange(e){
    setItem(e.target.value)
  }

  function handleClick(){
    setItems((prevItem)=>{
      return [...prevItem,item]
    })
    setItem("")
  }

  function itemDelete(id){
    console.log("Delete"+id);
    setItems((prevItem)=>{
      return prevItem.filter((index,item)=>{
        return item!==id;
      })
    })
  }

  return (
    <div className="container">
      <header className="heading">
        <h1>Todo List</h1>
      </header>
      <div className='form'>
        <input type='text' onChange={handleChange} value={item}/>
        <button onClick={handleClick}>
          <span>ADD</span>
        </button>
      </div>
      <div>
        {
          items.map((item, index)=>{
            return (
              <ul>
                <TodoItem key={index} id={index} item={item} onCheck={itemDelete}/>
              </ul>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
