import css from './BookForm.module.css'
import { Formik, Form, Field } from 'formik'

function BookForm() {

    return (
        <Formik>
            <Form>
                <h2>Book your campervan now</h2>
                <p>Stay connected! We are always ready to help you.</p>
                <Field placeholder='Name*'></Field>
                <Field placeholder='Email*'></Field>
                <Field placeholder='Booking day*'></Field>
                <Field type='textarea' placeholder='Comment'></Field>
                <button>Send</button>
            </Form>
        </Formik>
    )

}

export default BookForm
