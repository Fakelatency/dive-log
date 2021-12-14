import React from 'react';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            targetUsername:'fakelatency',
            targetPassword:'1234',
            inputUsername:'',
            inputPassword:'',
            passwdType: 'password'
        }
        this.checkBox = this.checkBox.bind(this);
  }
   
     checkPass(login,passwd){
        if(login === this.state.targetUsername && passwd === this.state.targetPassword){
            return true
        }
     }

     moveOver(){
        if (this.checkPass(this.state.inputUsername,this.state.inputPassword)){
            window.location.href = 'https://gamesense.pub/forums/';
        }
     }

     checkBox(){
       if(this.state.passwdType === "password"){
          return this.setState({passwdType: "text"})
       }
       if(this.state.passwdType === "text"){
          return this.setState({passwdType: "password"})
       }
       else return
     }

    render() {
        return (
            <div className = "container">
              <div className = "box">                                                 
                <form onSubmit={this.handleSubmit}>                  
                    <label for="Login">Login</label><br/>
                    <input type="text" id="Login" placeholder="Here goes ur login" value={this.state.inputUsername} onChange={evt => this.updateInputUsername(evt)}></input><br/>
                    <label for="Password">Password</label><br/>
                    <input type={this.state.passwdType} id="password" placeholder="***** ***" value={this.state.inputPassword} onChange={evt => this.updateInputPassword(evt)}></input><br/>
                    {/*onClick={this.checkBox()}*/}
                    <input type="checkbox" id="show-pass" value="true" onChange={this.checkBox}></input>
                    <label for="show-pass">Show password</label><br/>
                    <br/>
                    <br/>
                    <input type="submit" className="submit" onClick={this.moveOver}></input>
                </form>

              </div>
            </div>
         
        );
      }
      updateInputPassword(evt){
        this.setState({inputPassword: evt.target.value})
    }
    updateInputUsername(evt){
        this.setState({inputUsername: evt.target.value})
    }
    }
   
  export default Login;