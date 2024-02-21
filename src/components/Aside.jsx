import '../css/Aside.css';
import fajr from '../assets/fajr.svg';
import dhuhr from '../assets/dhuhr.svg';
import asr from '../assets/asr.svg';
import maghrib from '../assets/maghrib.svg';
import isha from '../assets/isha.svg';

const Aside = _ => {
  return (
    <div className='prayer__time_container'>
      <ul>
        <li>
          <span>
            <img src={fajr} alt='Fajr' />
          </span>
          05:56 am
        </li>
        <li>
          <span>
            <img src={dhuhr} alt='Dhuhr'/>
          </span>
          12:57 pm
        </li>
        <li>
          <span>
            <img src={asr} alt='Asr'/>
          </span>
          03:59 pm
        </li>
        <li>
          <span>
            <img src={maghrib} alt='Maghrib' />
          </span>
          06:26 pm
        </li>
        <li>
          <span>
            <img src={isha} alt='Isha' />
          </span>
          07:56 pm
          </li>
      </ul>
    </div>
  );
}

export default Aside;