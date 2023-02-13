import React from 'react';
import{Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl';


function FormikContainer(props) {
    const initialValues = {
        email:'',
        textArea: ''
    }
    const validationSchema = Yup.object({
        email:Yup.string().required('Required!'),
        textArea: Yup.string().required('Required!')
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
                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }

        </Formik>
    );
}

export default FormikContainer;