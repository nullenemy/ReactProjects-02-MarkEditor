import React from 'react'
import MarkEditor from './MarkEditor';
import Preview from './Preview'
import marked from 'marked';

import './SplitPane.css'
marked.setOptions(
    {
        gfm: true,
        breaks: true
    }
)
const DEFAULT_CONTENT = '# This is a header\n\nAnd this is a paragraph'

export default class SplitPane extends React.Component 
{
    constructor(props){
        super(props);
        this.paneRef = React.createRef();
        this.leftRef = React.createRef();
        this.rightRef = React.createRef();
       
        this.state = {
            marked: DEFAULT_CONTENT
        }


        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleTextEntered = this.handleTextEntered.bind(this);
    }
    handleMouseDown(event) {
        let element = this.paneRef.current;
        element.addEventListener("mousemove", this.handleMouseMove);
        element.addEventListener("mouseup", this.handleMouseUp);
    }

    handleMouseMove(event){
        this.leftRef.current.style.width = event.clientX + "px";
        this.rightRef.current.style.width = this.paneRef.current.clientWidth - event.clientX - 1 + "px";
    }

    handleMouseUp(event){
        this.paneRef.current.removeEventListener('mousemove', this.handleMouseMove);
        this.paneRef.current.removeEventListener("mouseup", this.handleMouseUp);
    }

    handleTextEntered(value){
        console.log(value);
       
        
        this.setState({
            marked: value
        })

        console.log(this.state.marked);
    }

    render() {
        return (
            <div className="split-pane" ref={this.paneRef}>
                <div className="split-pane-left" ref={this.leftRef}>
                    <MarkEditor defaultContent={DEFAULT_CONTENT} onTextEntered={this.handleTextEntered}/>
                </div>
                <div className="split-pane-separator"
                    onMouseDown={this.handleMouseDown}
                >
                </div>
                <div className="split-pane-right" ref={this.rightRef}>
                    <Preview content={this.state.marked}/>
                </div>
            </div>
        )
    }
}
  