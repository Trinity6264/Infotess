import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const Dues = () => {
    return (
        <div className='section dues'>
            <Container>
                <h5 className='mb-5'>Kindly know at the moment only <b>mtn users </b> can use it </h5>
                <Form style={{ maxWidth: '500px' }}>
                    <Form.Group className='mt-3'>
                        <Form.Label htmlFor='index'>Index No. / Student ID</Form.Label>
                        <Form.Control id='index'></Form.Control>
                        <Form.Text>Please kindly use one student ID / Index No. for all the payments</Form.Text>
                    </Form.Group>
                    <Form.Group className='mt-3'>
                        <Form.Label htmlFor='r-index'>Repeat Index No. / Student ID</Form.Label>
                        <Form.Control id='r-index'></Form.Control>
                    </Form.Group>
                    <Form.Group className='mt-3'>
                        <Form.Label htmlFor='fullName'>Student Fullname</Form.Label>
                        <Form.Control id='fullName'></Form.Control>
                    </Form.Group>
                    <Form.Group className='mt-3'>
                        <Form.Label htmlFor='amt'>Student Level</Form.Label>
                        <Form.Select value={'100'} onChange={ ()=> console.log('100')}>
                            <option value="100">Level 100</option>
                            <option value="200">Level 200</option>
                            <option value="300">Level 300</option>
                            <option value="400">Level 400</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className='mt-3'>
                        <Form.Label htmlFor='phone'>Phone number</Form.Label>
                        <Form.Control id='phone'></Form.Control>
                    </Form.Group>
                    <Form.Group className='mt-3'>
                        <Form.Label htmlFor='amt'>Amount</Form.Label>
                        <Form.Select >
                            <option value="50">GH₵ 50</option>
                            <option value="30">GH₵ 30</option>
                            <option value="20">GH₵ 20</option>
                        </Form.Select>
                    </Form.Group>
                    <Button variant='success' className='mt-3'>Pay Dues</Button>
                </Form>
            </Container>
        </div>
    )
}

export default Dues