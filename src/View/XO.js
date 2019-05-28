import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Fade from 'react-bootstrap/Fade'

export class XO extends Component {

    state={
       
        neutral:true,
        turn:true,
        buttons:["-","-","-","-","-","-","-","-","-"],
        finish:false,
        winner:"",
        playAgain:undefined
      
        
    }

playAgain=()=>{
    window.location.reload();
}



    endGameDraw=()=>{
        this.setState(() =>({
            finish:true,
            winner:"Draw!",
            playAgain:<Button variant="success" size="lg" onClick={this.playAgain}>Play Again</Button>
        }));
    }

    endGameX=()=>{
 
        this.setState(() =>({
            finish:true,
            winner:"X Wins!",
            playAgain:<Button variant="success" onClick={this.playAgain} size="lg">Play Again</Button>
        }));

    }


    endGameO=()=>{
 
        this.setState(() =>({
            finish:true,
            winner:"O Wins!",
            playAgain:<Button variant="success" onClick={this.playAgain} size="lg">Play Again</Button>
        }));
    }


clickButton=(e)=>{
    const id=parseInt(e.currentTarget.id)
if(this.state.neutral){
if(this.state.turn && this.state.finish==false){
    if(this.state.buttons[id]=="-"){
this.setState({turn:false})



this.setState(() =>({
    buttons:this.state.buttons.fill("X",id ,id+1 )
}));


let btn=document.getElementById(id)
console.log(btn.background)
btn.style.background="#ffa500"
}

}else if(!this.state.turn && this.state.finish==false){{
    const id=parseInt(e.currentTarget.id)
    if(this.state.buttons[id]=="-"){
    this.setState({turn:true})
 


   
this.setState(() =>({
    buttons:this.state.buttons.fill("O",id ,id+1 )
}));
let btn=document.getElementById(id)
btn.style.background="#b20000"
}
}
}
}else{
console.log("not your turn")
}


}



    render() {
        // let x=<ListGroup.Item>{y}</ListGroup.Item>
        // if(this.state.completed){
        //     x=<ListGroup.Item variant="success">{y}</ListGroup.Item>
        // }
 



let buttonsArray=this.state.buttons;
if(this.state.finish==false){
    if(buttonsArray[0]=="X"&&buttonsArray[1]=="X"&&buttonsArray[2]=="X"
    || buttonsArray[3]=="X"&&buttonsArray[4]=="X"&&buttonsArray[5]=="X"
    || buttonsArray[6]=="X"&&buttonsArray[7]=="X"&&buttonsArray[8]=="X"   
    || buttonsArray[0]=="X"&&buttonsArray[3]=="X"&&buttonsArray[6]=="X"    
    ||buttonsArray[1]=="X"&&buttonsArray[4]=="X"&&buttonsArray[7]=="X"
    || buttonsArray[2]=="X"&&buttonsArray[5]=="X"&&buttonsArray[8]=="X"
    || buttonsArray[0]=="X"&&buttonsArray[4]=="X"&&buttonsArray[8]=="X"
    || buttonsArray[2]=="X"&&buttonsArray[4]=="X"&&buttonsArray[6]=="X"    
        ){
            
          this.endGameX();
        }
    
    }
    if(this.state.finish==false){
        if(buttonsArray[0]=="O"&&buttonsArray[1]=="O"&&buttonsArray[2]=="O"
        || buttonsArray[3]=="O"&&buttonsArray[4]=="O"&&buttonsArray[5]=="O"
        || buttonsArray[6]=="O"&&buttonsArray[7]=="O"&&buttonsArray[8]=="O"   
        || buttonsArray[0]=="O"&&buttonsArray[3]=="O"&&buttonsArray[6]=="O"    
        ||buttonsArray[1]=="O"&&buttonsArray[4]=="O"&&buttonsArray[7]=="O"
        || buttonsArray[2]=="O"&&buttonsArray[5]=="O"&&buttonsArray[8]=="O"
        || buttonsArray[0]=="O"&&buttonsArray[4]=="O"&&buttonsArray[8]=="O"
        || buttonsArray[2]=="O"&&buttonsArray[4]=="O"&&buttonsArray[6]=="O"    
            ){
                
              this.endGameO();
            }
        
        }
        let counter=9;
        if(this.state.finish==false){
        this.state.buttons.forEach(element => {
            
           
            if(element!="-"){
                counter--;
            }
            console.log("counter: "+counter)
            if(counter==0){
              this.endGameDraw() 
              
            }

        });
        }
   let currentTurn="";   
   
if(this.state.finish===false){
if(this.state.turn &&this.state.finish===false){
    currentTurn="X's Turn"

}else{
    currentTurn="O's Turn"
}

}else{
    currentTurn="Game Over "+this.state.winner

}

let playAgain=this.state.playAgain;

//const soundFile=url('')
        return (
            <>
           
    
            <Fade style={{ transitionDelay: "0.4s" }} timeout={{ enter: 3000 }} in={this.state.finish}>
            <div className="playAgain"> 
           
            {playAgain}
            
            </div>
            </Fade>
            <div className="currentTurn">
                {currentTurn}
            </div>
            
            <div>
              
                <Container >
           
                <Button id="0" className="board"  onClick={this.clickButton} variant="dark">{this.state.buttons[0]}</Button>
                <Button id="1" className="board" onClick={this.clickButton} variant="dark">{this.state.buttons[1]}</Button>
                <Button id="2" className="board" onClick={this.clickButton} variant="dark">{this.state.buttons[2]}</Button>
                </Container>
                <Container > 
                <Button id="3" className="board" onClick={this.clickButton} variant="dark">{this.state.buttons[3]}</Button>
                <Button id="4" className="board" onClick={this.clickButton} variant="dark">{this.state.buttons[4]}</Button>
                <Button id="5" className="board" onClick={this.clickButton} variant="dark">{this.state.buttons[5]}</Button>
                </Container>
                <Container className="container">
                    <div className="bottom">
                <Button id="6" className="board" onClick={this.clickButton} variant="dark">{this.state.buttons[6]}</Button>
                <Button id="7" className="board" onClick={this.clickButton} variant="dark">{this.state.buttons[7]}</Button>
                <Button id="8" className="board"  onClick={this.clickButton} variant="dark">{this.state.buttons[8]}</Button>
                </div>
                </Container>
            
            </div>
            
            </>
        )
    }
}

export default XO
