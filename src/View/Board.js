import React, { Component } from 'react'
import XO from './XO'
export class Board extends Component {
    render() {
        return (
            <div className="banner" >
             <h1>   Tic Tac Toe</h1>
                <XO/>
            </div>
        )
    }
}

export default Board
