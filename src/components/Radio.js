import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from './TextError';

const Radio = (props) => {
    const{name, label, options, ...rest} = props
    return (
        <div className='form-control'>
            <label>{label}</label>
            <Field  name={name}>
                {
                    ({field}) => {
                        console.log('field', field)
                        return options.map((option) => {
                            return (
                                <React.Fragment key={option.key}>
                                    <input 
                                        type='radio' 
                                        id={option.value} 
                                        {...field} 
                                        {...rest}
                                        value={option.value}
                                        checked={field.value === option.value}
                                    />
                                    <label htmlFor={option.value}>{option.key}</label>
                                </ React.Fragment>
                            )
                        })
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    );
};

export default Radio;