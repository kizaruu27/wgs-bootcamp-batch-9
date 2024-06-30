import Nav from './components/nav';
import Content from './components/content';
import Comment from './components/comment';
import Form from './components/form';
import ImageSearch from './components/imageSearch';
import HooksClock from './components/HooksClock';
import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { faker } from '@faker-js/faker';
import { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = [
      {
        nama: faker.person.fullName(),
        date: faker.date.past().toLocaleDateString(),
        message: faker.word.words({count: {min: 10, max: 30}}),
        avatar: faker.image.avatar(),
        likes: faker.number.int({min: 10, max: 50})
      },
      {
        nama: faker.person.fullName(),
        date: faker.date.past().toLocaleDateString(),
        message: faker.word.words({count: {min: 10, max: 30}}),
        avatar: faker.image.avatar(),
        likes: faker.number.int({min: 10, max: 50})
      },
      {
        nama: faker.person.fullName(),
        date: faker.date.past().toLocaleDateString(),
        message: faker.word.words({count: {min: 10, max: 30}}),
        avatar: faker.image.avatar(),
        likes: faker.number.int({min: 10, max: 50})
      }
    ]
  }

  render() {
    return(
      <>
        <Nav />
        <Router>
          <Routes>
            <Route path='/' />
            <Route path='home' Component={HomePage}/>
            <Route path='about' Component={AboutPage}/>
          </Routes>
        </Router>

        <Content />
        <div className='comment-section'>
          {this.state.map((comment, key) => 
            <Comment nama={comment.nama} comment={comment.message} date={comment.date} img={comment.avatar} likes={comment.likes} key={key}/>
          )}
        </div>
        <Form />
        <ImageSearch />
        <HooksClock />
      </>
    )
  }
}