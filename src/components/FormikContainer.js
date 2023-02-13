import React from 'react';
import{Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl';


function FormikContainer(props) {
    const dropdownOptions = [
        { key: 'Select an option', value: '' },
        { key: 'Option 1', value: 'option1' },
        { key: 'Option 2', value: 'option2' },
        { key: 'Option 3', value: 'option3' }
    ]
    const initialValues = {
        email:'',
        textArea: '',
        selectOption:''
    }
    const validationSchema = Yup.object({
        email:Yup.string().required('Required!'),
        textArea: Yup.string().required('Required!'),
        selectOption:Yup.string().required('Required!')
    })
    const onSubmit = values => {
        console.log('form data', values)
    }
    return (
        <Formik 
            initialValues={initialValues} 
            validationSchema={validationSchema} 
            onSubmit={onSubmit}>
                {
                    formik => (
                        <Form>
                            <FormikControl 
                                control='input' 
                                id='email'
                                label='Email' 
                                name='email' 
                                type='text'
                            />
                            <FormikControl 
                                control='textarea'
                                id='textArea' 
                                label='TextArea' 
                                name='textArea' 
                                type='text' 
                            />
                            <FormikControl 
                                control='select' 
                                name='selectOption' 
                                id='selectOption'
                                label='Select an Option'
                                options={dropdownOptions}
                            />
                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }

        </Formik>
    );
}

export default FormikContainer;