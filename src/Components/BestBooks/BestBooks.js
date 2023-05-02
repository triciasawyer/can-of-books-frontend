import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import bookImg from '../../book.png';
import '../../App.css';


class BestBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],

        };
    }



    getBooks = async () => {
        try {
            let results = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
            this.setState({
                books: results.data
            })
        } catch (error) {
            console.log('we have an error: ', error.response.data)
        }
    }


    componentDidMount() {
        this.getBooks();
    }


    render() {
        console.log(this.state.books);
        // return console.log('Yerrrrr', book.title);

        return (
            <>
                {this.state.books.length ? (
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
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                )   
                       : <h3 className='no-books-found'> No Books Found</h3> }                
            </>

        )
                        
    }
}





export default BestBooks;