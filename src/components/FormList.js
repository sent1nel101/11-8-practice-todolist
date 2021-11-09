import React from 'react'
import { AiOutlineDelete } from "react-icons/ai";

const FormList = (props) => {   
    const list = props.data
    const itemsList = list.map((val, index)=><li key={index}>{index +1}: {val}<button><AiOutlineDelete onClick={props.onClick} /></button></li>)
    return (
       <ul>{itemsList}</ul>
    )
}

export default FormList