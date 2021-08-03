import React, { useState } from 'react';
import './index.css'
import Todolist from './Todolist';

const App = () => {
  const [inputList, setInputList] = useState();
  const [item, setItem] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value)
  }

  const addItem = () => {
    setItem((previousItems) => {
      return [...previousItems, inputList]

    });

    setInputList("");
  }
  const deleteItem = (id) => {
    setItem((previousItems) => {
      return previousItems.filter((arrElem, index) => {
        return index !== id;
      })
    })
  };

  return (
    <>
      <div className='main-div'>
        <div className="div-1">
          <div className="div-2">
            <h3>Todo List</h3>
          </div>
          <div className="div-3">
            <input type="text" value={inputList} placeholder="Enter the text" onChange={itemEvent} />
            <button type="submit" className="butadd" onClick={addItem}>ADD</button>
          </div>
          <div className="div-4">
            <ul style={{ listStyle: "none" }}>
              {item.map((itemvalue, index) => {
                return (
                  <>
                    <div className="div-5">
                      <Todolist
                        key={index}
                        id={index}
                        text={itemvalue}
                        onSelect={deleteItem}
                      />
                    </div>

                  </>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

    </>

  )
}
export default App;