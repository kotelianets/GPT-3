import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import google from '../../assets/google.png';
import slack from '../../assets/slack.png';
import atlasian from '../../assets/atlassian.png';
import dropbox from '../../assets/dropbox.png';
import shopify from '../../assets/shopify.png';
import './Header.css';

const Header = () => {
  return (
    <div className="header-base">
      <div className="header container">
        <div className="header__content">
          <h1 className="header__heading">
            Let’s Build Something amazing with GPT-3 OpenAI
          </h1>
          <p className="header__paragraph">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <form className="header__form">
            <input
              type="email"
              placeholder="Your Email Address"
              className="header__email"
            />
            <button type="submit" className="header__form-button">
              Get Started
            </button>
          </form>
          <div className="header__people">
            <img src={people} alt="people"></img>
            <div className="header__people-content">
              1,600 people requested access a visit in the last 24 hours
            </div>
          </div>
        </div>
        <div className="header__illustration">
          <img src={ai} alt="ai" className="header__ai"></img>
        </div>
      </div>
      <div className="companiesLogo companiesLogo-container">
        <div>
          <img src={google} alt="google"></img>
        </div>
        <div>
          <img src={slack} alt="slack"></img>
        </div>
        <div>
          <img src={atlasian} alt="atlasian"></img>
        </div>
        <div>
          <img src={dropbox} alt="dropbox"></img>
        </div>
        <div>
          <img src={shopify} alt="shopify"></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
