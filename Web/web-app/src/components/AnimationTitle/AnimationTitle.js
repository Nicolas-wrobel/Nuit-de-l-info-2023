import img1 from '../../assets/images/img1.png'
import img2 from '../../assets/images/img2.png'
import img3 from '../../assets/images/img3.png'
import img4 from '../../assets/images/img4.png'
import img5 from '../../assets/images/img5.png'
import img6 from '../../assets/images/img6.png'
import img7 from '../../assets/images/img7.png'
import img8 from '../../assets/images/img8.png'
import './AnimationTitle.css'

const AnimationTitle = () => {
    return (
      <div>
        <div className='title'>Face au changement climatique : le vrai du faux</div>
        <div className="horizontal-scroll-container">
            <div className='images'>    
                <img src={img1} alt="icon-img" className="animated-image animation" />
                <img src={img2} alt="icon-img" className="animated-image " />
                <img src={img3} alt="icon-img" className="animated-image" />
                <img src={img4} alt="icon-img" className="animated-image animation" />
                <img src={img5} alt="icon-img" className="animated-image animation" />
                <img src={img6} alt="icon-img" className="animated-image" />
                <img src={img7} alt="icon-img" className="animated-image" />
                <img src={img8} alt="icon-img" className="animated-image animation" />
            </div>
        </div>
      </div>
    );
  };
  
  export default AnimationTitle;