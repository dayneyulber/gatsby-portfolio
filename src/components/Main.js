import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
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
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
            aliquam facilisis ante interdum congue. Integer mollis, nisl amet
            convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
            magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
            By the way, check out my <a href="#work">awesome work</a>.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
            libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
            dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In non lorem sit amet elit
            placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.
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
            <img src={pic02} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
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
                  height: 90,
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
                  height: 90,
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
                  height: 90,
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
                  height: 90,
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
                  height: 90,
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
                  height: 90,
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
                  height: 90,
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
                  height: 90,
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
                  height: 90,
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
                  height: 90,
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
                  height: 90,
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
                  height: 90,
                }}
              />
            </div>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
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
              <a href="https://codebushi.com" className="icon fa-linkedin">
                <span className="label">linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
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
