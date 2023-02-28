import './css/app.css'
import './css/global.css'
import './css/sidebar.css'
import './css/main.css'

import Notes from './components/notes/index'
import api from './services/api'
import {useEffect, useState} from 'react' 
import RadioButtons from './components/RadioButton'

function App() {
  
  const [title, setTitle] = useState('')
  const [notes, setNote] = useState('')
  const [AllNotes, setAllNotes] = useState([])
  const [selectChanger, setSelectChanger] = useState('all')

  useEffect(()=>{
    getAllNotes()
  },[])
  
  async function getAllNotes() {
    const response = await api.get('/anotacao/',)
    setAllNotes(response.data)
  }
  
  async function loadNotes(option){
    const response = await api.get(`/anotacao/?priority=${option}`)
    
    if(response){
      setAllNotes(response.data)
    }
  }

  async function handleChange(e){
    console.log("vim aqui")
    setSelectChanger(e.value)

    if(e.value !== 'all'){
      loadNotes(e.value)
    }else{
      getAllNotes()
    }
  }

  async function handleDelete(id){
    const noteDelete = await api.delete(`/anotacao/?id=${id}`)
        
    if(noteDelete){
      setAllNotes(AllNotes.filter(note => note._id !== id))
    }

  }

  async function handleChangePriority(id){
    const note = await api.put(`/anotacao/?id=${id}`, {priority:true})
        
    if(note){
      if(selectChanger !== 'all'){
        loadNotes(selectChanger)
      }else{
        getAllNotes()
      }
    }

  }

  async function handleSubmit(e){
    e.preventDefault()
    const response = await api.post('/anotacao/',{
      title, notes, priority:false
    })
    setTitle('')
    setNote('')
    if(selectChanger !== 'all'){
      getAllNotes()
      setSelectChanger('all')
    }else{
      setAllNotes([...AllNotes, response.data.note])
    }
  }

  useEffect(()=>{
    function  enableSubmitButton(){
      let btn = document.getElementById('btnsalvar')
      btn.style.background = '#ffd3ca'
      if(title && notes){
        btn.style.background = '#eb8f7a'
      }
    }
    enableSubmitButton()
  }, [title,notes])

  return (
    <div id="app">
     <aside>
        <strong>Caderno de Notas</strong>
        <form onSubmit={handleSubmit}>
          
        <div className="input-block">
          <label htmlFor="title">Título da Anotação:</label>
            <input required placeholder="Coloque o título da anotação"
              id="title"
              maxLength="45"
              value={title} 
              onChange={ e => setTitle(e.target.value)}>
            </input>            
          </div>

          <div className="input-block">
            <label htmlFor="nota">Anotação:</label>
            <textarea required placeholder="Coloque sua anotação"
              id="nota"
              value={notes}
              onChange={ e => setNote(e.target.value)}>
            </textarea>
          </div>
          <button id="btnsalvar" type="submit">Salvar</button>
          <RadioButtons 
            handleChange={handleChange}
            selectChanger={selectChanger}
          />
        </form>
      </aside>
      <main>
        <ul>
          {AllNotes.map(data => (
            <Notes 
              key={data._id}
              data={data}
              handleDelete={handleDelete}
              handleChangePriority={handleChangePriority}
            />
          ))}
        </ul>
      </main>
    </div>
  )
}
export default App;
