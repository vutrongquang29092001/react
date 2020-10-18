
import React from 'react';
import ReactDOM from 'react-dom';
import hello from './Hello';
import Toolbar from '@material-ui/core/Toolbar'
import Appbar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button';
import './App.css'
import { green } from '@material-ui/core/colors';
// import { Button } from '@material-ui/core';



export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      Islogin: false,
      islogin: false,


    }
  }
  login() {
    if (this.state.username === 'quang' && this.state.password === '29092001') {
      this.setState({
        Islogin: true
      })
    } else {
      this.setState({
        username: '',
        password: '',
        islogin: true
      })
    }
  }

  render() {
    if (this.state.Islogin) {
      return (
<>
        <Button color= {green}> hello {this.state.username}
          
        </Button>
        <img src='anhnen.png' art='' /> 
</>

      )


    } else {
      return (<>
        {/* <Appbar>
          <Toolbar>
             <Button> <h2 style={{ color: "red" }}>login </h2>
          </Button>
           </Toolbar>
        </Appbar> */}
        <div>
          <h1 style={{ backgroundColor: "greenyellow" }}>Home page</h1>
          <p></p>
        </div>
        <p>
          <p><input
            placeholder={'username'}
            value={this.state.username}

            onChange={(e) => {
              this.setState({
                username: e.target.value
              })
            }
            }
          /></p>  </p>
        <>
          <input
            placeholder={'password'}
            value={this.state.password}

            onChange={(e) => {
              this.setState({
                password: e.target.value
              })
            }
            }
          /> </>

        <p> <button
          onClick={
            () => {
              this.login()
            }
          }>login</button></p>

        {
          this.state.islogin
            ? <p>
              <Button color="primary"> sai tk or mk </Button></p> :
            null
        }
      </>)

    }

  }

}


