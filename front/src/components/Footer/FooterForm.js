import React from 'react';
class FooterForm extends React.Component{
    constructor(props){
        super(props);
        this.state= {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.binf(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }
    handleSubmit(event){
        alert('Cadastro foi completado' + this.state.value);
        event.prevetDefault();
    }
    

    render(){
        return(
            
            <form onSubmit={this.handleSubmit}>
        <h1>Realize teste do Formulario</h1>
            <label>
                NOME:<input type="text" value = {this.state.value} onCharge ={this.handleChange}/>
            </label>
            </form>
        )
    }
}
