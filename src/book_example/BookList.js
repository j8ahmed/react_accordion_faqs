import React from 'react';
import {books} from './books'
import Book from './Book'

const BookList = () => {
    return (
      <section>
        {books.map( (book) => { 
          return (
            <Book key={book.id} {...book}/>
          )
        })}
      </section>
    );
}

export default BookList;