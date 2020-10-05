import React from 'react'

function Task(props) {
    return (
        <div className="custom-editor-view">
            <div dangerouslySetInnerHTML={{__html:props.editor}}></div>
        </div>
    )
}

export default Task
