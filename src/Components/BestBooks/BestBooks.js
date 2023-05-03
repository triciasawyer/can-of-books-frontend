import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import bookImg from '../../book.png';
import '../../App.css';
import CreateBook from '../CreateBook.js';
import { Outlet } from 'react-router-dom';
let SERVER = process.env.REACT_APP_SERVER;


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


    //handle book submit
    handleBookSubmit = async (event) => {
        event.preventDefault();
        let newBook = {
          title: event.target.title.value,
          description: event.target.description.value,
          status: event.target.status.checked,
        }
        console.log(newBook);
        this.postBook(newBook)
      };


      postBook = async (newBookObject) => {
        try {
          let url = `${SERVER}/books`;
          let createdBook = await axios.post(url, newBookObject);
        //   console.log("🚀 createdBook:", createdBook);
        
          this.setState({
            books:[...this.state.books, createdBook.data],
          });
          
        } catch (error) {
          console.log('we have an error: ', error.response.data);
        }
        }


//Delete books
// deleteBooks = async (id) => {
//     try {
//       let url = `${SERVER}/books/${id}`;
//       await axios.delete(url);

//       let updateBooks = this.state.books.filter(book => book._id !== id);
//       this.setState({
//         cats: updateBooks
//       })
//     } catch (error) {
//     //   console.log("there's an error: ", error.response.data);
  
//     }
//   };



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
                       <CreateBook handleBookSubmit={this.handleBookSubmit} />  
                       <Outlet />         
            </>

        )
                        
    }
}





export default BestBooks;