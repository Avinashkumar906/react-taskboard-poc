import React from 'react'

function Task(props) {
    return (
        <div className="custom-editor-view">
            <div dangerouslySetInnerHTML={{__html:props.task.html}}></div>
        </div>
    )
}

export default Task
