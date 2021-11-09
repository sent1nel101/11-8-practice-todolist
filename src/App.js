import './App.css';
import Form from './components/Form';
import {useState} from 'react'
import FormList from './components/FormList';

function App() {
  const [listItems, setListItems] = useState([])
  const [text, setText] = useState('')
  const handleDelete=(e)=>{
       e.target = "" 
       console.log('delete')
  }
  const handleChange = (e)=>{
    setText(e.target.value)
  }
  const handleSubmit= (e)=>{
    e.preventDefault()
    setListItems([...listItems, text])
    setText('')
  }
  return (
    <div className="App">
    <Form text={text} onChange={handleChange} onSubmit={handleSubmit}/>
    <FormList data={ listItems } onClick={handleDelete}/>
    </div>
  );
}

export default App;
