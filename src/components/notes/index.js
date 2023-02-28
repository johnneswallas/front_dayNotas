import { useState } from 'react'
import api from '../../services/api'
import './styles.css'
import './stylesPriority.css'

function Notes({data, handleDelete, handleChangePriority}) {
    
    const [changedNote, setChangedNote] = useState('')
    
    async function hendleSave(e, notes){
        e.style.cursor = 'default'
        e.style.boxShadow = 'none'
        if(changedNote && changedNote !== notes){
            await api.put(`/anotacao/?id=${data._id}`,{notes:changedNote})
            
        }
    }
    function hendleEdit(e, priority) {
        e.style.cursor = 'text'
        e.style.borderRadius = '5px'
        
        if(priority){
            e.style.boxShadow ='0 0 5px white'

        }else{
            e.style.boxShadow ='0 0 5px gray'
        }
    }

    return(
        <>
            <li className={data.priority ? "notepad-infos-priority": "notepad-infos"}>
            <div>
                <strong>{data.title}</strong>
                <span 
                    onClick={()=> handleDelete(data._id)}
                >
                    x
                </span>
                </div> 
                <textarea 
                    defaultValue={data.notes}
                    onClick={e=> hendleEdit(e.target, data.priority)}
                    onChange={ e => setChangedNote(e.target.value)}
                    onBlur={e => hendleSave(e.target, data.notes)}
                />
                <span 
                    onClick={()=> handleChangePriority(data._id)}
                >
                    !
                </span>
            </li>
        </>
        
    )
}
export default Notes