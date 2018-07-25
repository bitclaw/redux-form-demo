import React, { Component } from 'react';
import { Field,FieldArray, reduxForm } from 'redux-form';
import {customInput,customSelect,discounts} from "./fields";
import capitalize from 'capitalize'

import {
    required,
    minLength,
    maxLength,
    matchesPassword,
    asyncValidate,
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
                    normalize={capitalize}
                />

                <Field
                    name="lastname"
                    component={customInput}
                    label="Last Name"
                    type="text"
                    validate={[required]}
                    normalize={capitalize}
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

                <FieldArray
                    name="discountCodes"
                    component={discounts}
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
    asyncValidate,
    asyncBlurFields: ['username']
})(RegisterForm);

export default RegisterForm;
