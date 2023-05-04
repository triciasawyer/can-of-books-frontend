import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';


class UpdateBookForm extends React.Component {


    handleSubmit = (event) => {
        event.preventDefault();

        let bookToUpdate = {
            title: event.target.title.value || this.props.book.title,
            description: event.target.description.value || this.props.book.description,
            status: event.target.status.checked || this.props.book.status,
            _id: this.props.book._id,
            __v: this.props.book.__v
        };
        console.log('submitted???', bookToUpdate);
        this.props.updateBooks(bookToUpdate);
    };


    render() {
        return (
            <>
                <Container className='form-update'>
                    <Form onSubmit={this.props.handleSubmit}>
                        <Form.Group controlId='title'>
                            <Form.Label>Title</Form.Label>
                            <Form.Control type='text' placeholder={this.props.book.title} />
                        </Form.Group>
                        <Form.Group controlId='description'>
                            <Form.Label>Description</Form.Label>
                            <Form.Control type='text' placeholder={this.props.book.description} />
                        </Form.Group>
                        <Form.Group controlId='status'>
                            <Form.Check type='checkbox' label='status' defaultChecked={this.props.book.status} />
                        </Form.Group>
                        <Button type='submit'>Update Book</Button>
                    </Form>
                </Container>
            </>
        );
    }

}


export default UpdateBookForm;