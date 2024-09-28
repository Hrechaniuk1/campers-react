import { Formik, Field, Form } from 'formik'

import css from './RegistrationForm.module.css'

function RegistrationForm(data) {

    const initial = {
        name: '',
        email: '',
        bookingDate: '',
        comment: ''
    }

    function submitHandler(values) {
        console.log(values)
    }

    return (
        <Formik
        initialValues={initial}
        onSubmit={submitHandler}
        >
            <Form>
                <Field name='name' placeholder='Name*'></Field>
                <Field name='email' placeholder='Email*'></Field>
                <Field name='bookingDate' placeholder='Booking date*'></Field>
                <Field name='comment' placeholder='Comment'></Field>
                <button type='submit' >Send</button>
            </Form>
        </Formik>
    )

}

export default RegistrationForm
