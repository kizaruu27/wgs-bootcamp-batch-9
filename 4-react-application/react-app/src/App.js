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
        message: faker.word.words(),
        avatar: faker.image.avatar()
      },
      {
        nama: faker.person.fullName(),
        date: faker.date.past().toLocaleDateString(),
        message: faker.word.words(),
        avatar: faker.image.avatar()
      },
      {
        nama: faker.person.fullName(),
        date: faker.date.past().toLocaleDateString(),
        message: faker.word.words(),
        avatar: faker.image.avatar()
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
            <Comment nama={comment.nama} comment={comment.message} date={comment.date} img={comment.avatar} key={key}/>
          )}
        </div>
      </>
    )
  }
}