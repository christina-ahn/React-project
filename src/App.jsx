import './App.css'
import {useState} from "react";

function App() {
  let post = '강남 우동 맛집'
  const [items, setItems] = useState([
    {id:1,title:'봄 코트 추천',date:'2020-04-01',count:0, isOpen:true},
    {id:2,title:'강남 우동 맛집',date:'2023-12-25',count:0, isOpen:true},
    {id:3,title:'파이썬 독학',date:'2025-01-10',count:0, isOpen:true}
    ]
  )
  const clickCount = (id) =>{
    setItems(items.map((item)=>
      item.id === id ? { ...item, count: item.count+1 } : item
    ))
  }
  const toggleTitle = () =>{
    setItems(items.map((item)=>
      item.id === 1 ? { ...item, isOpen: !item.isOpen} : item
    ))
  }
  const sortItem = () =>{
    setItems([...items].sort((a,b)=>a.title.localeCompare(b.title)
    ))
    console.log(setItems)
  }
  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>
      <button onClick={sortItem}>정렬</button>
        {items.map((item)=>(
          <div className="list" key={item.id}>
            <h4>
              <span onClick={item.id === 1 ? toggleTitle:undefined}>{ item.id === 1 && !item.isOpen ? '겨울 코트 추천' :item.title }</span>
              <span onClick={()=>clickCount(item.id)}> ❤️</span> {item.count}
            </h4>
            <h4>{item.date}</h4>
          </div>
        ))}

    </div>
  )
}

export default App
