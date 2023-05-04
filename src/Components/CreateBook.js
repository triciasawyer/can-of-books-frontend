import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import '../App.css';

class CreateBook extends React.Component {


    render() {

        return (
            <Container className='Form'>
                <Form onSubmit={this.props.handleBookSubmit}>
                    <Form.Group controlId='title'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type='text' />
                    </Form.Group>
                    <Form.Group controlId='description'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type='text' />
                    </Form.Group>
                    <Form.Group controlId='status'>
                        <Form.Check type='checkbox' label='status' />
                    </Form.Group>
                    <Button type='submit'>Add Book</Button>
                </Form>
            </Container>


        )
    }



}

export default CreateBook;