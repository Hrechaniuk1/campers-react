import { useOutletContext } from 'react-router-dom';

import css from './Features.module.css'
import Icon from '../Icon'

function Futures() {

    const { data } = useOutletContext();

      let form

      switch (data.form) {
        case 'alcove':
          form = 'Alcove';
          break;
        case 'fullyIntegrated':
          form = 'Fully integrated';
          break;
        case 'van':
          form = 'Van';
          break;
      }


      const details = {
        form: data.form || 'Unknown',
        length: parseFloat(data.length) || 0,
        width: parseFloat(data.width) || 0,
        height: parseFloat(data.height) || 0,
        tank: parseFloat(data.tank) || 0,
        consumption: data.consumption || 0,
      }; 

    return (
        <div className={css.futures}>
            <div className={css.futureContainer}>
            <ul className={css.futureList}>
                {data?.transmission === 'automatic' ? <li className={css.futureBox}><Icon cl={css.iconFuture} id='icon-diagram' width={20} height={15} ></Icon>Automatic</li> : <></>}
                {data?.AC ? <li className={css.futureBox}><Icon cl={css.iconFuture} id='icon-wind' width={20} height={17} ></Icon>AC</li> : <></>}
                <li className={css.futureBox}><Icon cl={css.iconFuture} id='icon-gas' width={20} height={20} ></Icon>Petrol</li>
                {data?.kitchen ? <li className={css.futureBox}><Icon cl={css.iconFuture} id='icon-cup' width={20} height={13} ></Icon>Kitchen</li> : <></>}
                {data?.radio ? <li className={css.futureBox}><Icon cl={css.iconFuture} id='icon-radio' width={19} height={17} ></Icon>Radio</li> : <></>}
                {data?.bathroom ? <li className={css.futureBox}><Icon cl={css.iconFuture} id='icon-droplet' width={15} height={20} ></Icon>Bathroom</li> : <></>}
                {data?.TV ? <li className={css.futureBox}><Icon cl={css.iconFuture} id='icon-tv' width={15} height={20} ></Icon>TV</li> : <></>}
                <li className={css.futureBox}><Icon cl={css.iconFuture} id='icon-people' width={20} height={15} ></Icon>2 adults</li>
            </ul>
            <div>
                <p className={css.title}>Vehicle details</p>
                <ul className={css.detailsList}>
                    <li className={css.detailBox}>
                        <p>Form</p>
                        <p>{form}</p>
                        </li>
                        <li className={css.detailBox}> 
                        <p>Length</p>
                        <p>{details.length} m</p>
                        </li>
                        <li className={css.detailBox}>
                        <p>Width</p>
                        <p>{details.width} m</p>
                        </li>
                        <li className={css.detailBox}>
                        <p>Height</p>
                        <p>{details.height} m</p>
                        </li>
                        <li className={css.detailBox}>
                        <p>Tank</p>
                        <p>{details.tank} l</p>
                        </li>
                        <li className={css.detailBox} >
                        <p>Consumption</p>
                        <p>{details.consumption}</p>
                         </li>
                </ul>
            </div>
            </div>
        </div>
    )

}

export default Futures