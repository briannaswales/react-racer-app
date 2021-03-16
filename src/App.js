import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './views/About'
import Home from './views/Home'
import Contact from './views/Contact'

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      firstName: "Brianna",
      lastName: "Swales",
      address: "123 Somewhere",
      phone: "1234567",
      email: "firstName@gmail.com"
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        Hello World
        <main className="container">
          <Switch>
            <Route exact path="/" render={() => <Home name={this.state.name} />} />
            <Route path="/about" render={() => <About name={this.state.name} />} />
            <Route path="/Contact" render={() => <Contact name={this.state.firstName + ' ' + this.state.lastName} address ={this.state.address} phone={this.state.phone} email={this.state.email}  />} />
          </Switch>
        </main>
      </div>
    )
  }
}
