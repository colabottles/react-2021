import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { data } from './books';
import SpecificBook from './Book';
import { greeting } from './__test__/testing';

function BookList() {
  console.log(greeting);
  return (
    <section className='booklist'>
      {data.map((book, index) => {
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById('root'));