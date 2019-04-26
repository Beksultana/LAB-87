import React from 'react';
import {Col, FormFeedback, FormGroup, Input, Label} from "reactstrap";
import PropTypes from 'prop-types';

const FormElement = (props) => {
    return (
        <FormGroup row>
            <Label sm={2} for={props.propertyName}>{props.title}</Label>
            <Col sm={10}>
                <Input
                    type={props.type}
                    name={props.propertyName} id={props.propertyName}
                    invalid={!!props.error}
                    value={props.value}
                    onChange={props.onChange}
                    required={props.required}
                    placeholder={props.placeholder}
                    autoComplete={props.autoComplete}
                />
                {props.error && (
                    <FormFeedback>
                        {props.error}
                    </FormFeedback>
                )}

            </Col>
        </FormGroup>
    );
};

FormElement.propTypes = {
    propertyName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    error: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    placeholder: PropTypes.string,
    autocomplete: PropTypes.string
};

export default FormElement;