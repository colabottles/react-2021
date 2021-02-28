import React from 'react';

const Book = ({ img, alt, title, author }) => {
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('hello world!');
  }
  const complexExample = (author) => {
    console.log(author);
  }
  return (
    <article className="book">
      <img src={img} alt={alt} />
        <h1 onClick={() => console.log(title)}>{title}</h1>
        <h2>{author}</h2>
        <button type="button" onClick={clickHandler}>
          reference example
        </button>
        <button type="button" onClick={() => complexExample(author)}>
          more complex example
        </button>
    </article>
  );
}

export default Book;