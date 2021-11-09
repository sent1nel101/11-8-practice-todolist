import { BiAddToQueue } from "react-icons/bi";

const Form = ({text, onChange, onSubmit}) => {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <h1>ToDo List</h1>            
                <input type="text" value={text} placeholder={'enter new task'} onChange={onChange}/>
                <button type="submit"><BiAddToQueue /></button>
            </form>
        </div>
    )
}

export default Form