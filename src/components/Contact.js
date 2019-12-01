import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contact(props) {
  const data = props.resumeData

  const envelopeIcon = {
    paddingRight: '10px',
    fontSize: '72px',
    lineHeight: '72px',
    textAlign: 'left',
    color: '#ebeeee'
  }

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
          <FontAwesomeIcon style={envelopeIcon} icon={faEnvelope} />
        </div>

        <div className="ten columns">
          <p className="lead">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. 
          </p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form action="" method="post" id="contactForm" name="contactForm">
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input type="text" size="35" id="contactName" name="contactName" />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input type="text" size="35" id="contactEmail" name="contactEmail" />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea cols="50" rows="10" id="contactMessage" name="contactMessage" />
              </div>

              <div>
                <button className="submit">Submit</button>
                <span id="image-loader">
                  <img alt="Loading" src="./assets/images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form>

          <div id="message-warning"> Error boy</div>

          <div id="message-success">
            <i className="fa fa-check" />Your message was sent, thank you!<br />
          </div>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
              {data.name}<br />
              {data.address}<br />
              <span>{data.email}</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
