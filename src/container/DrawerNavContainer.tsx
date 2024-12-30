import React, {ReactElement, useEffect, useRef, useState} from "react";
import './DrawerNavContainer.scss';
import {SchnapsPage} from "../pages/schnaps/SchnapsPage";
import {AboutPage} from '../pages/about/AboutPage';
import useSize from "@react-hook/size";

interface NavItem {
  text: string,
  color: string,
  component: ReactElement
}

export const DrawerNavContainer: React.FC = () => {
  const rootRef = useRef(null);
  const breakPoint = 800;
  const [activeIndex, setActiveIndex] = useState(-1);
  const [registerWidth, setRegisterWidth] = useState(0);
  const registerHeight = 50;

  const [containerWidth, containerHeight] = useSize(rootRef.current);
  const [isSmallScreen, setIsSmallScreen] = useState(() => containerWidth < breakPoint);

  const getWindowHeight = () => {
    const height = (isSmallScreen ? containerHeight - (2 * registerHeight) : containerHeight)
    const maxHeight = height > 800 ? 800 : height;
    return maxHeight + 'px';
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
      return `${containerHeight}px`;
    } else if (activeIndex === -1) {
      return `${containerHeight / navItems.length}px`;
    } else {
      return i === activeIndex ? `calc(${containerHeight - (navItems.length - 1) * registerHeight}px)` : `${registerHeight}px`
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
      return `${containerHeight}px`;
    } else if (activeIndex === -1) {
      return `${containerHeight / navItems.length}px`;
    } else {
      return `${registerHeight}px`;
    }
  };

  useEffect(() => {
    setRegisterWidth(containerWidth * 0.04 < 30 ? 30 : containerWidth * 0.04);
    setIsSmallScreen(containerWidth < breakPoint);
  }, [containerWidth, breakPoint]);

  return (
    <div className={`DrawerNavContainer`} ref={rootRef}>
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
