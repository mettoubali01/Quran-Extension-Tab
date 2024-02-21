import play from '../assets/play.svg';
import '../css/Main.css';
import Aside from './Aside';

const Main = _ => {
  return(
    <div className="quran__prayer__time__container">
      
      <div className="quran__container">
        
        <div className="clock">
          <span className='clock__time'>04:29</span> 
          <span className="clock__period">PM</span>
        </div>
          
        <p className="opening__verse">
          بِسْمِ ٱللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ 
        </p>

        <div className='verse_content'>
          <p className="verse__text">
            وَإِذ أَخَذنا ميثٰقَكُم وَرَفَعنا فَوقَكُمُ
            الطّورَ خُذوا ما ءاتَينٰكُم بِقُوَّةٍ وَاسمَعوا ۖ
            قالوا سَمِعنا وَعَصَينا وَأُشرِبوا فى قُلوبِهِمُ
            العِجلَ بِكُفرِهِم ۚ قُل بِئسَما يَأمُرُكُم بِهِ إيمٰنُكُم
            إِن كُنتُم مُؤمِنينَ
          </p>
          <p className="verse__detail">
            سُورَةُ البَقَرَةِ-93
          </p>
        </div>

        <div className='translation__content'>
          <h2 className='translate__header'>
            Aya Translation
          </h2>

          <p className='translation__text'>
            وَإِذ أَخَذنا ميثٰقَكُم وَرَفَعنا فَوقَكُمُ
            الطّورَ خُذوا ما ءاتَينٰكُم بِقُوَّةٍ وَاسمَعوا ۖ
            قالوا سَمِعنا وَعَصَينا وَأُشرِبوا فى قُلوبِهِمُ
            العِجلَ بِكُفرِهِم ۚ قُل بِئسَما يَأمُرُكُم بِهِ إيمٰنُكُم
            إِن كُنتُم مُؤمِنينَ
          </p>
        </div>
        
        <div className="audio_player">
          <img src={play} alt="Play" />
        
        </div>
      
      </div>

      <Aside />

    </div>
  );
}

export default Main;