import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {customInput,customSelect} from "./fields";
import {validate} from '../validation';

class RegisterForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>

                <Field
                    name="firstname"
                    component={customInput}
                    label="First Name"
                    type="text"
                />

                <Field
                    name="lastname"
                    component={customInput}
                    label="Last Name"
                    type="text"
                />

                <Field
                    name="username"
                    component={customInput}
                    label="Username"
                    type="text"
                />

                <Field
                    name="preference"
                    label="Preferred Formatting"
                    component={customSelect}
                />

                <Field
                    name="newsletter"
                    component={customInput}
                    label="Sign up to newsletter?"
                    type="checkbox"
                />

                <button type="submit">Submit</button>
            </form>
        );
    }
}

RegisterForm = reduxForm({
    form: 'register',
    validate
})(RegisterForm);

export default RegisterForm;
