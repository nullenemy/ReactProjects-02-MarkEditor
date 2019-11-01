import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import './Preview.css'
export default class Preview extends React.Component
{
    render() {
        return (
            <div className="App-Preview">
                <ReactMarkdown source={this.props.content} 
                escapeHtml={false}/>
            </div>
        )
    }
}