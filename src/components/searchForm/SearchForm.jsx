import css from './SearchForm.module.css'
import { Form, Field, Formik } from 'formik'
import { useDispatch } from 'react-redux';

import { changeFilter } from '../../redux/slice';


function SearchForm() {

  const dispatch = useDispatch()

    const initialValues = {
        location: '', 
        equipment: [], 
        form: '' 
    };

    function submitHandler(values) {
        dispatch(changeFilter(values))
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
              <Field type="radio" name="form" value="can" />
              Van
            </label>
            <label>
              <Field type="radio" name="form" value="fullyIntegrated" />
              Fully Integrated
            </label>
            <label>
              <Field type="radio" name="form" value="alcove" />
              Alcove
            </label>
                </div>
                <button type='submit'>Search</button>
            </Form>
        </Formik>
    )

}

export default SearchForm