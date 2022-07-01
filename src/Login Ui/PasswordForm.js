import React from 'react';

class ShowButton extends React.Component {


    render(){
        return(
            <button className={this.props.className}
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
        if(!this.state.value){
            this.setState({passwordIsShown: false,})
        }
    }

    handleSubmit(event) {
        alert('you have submitted: ' + this.state.value);
        event.preventDefault();
    }


    toggleText() {
        console.log("you toggled text to " + !this.state.passwordIsShown);
        this.setState({passwordIsShown: !this.state.passwordIsShown});
    }

    renderToggleTextButton() {
        if(this.state.value){
            return(
                <div className='Password Toggle-text-button-placeholder flex'>
                    <ShowButton className='Password Toggle-text-button flex' onClick={()=>this.toggleText()}></ShowButton>
                </div>
            );
        }
    }

    render() {

        return(
            <>
                <div className='Password box'>    
                    <label className='Password label'>Password</label>
                    <div className='Password holder'>
                        <form className='Password-holder' onSubmit={this.handleSubmit}>
                            <input className='Password form flex' 
                            type ={this.state.passwordIsShown? "text": "password"} 
                            value = {this.state.value} 
                            onChange={this.handleChange}
                            placeholder='Password'>
                            </input>
                        </form>
                        {this.renderToggleTextButton()}
                    </div>
                </div>
            </>
        )
    };
}

export {PasswordForm}
