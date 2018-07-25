import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {customInput,customSelect} from "./fields";
import {
    required,
    minLength,
    maxLength,
    matchesPassword,
} from '../validation';

import './RegisterForm.css';

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
                    validate={[required]}
                />

                <Field
                    name="lastname"
                    component={customInput}
                    label="Last Name"
                    type="text"
                    validate={[required]}
                />

                <Field
                    name="username"
                    component={customInput}
                    label="Username"
                    type="text"
                    validate={[required,minLength,maxLength]}
                />

                <Field
                    name="password"
                    component={customInput}
                    label="Password"
                    type="password"
                    validate={[required]}
                />

                <Field
                    name="confirmPassword"
                    component={customInput}
                    label="Confirm Password"
                    type="password"
                    validate={[required, matchesPassword]}
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
    form: 'register'
})(RegisterForm);

export default RegisterForm;
