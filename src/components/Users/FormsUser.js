import React from 'react'
import { Card, CardBody, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import './FormsUser.css'

const FormsUser = ({ title, textButton, onSubmit, onInputChange }) => {
    return (
        <main role="main">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">{title}</h1>
            </div>
            <Card>
                <CardBody>
                    <Form onSubmit={onSubmit}>
                        <FormGroup row>
                            <Label for="inputName" sm={2}>  Name</Label>
                            <Col sm={4}>
                                <Input type="text" name="name" id="inputName" onChange={onInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                        <Label for="inputEmail" sm={2}>E-mail Address</Label>
                        <Col sm={4}>
                            <Input type="email" name="email" id="inputEmail" onChange={onInputChange} />
                        </Col>
                        </FormGroup>
                        <FormGroup row>
                        <Label for="inputPassword" sm={2}>Password</Label>
                        <Col sm={4}>
                            <Input type="password" name="password" id="inputPassword" onChange={onInputChange} />
                        </Col>
                        </FormGroup>
                        <FormGroup row>
                        <Col sm={{ size: 10, offset: 2 }}>
                            <Button color="success" outline>{textButton}</Button>
                        </Col>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        </main>
    )
}

export default FormsUser