import { useState } from "react"
import TextInput from "./textInput"

export default function NewGameForm({ addGame }) {
    const [title, setTitle] = useState("") 
    const [cover, setCover] = useState("")
   
    const handleSubmit = (event) => {
        event.preventDefault()
        addGame({ title, cover })
        setTitle("")
        setCover("")
      }
  
    return(
        <form onSubmit={handleSubmit}>
        <TextInput id="title" label="Titulo:" value={title} setValue={setTitle}/>
        <TextInput id="cover" label="Capa:" value={cover} setValue={setCover}/>
        <button type="submit">Adicionar á biblioteca</button>
       </form>
    )
}