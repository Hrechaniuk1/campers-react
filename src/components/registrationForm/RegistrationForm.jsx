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
            <Form className={css.form}>
                <h3 className={css.title}>Book your campervan now</h3>
                <p className={css.description}>Stay connected! We are always ready to help you.</p>
                <div className={css.inputBox}>
                <Field className={css.input} name='name' placeholder='Name*'></Field>
                <Field className={css.input} name='email' placeholder='Email*'></Field>
                <Field className={css.input} name='bookingDate' placeholder='Booking date*'></Field>
                <Field className={css.comment} name='comment' as='textarea' placeholder='Comment'></Field>
                </div>
                <button className={css.btn} type='submit' >Send</button>
            </Form>
        </Formik>
    )

}

export default RegistrationForm
