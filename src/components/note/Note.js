import React, { useState, useRef, useEffect } from 'react'
import Task from './tasks/Task'
import SunEditor from 'suneditor-react';
import axios from 'axios'
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import { useParams } from 'react-router';

function Note() {

    const inputEl = useRef(null);
    const [task, setTask] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        axios.get(`https://api4asquare.herokuapp.com/tasksboard?id=${id}`)
        .then((response)=>setTask(response.data.tasks))
        .catch((err)=>console.log(err))

        return () => {}
        
    }, [])

    const EditorOption = {
        "mode": "classic",
        "katex": "window.katex",
        "tabDisable": false,
        buttonList: [["font","fontSize","formatBlock","paragraphStyle","blockquote","bold","underline","italic","strike","subscript","superscript","fontColor","hiliteColor","textStyle","removeFormat","outdent","indent","align","horizontalRule","list","lineHeight","table","link","image","video","audio","imageGallery","fullScreen","showBlocks","codeView","preview","print","save","template","math","undo","redo"]]
    }
    
    const addTask = () =>{
        let element = inputEl.current.editor.getContents();
        if(element === ''  || element === undefined || element === null){
            alert('Please write some text!')
        } else {
            axios.post(`https://api4asquare.herokuapp.com/task?id=${id}`,{title:"Title",html:element}).then(
                (response)=>setTask([response.data.html,...task])
            ).catch(
                (err)=>console.log(err)
            )
        }
    }    

    return (
        <section id="one">
            <div className="inner">
                <h1 className="text-white">Task Board</h1>
                <SunEditor height="auto" setOptions={EditorOption} ref={inputEl}/>
                <button className="button primary fit" onClick={()=>addTask()}>Add Task</button>
                {task.map((item)=><Task task={item}></Task>)}
            </div>
        </section>
    )

}

export default Note
