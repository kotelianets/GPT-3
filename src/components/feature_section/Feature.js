import featureImage from '../../assets/Feature Image.png';
import './Feature.css';

const Feature = () => {
  return (
    <div className="feature">
      <div className="feature-image">
        <img src={featureImage} alt="feature" className='feature-image__png'></img>
      </div>
      <div className="feature-content">
        <div className="feature-content__header-p">
          Request Early Access to Get Started
        </div>
        <div className="feature-content__header-h1">
          The possibilities are beyond your imagination
        </div>
        <div className="feature-content__header-desc">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </div>
        <div className="feature-content__header-footer">
          Request Early Access to Get Started
        </div>
      </div>
    </div>
  );
};

export default Feature;
