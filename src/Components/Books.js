import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Outlet } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import bookImg from '../book.png';
import CreateBook from '../CreateBook.js';




class Books extends React.Component {

    render() {
        console.log('YEEEE', this.props.books);
        let books = this.props.books.map((book) => (

            <Book
                book={book}
                key={book._id}
                deleteBooks={this.props.deleteBooks}
            />
        ));
        return (
            <>

            </>
        );
    }
}


class Book extends Books {

    render() {
        console.log(this.props.book._id, 'GGGGGG');
        return (

            <>
                {
                    this.state.books.length ? (
                        <Carousel id='carousel'>
                            {this.state.books.map(book => (
                                <Carousel.Item key={book._id}>
                                    <img className='image'
                                        src={bookImg}
                                        alt={book.title}
                                    />
                                    <Carousel.Caption>
                                        <h3>Title: {book.title} </h3>
                                        <p>Description: {book.description}</p>
                                        <p>Status: {book.status}</p>
                                        <Button variant="success" onClick={() => this.props.deleteBooks(this.props.book._id)}>Delete Books</Button>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    )
                        : <h3 className='no-books-found'> No Books Found</h3>
                }

                < CreateBook handleBookSubmit={this.handleBookSubmit} />
                <Outlet />
            </>
        );
    }
}


export default Books;