import React,{useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import axios from 'axios'
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import Article from './components/article/Article'
import Section from './components/section/Section'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Note from './components/note/Note'

function App() {
  const [user,setUser] = useState(new User());

  useEffect(()=>{
      async function fetchUser(){
          setUser((await axios.get('https://api4asquare.herokuapp.com/userData')).data)
      }
      fetchUser();
  },[])

  return (
    <div id="wrapper">
      <Router>
        <Header />
        <Switch>
          <Route exact={true} path = "/" >
            <Redirect to="/home" />
          </Route>
          <Route path = "/home">
            <Banner name={user.name} bio={user.bio}/>
          </Route>
          <Route exact path = "/note">
              <Article/>
          </Route>
          <Route path="/note/:id" component={Note}/>
          <Route path = "/about" component = {()=>[<Section/>,<Footer/>]} />
          <Route path = "/contact" component = {Contact} />
          {/* <Footer /> */}
        </Switch>
      </Router>
    </div>
  );
}

export class User{
  name;
  bio;
}

export default App;
