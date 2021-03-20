import React, {ReactElement, useEffect, useState} from "react";
import './DrawerNavContainer.scss';
import {SchnapsPage} from "../pages/schnaps/SchnapsPage";
import {AboutPage} from '../pages/about/AboutPage';

interface NavItem {
  text: string,
  color: string,
  component: ReactElement
}

export const DrawerNavContainer: React.FC = () => {
  const breakPoint = 800;
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isSmallScreen, setIsSmallScreen] = useState(() => window.innerWidth < breakPoint);
  const [registerWidth, setRegisterWidth] = useState(0);
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  const registerHeight = 50;

  const getWindowHeight = () => {
    return (isSmallScreen ? innerHeight - (2 * registerHeight) : innerHeight) + 'px';
  }

  const navItems: Array<NavItem> = [
    // {
    //   text: 'Yoga',
    //   color: '#93BED5',
    //   component: <YogaPage window.innerHeight={getwindow.innerHeight()}/>
    // },
    {
      text: 'Produkte',
      color: '#DDE2B5',
      component: <SchnapsPage windowHeight={getWindowHeight()}/>
    },
    {
      text: 'Über mich',
      color: '#E5B8B8',
      component: <AboutPage/>
    }

  ];

  const setActiveDrawer = (i: number) => {
    const newIndex = i === activeIndex ? -1 : i;
    setActiveIndex(newIndex)
  };

  const calcHorizontalSpace = (i: number): string => {
    if (isSmallScreen) {
      return '100vw';
    } else if (activeIndex === -1) {
      return `${100 / navItems.length}vw`;
    } else {
      return i === activeIndex ? `calc(100vw - ${(navItems.length - 1) * registerWidth}px)` : `${registerWidth}px`;
    }
  };

  const calcVerticalSpace = (i: number): string => {
    if (!isSmallScreen) {
      return `${innerHeight}px`;
    } else if (activeIndex === -1) {
      return `${innerHeight / navItems.length}px`;
    } else {
      return i === activeIndex ? `calc(${innerHeight - (navItems.length - 1) * registerHeight}px)` : `${registerHeight}px`
    }
  };

  const calcDrawerLabelWidth = (): string => {
    if (isSmallScreen) {
      return '100vw';
    } else if (activeIndex === -1) {
      return `${100 / navItems.length}vw`;
    } else {
      return `${registerWidth}px`
    }
  };

  const calcDrawerLabelHeight = (): string => {
    if (!isSmallScreen) {
      return `${innerHeight}px`;
    } else if (activeIndex === -1) {
      return `${innerHeight / navItems.length}px`;
    } else {
      return `${registerHeight}px`;
    }
  };

  const handleResize = () => {
    setRegisterWidth(window.innerWidth * 0.04 < 30 ? 30 : window.innerWidth * 0.04);
    setIsSmallScreen(window.innerWidth <= breakPoint);
    setInnerHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return (
    <div className={`DrawerNavContainer`} style={{height: `${innerHeight}px`}}>
      {navItems.map((item, i) => {
          return (
            <div className={`drawer-item horizontal-container ${i === activeIndex ? 'active' : 'not-active'}`}
                 key={item.text + i}
                 style={{
                   backgroundColor: item.color,
                   width: calcHorizontalSpace(i),
                   height: calcVerticalSpace(i)
                 }}>

              <div className={'drawer-label button'}
                   style={{
                     minWidth: calcDrawerLabelWidth(),
                     minHeight: calcDrawerLabelHeight()
                   }}
                   onClick={() => setActiveDrawer(i)}>
                <h4 className={`link ${activeIndex === -1 ? 'highlighted' : ''}`}>{item.text}</h4>
              </div>

              <div className={'drawer-page-container'}>
                <div className={'inner-drawer-container'}
                     style={{width: !isSmallScreen ? `calc(100vw - ${navItems.length * registerWidth}px)` : ''}}>
                  {item.component}
                </div>
              </div>
            </div>
          )
        }
      )}
    </div>
  )
};
