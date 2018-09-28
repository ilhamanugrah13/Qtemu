import React, { Component } from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { NavLink, Link } from './components/Atoms'
import { NavbarWrap } from './components/Molecules'
import { Header } from './components/Organisms'
import Home from './pages/Home'
import Meetup from './pages/Meetup'
import Explore from './pages/Explore'
import Notfound from './pages/Notfound'
import './App.css';

//store
import store from "./store";

class App extends Component {
  state = {
    links: ['QTemu', 'Create Meetup', 'Explore']
  }
  render() {
    const { links } = this.state;
    return (
      <Provider store={ store }>
        <Router>
          <div>
            <Header>
              <div>
                <NavbarWrap>
                  {
                    links.map((menu, i) => {
                      let url = menu.toLowerCase();

                      if(url == 'create meetup'){
                        url = 'meetup'
                      }
                      console.log(url);
                      return(
                        <NavLink key={i} text={menu} to={'/'+url}/>
                      );
                    })
                  }
                </NavbarWrap>
              </div>
              <Link text="Login" color="white"/>
            </Header>
            <Switch>
              <Route exact path="/" component={Home} />
              <Redirect exact from='/qtemu' to='/'/>
              <Route path="/meetup" component={Meetup} />
              <Route path="/explore" component={Explore} />
              <Route path="*" component={Notfound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
