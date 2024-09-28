import css from './SearchForm.module.css'
import { Form, Field, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux';

import { changeFilter, changePage } from '../../redux/slice';
import { selectFilters } from '../../redux/selectors';


function SearchForm() {

  const dispatch = useDispatch()
  const filters = useSelector(selectFilters)

    const initialValues = {
        location: filters.location, 
        equipment: filters.equipment, 
        form: filters.form 
    };

    function submitHandler(values) {
        dispatch(changePage(1))
        dispatch(changeFilter({...values, location: values.location.trim()}))
    }

    // function resetHandler() {
    //   dispatch(changeFilter({location: '', equipment: [], form: ''}))
    //   dispatch(changePage(1))
    // }
    

    return (
        <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        enableReinitialize
        >
            <Form>
                <label htmlFor="location">Location</label>
                <Field id='location' name='location'></Field>
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
                {/* <button onClick={resetHandler} type='button' >Reset</button> */}
            </Form>
        </Formik>
    )

}

export default SearchForm