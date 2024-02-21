import asr from '../assets/asr.svg';
import refresh from  '../assets/refresh.svg';
import '../css/Header.css';

const Header = _ =>{

  return(
    <header className='header'>
      <span className='refresh__button__container'>
        <img src={refresh} alt='Page Refresh Button'/>
      </span>
      
      <p>Wednesday 11 Shaaban 1445, <span>21 February 2024</span></p>
      
      <span className='config__button__container'>
        <img src={asr} alt='Asr Icon'/>
        </span>

    </header>
  )
}

export default Header;
