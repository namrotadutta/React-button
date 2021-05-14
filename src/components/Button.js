import React from 'react'



class Button extends React.Component{
    constructor(props){
        super(props);

        this.state={
            isButtonClicked :false
        }
    }

    handleClick(){
        if(!this.state.isButtonClicked){
            this.setState({
                isButtonClicked:true
            }) 
        }
    }
   


    render(){
    if(this.state.isButtonClicked) {
        const buttonClass = 'Boton-green';
    }else {
        const buttonClass = 'Boton';
    }
        return(
            <div>
                
                <button className={buttonClass} onClick={()=> this.handleClick()}>Press</button>
                {this.state.isButtonClicked && <p>Button Clicked</p>}
            </div>
        )
    };
}

export default Button ;