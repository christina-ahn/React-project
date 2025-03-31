import './App.css'
import {useState} from "react";

function App() {
  const [items, setItems] = useState([
    {id:1,title:'봄 코트 추천',date:'2020-04-01',count:0, isOpen:true, modal:false},
    {id:2,title:'강남 우동 맛집',date:'2023-12-25',count:0, isOpen:true, modal:false},
    {id:3,title:'파이썬 독학',date:'2025-01-10',count:0, isOpen:true, modal:false}
    ]
  )
  const [newItem,setNewItem] = useState('')
  const clickCount = (id) =>{
    setItems(items.map((res)=>
      res.id === id ? { ...res, count: res.count+1 } : res
    ))
  }
  const toggleTitle = () =>{
    setItems(items.map((res)=>
      res.id === 1 ? { ...res, isOpen: !res.isOpen} : res
    ))
  }
  const sortItem = () =>{
    setItems([...items].sort((a,b)=>a.title.localeCompare(b.title)
    ))
    console.log(setItems)
  }
  const openModal = (id) =>{
    setItems(items.map((res)=>
      res.id === id ? {...res, modal: !res.modal} : res))
  }
  const handleChange = (e) =>{
    setNewItem(e.target.value)
  }
  const handleClick = () =>{
    const today = new Date().toDateString()
    const newId = items.length>0 ? items[items.length-1].id + 1 : 1;
    const newItemObject = {
      id:newId,
      title:newItem,
      date:today,
      count:0,
      isOpen:true,
      modal:false
    }
    setItems([...items,newItemObject])
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
            <span onClick={()=>clickCount(item.id)}> ❤️</span> {item.count}
          </h4>
          <h4>{item.date}</h4>
          {item.modal && <Modal item={item}/>}
        </div>
      ))}
      <input type="text" value={newItem} onChange={handleChange}></input>
      <button onClick={handleClick}>추가</button>
    </div>
  )
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
