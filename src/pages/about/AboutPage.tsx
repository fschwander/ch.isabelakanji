import React from 'react';
import './AboutPage.scss';
import portraitImage from '../../res/imgs/portrait_round.jpg';

export const AboutPage: React.FC = () => {

  return (
    <div className={'AboutPage'}>
      <div className={'image-container'}>
        <img src={portraitImage} alt={'Portrait'}/>
        <a className={'contact-button button'} href={'mailto:yoga@isabelakanji.ch'}>
          <p>Kontakt</p>
        </a>
      </div>

      <h1>Isabel Akanji</h1>

      <p>Diplomierte Yogalehrerin</p>
      <p>Diplomierte Heilkräuterfrau</p>
      <p>Kinderskilehrerin</p>

      <p>Wohnhaft in Savognin und am Zürichsee</p>
    </div>
  );
};
