import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from './TextError';

const TextArea = (props) => {
    const {label, name, ...rest} = props
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <Field as='textarea' name={name} id={name} {...rest}/>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    );
};

export default TextArea;