import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import bookImg from '../book.png';
import CreateBook from './CreateBook.js';
import UpdateBookForm from './UpdatedBookForm';



class Books extends React.Component {

// add state to handle the form show and hide
constructor(props){
    super(props);
    this.state = {
        showUpdateForm: false
    }
}

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
                            onClick={() => this.props.deleteBooks(book._id)}>Delete Book</Button>
                    {/* update button here */}
                    <Button variant='info' onClick ={() => this.setState({showUpdateForm: true})}>Update Book</Button>
                    {/* { */}
                     this.state.showUpdateForm && 
                 <UpdateBookForm book={this.props.book} updateBooks={this.props.updateBooks}/>
                    {/* } */}
                </Carousel.Item>
            );
        });


        return (
            <>
                <Carousel id='carousel'>{books}</Carousel>
                <CreateBook handleBookSubmit={this.props.handleBookSubmit} />
                {/* <UpdateBookForm handleSubmit={this.props.handleSubmit} /> */}
            </>
        );
    }
}


export default Books;