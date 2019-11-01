import React from 'react'
import {UnControlled as CodeMirror} from 'react-codemirror2'


import '../../node_modules/codemirror/lib/codemirror.css'
import '../../node_modules/codemirror/theme/mdn-like.css'
import './MarkEditor.css'

require('codemirror/mode/markdown/markdown')
export default class MarkEditor extends React.Component
{
    render() {
        return (
            <div className="App-Editor">
                <CodeMirror 
                    value={this.props.defaultContent}
                    options={{
                        mode: 'markdown',
                        theme: 'mdn-like',
                        lineNumbers: true
                    }}
                    onChange={(editor, data, value) => {
                        this.props.onTextEntered(value)
                    }}
                    />      
            </div>
            
        )
    }
}