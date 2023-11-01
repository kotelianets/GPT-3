import './About.css';
import bottomRight from '../../assets/about bottom right blur.png';
import topLeft from '../../assets/about top left blur.png';

const About = () => {
  return (
    <div className="about">
      <div className="whatisGPT">
        <div className="whatisGPT__heading">What is GPT-3 </div>
        <div className="whatisGPT__paragraph">
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own. Connection
          has put impossible own apartments boisterous. At jointure ladyship an
          insisted so humanity he. Friendly bachelor entrance to on by.
        </div>
      </div>
      <div className="gptPossibilities">
        <div className="gptPossibilities__heading">
          The possibilities are beyond your imagination
        </div>
        <div className="gptPossibilities__explore">Explore The Library</div>
      </div>
      <div className="gptOptions">
        <div className="gptOptions__chatbot">
          <div className="gptOptions__chatbot-heading">Chatbots</div>
          <div className="gptOptions__chatbot-paragraph">
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought.
          </div>
        </div>
        <div className="gptOptions__kb">
          <div className="gptOptions__chatbot-heading">Knowledgebase</div>
          <div className="gptOptions__chatbot-paragraph">
            At jointure ladyship an insisted so humanity he. Friendly bachelor
            entrance to on by. As put impossible own apartments b
          </div>
        </div>
        <div className="gptOptions__education">
          <div className="gptOptions__chatbot-heading">Education</div>
          <div className="gptOptions__chatbot-paragraph">
            At jointure ladyship an insisted so humanity he. Friendly bachelor
            entrance to on by. As put impossible own apartments b
          </div>
        </div>
      </div>
      <div className="about__blur-Topleft">
        <img src={topLeft} alt="blur"></img>
      </div>
      <div className="about__blur-bottomRight">
        <img src={bottomRight} alt="blur"></img>
      </div>
    </div>
  );
};

export default About;
