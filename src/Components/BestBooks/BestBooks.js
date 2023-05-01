import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

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

        let allBooks = this.state.books.map((book, index) => {
            // return console.log('Yerrrrr', book.title);
            return (
            // <Carousel.Item key={index}>

            //     <Carousel.Caption>
                    <h3>Title: {book.title} </h3>
            //     </Carousel.Caption>
            // </Carousel.Item>
            );
        });


// console.log('ALLLLLLL', allBooks);
        return (
            <>
                {
                    this.state.books.length > 0 && 

                <Carousel>
                  {allBooks}
                </Carousel>
                }
            </>
        )
    }
}




export default BestBooks;