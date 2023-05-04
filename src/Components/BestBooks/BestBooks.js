import React from 'react';
import axios from 'axios';
// import bookImg from '../../book.png';
import '../../App.css';
// import CreateBook from '../CreateBook.js';
import Books from '../Books';

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
                books: [...this.state.books, createdBook.data],
            });

        } catch (error) {
            console.log('we have an error: ', error.response.data);
        }
    }


    // Delete books
    deleteBooks = async (id) => {
        console.log('proof of life',)
        try {
            let url = `${SERVER}/books/${id}`;
            await axios.delete(url);

            let updateBooks = this.state.books.filter(book => book._id !== id);
            this.setState({
                books: updateBooks
            })
        } catch (error) {
            //   console.log("there's an error: ", error.response.data);

        }
    };

    updateBooks = async (bookToUpdate) => {
        console.log('function in Update', bookToUpdate._id);
        try {
            let updateURL = `${SERVER}/books/${bookToUpdate._id}`;
            let newUpdatedBook = await axios.put(updateURL, bookToUpdate);
            let updatedBookArray = this.state.books.map(existingBook => {
                return existingBook._id === bookToUpdate._id
                    ? newUpdatedBook.data
                    : existingBook;
            });
            this.setState({
                books: updatedBookArray
            });
        } catch (error) { }
    }



    componentDidMount() {
        this.getBooks();
    }



    render() {
        console.log(this.state.books);
        // return console.log('Yerrrrr', book.title);

        return (
            <>
                <Books
                    books={this.state.books}
                    deleteBooks={this.deleteBooks}
                    handleBookSubmit={this.handleBookSubmit}
                    updateBooks={this.updateBooks} />
            </>
        )
    }
}





export default BestBooks;