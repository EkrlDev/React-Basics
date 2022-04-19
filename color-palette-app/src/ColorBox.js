import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './ColorBox.css';

class Colorbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            copied:false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({copied: true}, () => {
            setTimeout(() => {
                this.setState({copied: false})
            }, 1500);
        });
    }


    render() {
        const { name, background } = this.props;
        return (
            <CopyToClipboard text={background}>
                <div className="ColorBox" style={{background}}>
                    <div className={`copy-overlay ${this.state.copied && 'show'}`} style={{background}} onClick={this.handleClick}/>
                    <div className={`copy-msg ${this.state.copied && 'show'}`}>
                        <h1>
                            COPIED !
                        </h1>
                        <p>{background}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span>{name}</span>
                        </div>
                        <button className="copy-button">Copy</button>
                    </div>
                    <span className="see-more">More</span>
                </div>
            </CopyToClipboard>
        );
    }
}

export default Colorbox; 