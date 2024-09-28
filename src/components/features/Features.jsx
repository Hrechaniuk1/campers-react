import { useOutletContext } from 'react-router-dom';

import css from './Features.module.css'

function Futures() {

    const { data } = useOutletContext();
    const futures = {
        transmission: data.transmission || 'N/A',
        AC: data.AC || false,
        bathroom: data.bathroom || false,
        kitchen: data.kitchen || false,
        radio: data.radio || false,
      }
      const details = {
        form: data.form || 'Unknown',
        length: data.length || 0,
        width: data.width || 0,
        height: data.height || 0,
        tank: data.tank || 0,
        consumption: data.consumption || 0,
      };

    return (
        <div>
            <ul>
                {futures.transmission ? <li><img src="" alt="" /></li> : <></>}
                {futures.AC ? <li><img src="" alt="" /></li> : <></>}
                {futures.bathroom ? <li><img src="" alt="" /></li> : <></>}
                {<futures className="k"></futures> ? <li><img src="" alt="" /></li> : <></>}
                {futures.radio ? <li><img src="" alt="" /></li> : <></>}
            </ul>
            <div>
                <p>Vehicle details</p>
                <ul>
                    <li><div>
                        <p>Form</p>
                        <p>{details.form}</p>
                        </div></li>
                        <li><div>
                        <p>Length</p>
                        <p>{details.length}</p>
                        </div></li>
                        <li><div>
                        <p>Width</p>
                        <p>{details.width}</p>
                        </div></li>
                        <li><div>
                        <p>Height</p>
                        <p>{details.height}</p>
                        </div></li>
                        <li><div>
                        <p>Tank</p>
                        <p>{details.tank}</p>
                        </div></li>
                        <li><div>
                        <p>Consumption</p>
                        <p>{details.consumption}</p>
                        </div></li>
                </ul>
            </div>
        </div>
    )

}

export default Futures