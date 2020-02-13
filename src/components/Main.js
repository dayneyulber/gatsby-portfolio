import PropTypes from 'prop-types'
import React from 'react'
import './Main.css'
import pic01 from '../images/about-me-pic.png'
import pic02 from '../images/pic02.jpg'
import DevIcon1 from '../images/react-icon.svg'
import DevIcon2 from '../images/javascript-icon.svg'
import DevIcon3 from '../images/jquery-icon.svg'
import DevIcon4 from '../images/nodejs-icon.svg'
import DevIcon5 from '../images/css3-icon.svg'
import DevIcon6 from '../images/express-icon.svg'
import DevIcon7 from '../images/mysql-icon.svg'
import DevIcon8 from '../images/mongodb-icon.svg'
import DevIcon9 from '../images/npm-icon.svg'
import DevIcon10 from '../images/sass-icon.svg'
import DevIcon11 from '../images/html5-icon.svg'
import DevIcon12 from '../images/git-icon.svg'
import SoundStalker from '../images/SoundStalker.png'
import DevNet from '../images/DevNet.png'
import Odunsi from '../images/OdunsiPortfolio.png'



class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            I'm a full stack web developer with a background in biology
            and business. Originally from Houston, Texas, I moved to Austin to
            pursue an undergraduate degree at the University of Texas. Upon
            completing my Bachelor's, I began learning to program and went on to
            finish the university's coding bootcamp thereafter. This ultimately
            jumpstarted my newfound passion for creating and designing memorable user experiences, bringing aesthetic pleasure and functionality together.
          </p>
          <p>
            When I'm not writing code, you can expect to find me in my room
            producing music or spending time with my family and enjoying the outdoors. I am an avid music connosieur, a fitness lover,
            and a tech enthusiast.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={SoundStalker} alt="" />
          </span>
          <div className="title-github">
            <h3>Sound Stalker</h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/dayneyulber/Sound-Stalker"
              className="icon fa-github"
            >
              <span className="label">GitHub</span>
            </a>
          </div>
          <p>
            As someone who constantly seeks out and shares new music, it is often an issue keeping up with my favorite artists. Developed by incorporating the TasteDive, YouTube, and TicketMaster APIs, Sound Stalker addresses such difficulties through one simple search. Just enter your artist in question and information such as related artists and upcoming tour dates are generated and displayed. 
          </p>
          <span className="image main">
            <img src={DevNet} alt="" />
          </span>
          <div className="title-github">
            <h3>DevNet</h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/dayneyulber"
              className="icon fa-github"
            >
              <span className="label">GitHub</span>
            </a>
          </div>
          <p>
            DevNet is a social networking platform developed specifically for employers/employees and future professionals in the tech industry. Curated with a user registration and login system, DevNet serves as a commonplace for individuals to connect with fellow developers and recruiters alike. 
          </p>
          <span className="image main">
            <img src={Odunsi} alt="" />
          </span>
          <div className="title-github">
            <h3>Odunsi's Portfolio</h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/dayneyulber/odunsi-portfolio"
              className="icon fa-github"
            >
              <span className="label">GitHub</span>
            </a>
          </div>
          <p>
            This is a portfolio made for a talented photographer using React's GatsbyJS framework. 
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Tech + Skills</h2>
          <div className="skills-set">
            <div className="skills-icon">
              <p id="skills-title">JavaScript</p>
              <img
                src={DevIcon2}
                alt="javascript-icon"
                style={{
                  width: 90,
                  height: 75,
                }}
              />
            </div>
            <div className="skills-icon">
              <p id="skills-title">React</p>
              <img
                src={DevIcon1}
                alt="react-icon"
                style={{
                  width: 90,
                  height: 75,
                }}
              />
            </div>
            <div className="skills-icon">
              <p id="skills-title">Node.js</p>
              <img
                src={DevIcon4}
                alt="nodejs-icon"
                style={{
                  width: 90,
                  height: 75,
                }}
              />
            </div>
            <div className="skills-icon">
              <p id="skills-title">jQuery</p>
              <img
                src={DevIcon3}
                alt="jquery-icon"
                style={{
                  width: 90,
                  height: 75,
                }}
              />
            </div>
            <div className="skills-icon">
              <p id="skills-title">Express</p>
              <img
                src={DevIcon6}
                alt="express-icon"
                style={{
                  width: 90,
                  height: 75,
                }}
              />
            </div>
            <div className="skills-icon">
              <p id="skills-title">MySQL</p>
              <img
                src={DevIcon7}
                alt="mysql-icon"
                style={{
                  width: 90,
                  height: 75,
                }}
              />
            </div>
            <div className="skills-icon">
              <p id="skills-title">MongoDB</p>
              <img
                src={DevIcon8}
                alt="mongodb-icon"
                style={{
                  width: 90,
                  height: 75,
                }}
              />
            </div>
            <div className="skills-icon">
              <p id="skills-title">NPM</p>
              <img
                src={DevIcon9}
                alt="npm-icon"
                style={{
                  width: 90,
                  height: 75,
                }}
              />
            </div>
            <div className="skills-icon">
              <p id="skills-title">SASS</p>
              <img
                src={DevIcon10}
                alt="sass-icon"
                style={{
                  width: 90,
                  height: 75,
                }}
              />
            </div>
            <div className="skills-icon">
              <p id="skills-title">CSS3</p>
              <img
                src={DevIcon5}
                alt="css3-icon"
                style={{
                  width: 90,
                  height: 75,
                }}
              />
            </div>
            <div className="skills-icon">
              <p id="skills-title">HTML5</p>
              <img
                src={DevIcon11}
                alt="html5-icon"
                style={{
                  width: 90,
                  height: 75,
                }}
              />
            </div>
            <div className="skills-icon">
              <p id="skills-title">Git + Github</p>
              <img
                src={DevIcon12}
                alt="git-icon"
                style={{
                  width: 90,
                  height: 75,
                }}
              />
            </div>
          </div>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/dayneberonque/"
                className="icon fa-linkedin"
              >
                <span className="label">linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/dayneyulber"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
