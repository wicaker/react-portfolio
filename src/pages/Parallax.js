import React from 'react';
import Typing from 'react-typing-animation';

const MyComponent = () => (  
    <div className="black container">
    <div class="row section" style={{height:'50vh'}}>
        <div class="col s12 valign-wrapper"style={{height:'200%'}} >
          <div class="valign white-text">
            <Typing speed={500} loop={true} >
              <font face="Courier New"><h1><b>I Gede</b> <span className='yellow-text'>Wicaksana</span></h1></font>
              <Typing.Speed ms={200} />
              <font face="Courier"><h3><span className='red-text'>Developer</span> | <span className='green-text'>Programmer</span> | <span className='purple-text'>Entrepreneur</span></h3></font>
            </Typing>
            <a href="https://twitter.com/igedewicaksana"><i className="fab fa-twitter fa-3x"></i></a>
            <a href="https://www.facebook.com/agus.wicaksana.9"><i className="fab fa-facebook fa-3x social-media-margin-left"></i></a>
            <a href="https://www.linkedin.com/in/i-gede-wicaksana-761a69152/"><i className="fab fa-linkedin fa-3x social-media-margin-left"></i></a>
            <a href="https://github.com/wicaker"><i className="fab fa-github fa-3x social-media-margin-left"></i></a>
          </div>
        </div>
      </div>
    </div>
);
export default MyComponent;