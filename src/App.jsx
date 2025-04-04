import './App.css'
import React, {useState} from "react";
import {v4 as uuid4} from "uuid";

function App() {
  const [items, setItems] = useState([
    {id:1,title:'봄 코트 추천',date:'2020-04-01',count:0, isOpen:true, modal:false},
    {id:2,title:'강남 우동 맛집',date:'2023-12-25',count:0, isOpen:true, modal:false},
    {id:3,title:'파이썬 독학',date:'2025-01-10',count:0, isOpen:true, modal:false}
    ]
  )
  const clickCount = (id) =>{
    setItems(items.map((res)=>
      res.id === id ? { ...res, count: res.count+1 } : res
    ))
  }
  const deleteItem = (id) =>{
    setItems(items.filter((res)=>res.id !== id))
  }
  const toggleTitle = () =>{
    setItems(items.map((res)=>
      res.id === 1 ? { ...res, isOpen: !res.isOpen} : res
    ))
  }
  const sortItem = () =>{
    setItems([...items].sort((a,b)=>a.title.localeCompare(b.title)
    ))
  }
  const openModal = (id) =>{
    setItems(items.map((res)=>
      res.id === id ? {...res, modal: !res.modal} : res))
  }
  const [newItem,setNewItem] = useState('') //input 입력값을 저장하는 상태 <input value={newItem} />
  const handleChange = (e) =>{
    setNewItem(e.target.value) //입력된 값을 상태(newItem)에 업데이트
  }
  const handleClick = () =>{
    const today = new Date().toISOString().split("T")[0];
    const newId = uuid4();
    const newItemObject = {
      id:newId,
      title:newItem,
      date:today,
      count:0,
      isOpen:true,
      modal:false
    }
    setItems([...items,newItemObject])
    console.log(...items)
    console.log(items)
    setNewItem("")
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>
      <button onClick={sortItem}>정렬</button>
      {items.map((item)=>(
        <div className="list" key={item.id} onClick={()=>openModal(item.id)}>
          <h4>
            <span onClick={item.id === 1 ? toggleTitle : undefined}>{ item.id === 1 && !item.isOpen ? '겨울 코트 추천' :item.title }</span>
            <span onClick={(event)=>{event.stopPropagation();clickCount(item.id)}}> ❤️</span> {item.count}
          </h4>
          <h4>{item.date}</h4>
          <button onClick={(event)=>{event.stopPropagation();deleteItem(item.id)}} className="delete-btn">삭제</button>
          {item.modal && <Modal item={item}/>}
        </div>
      ))}
      <input type="text" value={newItem} onChange={handleChange} onKeyDown={(event)=>event.key === "Enter" && handleClick()}></input>
      <button onClick={handleClick}>추가</button>
    </div>
  )
}
  class Modal0 extends React.Component{
    render
  }

function Modal({item}){
  return (
    <div className="modal">
      <h4>{item.title}</h4>
      <p>{item.date}</p>
    </div>
  )
}
export default App
