import homepageImg from "../../assets/images/homepage-img.jpg"
import './HomepageImage.css';

const HomepageImage = () => {
    return (
        <div className="homepage-image-container">
          <div className="homepage-text">Commprendre le changement climatique</div>
          <img src={homepageImg} alt='homepage-img' className="homepage-img"/>
        </div>
        
    );
  };
  
export default HomepageImage;