import React from 'react';
import './AboutPage.scss';

interface AboutPageProps {
  windowHeight: string
}

export const AboutPage: React.FC<AboutPageProps> = props => {

  return (
    <div className={'AboutPage'} style={{minHeight: props.windowHeight}}>

    </div>
  );
};
