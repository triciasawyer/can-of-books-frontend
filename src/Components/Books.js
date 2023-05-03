import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import bookImg from '../book.png';
import CreateBook from './CreateBook.js';



class Books extends React.Component {

// add state to handle the form show and hide

    render() {
        console.log('YEEEE', this.props.books);
        let books = this.props.books.map((book) => {
            return (
                <Carousel.Item key={book._id}>
                    <img className='image' src={bookImg} alt={book.title} />
                    <Carousel.Caption>
                        <h3>Title: {book.title} </h3>
                        <p>Description: {book.description}</p>
                        <p>Status: {book.status}</p>
                        </Carousel.Caption>
                        <Button
                            variant="success"
                            onClick={() => this.props.deleteBooks(book._id)}>Delete Books</Button>
                    {/* update button here */}
                </Carousel.Item>
            );
        });


        return (
            <>
                <Carousel id='carousel'>{books}</Carousel>
                <CreateBook handleBookSubmit={this.props.handleBookSubmit} />

            </>
        );
    }
}


export default Books;