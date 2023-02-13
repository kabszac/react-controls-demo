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
    const radioOptions = [
        { key: 'Option 1', value: 'rOption1' },
        { key: 'Option 2', value: 'rOption2' },
        { key: 'Option 3', value: 'rOption3' }
    ]
    const checkboxOptions = [
        { key: 'Option 1', value: 'cOption1' },
        { key: 'Option 2', value: 'cOption2' },
        { key: 'Option 3', value: 'cOption3' }
    ]
    const initialValues = {
        email:'',
        textArea: '',
        selectOption:'',
        radioOption:'',
        checkboxOption:[],
        birthDate:null
    }
    const validationSchema = Yup.object({
        email:Yup.string().required('Required!'),
        textArea: Yup.string().required('Required!'),
        selectOption:Yup.string().required('Required!'),
        radioOption:Yup.string().required('Required!'),
        checkboxOption:Yup.array().required('Required!'),
        birthDate:Yup.date().required('Required!').nullable()
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
                            <FormikControl 
                                control='radio' 
                                name='radioOption' 
                                label='Radio topic'
                                options={radioOptions}
                            />
                            <FormikControl 
                                control='checkbox' 
                                name='checkboxOption' 
                                label='Checkbox topics'
                                options={checkboxOptions}
                            />
                            <FormikControl
                                control='date'
                                label='Pick a date'
                                name='birthDate'
                            />
                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }

        </Formik>
    );
}

export default FormikContainer;