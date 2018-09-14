import React from 'react';
import {  Button, Form, FormGroup, Label, Input } from 'reactstrap';



const Forms  = (props) => {


    return (
        <Form inline onSubmit={props.submit}>
            <FormGroup binding={this} className="form-left">

                <Label>
                    <Input type="text" value={props.name} onChange={props.namechange}/>
                    <Input type="select" value={props.platformvalue} onChange={props.platformchange}>
                        <option value="pc">PC</option>
                        <option value="xbox">XBOX</option>
                        <option value="ps4">PS4</option>
                    </Input>
                    <Input type="select" value={props.seasonvalue} onChange={props.seasonchange}>
                        <option value="p2">SOLO</option>
                        <option value="p10">DUOS</option>
                        <option value="p9">SQUADS</option>
                    </Input>
                    <Button className="submit-button">Submit</Button>
                </Label>
            </FormGroup>
        </Form>
    )

};

export default Forms;