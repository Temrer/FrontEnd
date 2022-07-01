import React from 'react';

class ShowButton extends React.Component {


    render(){
        return(
            <button
            onClick={() => this.props.onClick() }>show</button> 
        )
    }
}



class PasswordForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            passwordIsShown: false,
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('you have submitted: ' + this.state.value);
        event.preventDefault();
    }


    toggleText() {
        console.log("you toggled text to " + !this.state.passwordIsShown);
        this.setState({passwordIsShown: !this.state.passwordIsShown});
    }

    render() {

        return(
            <>
                <label>Password</label>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type ={this.state.passwordIsShown? "text": "password"} 
                        value = {this.state.value} 
                        onChange={this.handleChange}></input>
                        {/* <input type='submit' value='Submit' /> */}
                    </form>
                    <ShowButton onClick={()=>this.toggleText()}></ShowButton>
                </div>
            </>
        )
    };
}

export {PasswordForm}
