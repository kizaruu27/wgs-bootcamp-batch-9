import Nav from './components/nav';
import Content from './components/content';
import Comment from './components/comment';
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
        <Content />
        <div className='comment-section'>
          {this.state.map((comment, key) => 
            <Comment nama={comment.nama} comment={comment.message} date={comment.date} img={comment.avatar} likes={comment.likes} key={key}/>
          )}
        </div>
      </>
    )
  }
}