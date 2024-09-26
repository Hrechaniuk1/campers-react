import css from './SearchForm.module.css'
import { Form, Field, Formik } from 'formik'


function SearchForm({onSubmit}) {

    const initialValues = {
        location: '', 
        equipment: [], 
        type: '' 
    };

    function submitHandler(values) {
        // onSubmit(values)
    }

    return (
        <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}

        >
            <Form>
                <label htmlFor="location">Location</label>
                <Field id='location'></Field>
                <p>Filters</p>
                <div>
                    <h4>Vehicle equipment</h4>
                    <label>
              <Field
                type="checkbox"
                name="equipment"
                value="AC"
              />
              AC
            </label>
            <label>
              <Field
                type="checkbox"
                name="equipment"
                value="Automatic"
              />
              Automatic
            </label>
            <label>
              <Field
                type="checkbox"
                name="equipment"
                value="Kitchen"
              />
              Kitchen
            </label>
            <label>
              <Field
                type="checkbox"
                name="equipment"
                value="TV"
              />
              TV
            </label>
            <label>
              <Field
                type="checkbox"
                name="equipment"
                value="Bathroom"
              />
              Bathroom
            </label>
                </div>
                <div>
                    <h4>Vehicle type</h4>
                    <label>
              <Field type="radio" name="type" value="can" />
              Van
            </label>
            <label>
              <Field type="radio" name="type" value="fullyIntegrated" />
              Fully Integrated
            </label>
            <label>
              <Field type="radio" name="type" value="alcove" />
              Alcove
            </label>
                </div>
                <button type='submit'>Search</button>
            </Form>
        </Formik>
    )

}

export default SearchForm