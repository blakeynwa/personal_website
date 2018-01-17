import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Image from 'react-bootstrap/lib/Image';
import mtrlz from '../images/materialize.png';
import ruby from '../images/ruby.png';
import rails from '../images/rails.png';
import html5 from '../images/html5.png';
import jquery from '../images/jquery.png';
import rspec from '../images/rspec.png';
import './Tiles.css';

const Tiles = () => {
  return (
    <div className="tech-tiles">
      <div>
        <Image className="mtrlz-tile" src={mtrlz} width={80} height={80}/>
        <p>Materialize CSS</p>
      </div>
      <div>
        <Image className="ruby-tile" src={ruby} width={80} height={80}/>
        <p>Ruby</p>
      </div>
      <div>
        <Image className="rails-tile" src={rails} width={80} height={80}/>
        <p>Ruby on Rails</p>
      </div>
      <div>
        <Image className="html5-tile" src={html5} width={80} height={80}/>
        <p>HTML 5</p>
      </div>
      <div>
        <Image className="jquery-tile" src={jquery} width={80} height={80}/>
        <p>jquery</p>
      </div>
      <div>
        <Image className="rspec-tile" src={rspec} width={80} height={80}/>
        <p>Rspec</p>
      </div>
    </div>
  )
};

export default Tiles