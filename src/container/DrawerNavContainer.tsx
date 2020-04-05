import React, {ReactElement, useEffect, useState} from "react";
import './DrawerNavContainer.scss';
import {YogaPage} from "../pages/yoga/YogaPage";
import {SchnapsPage} from "../pages/schnaps/SchnapsPage";

interface NavItem {
  text: string,
  color: string,
  component: ReactElement
}

export const DrawerNavContainer: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [registerWidth, setRegisterWidth] = useState(0);
  const registerHeight = 50;
  const breakPoint = 800;
  const navItems: Array<NavItem> = [
    {
      text: 'Schnaps',
      color: '#DDE2B5',
      component: <SchnapsPage/>
    },
    {
      text: 'Yoga',
      color: '#93BED5',
      component: <YogaPage/>
    }
  ];

  useEffect(() => {
    const updateSize = () => {
      setRegisterWidth(window.innerWidth * 0.04 < 30 ? 30 : window.innerWidth * 0.04);
      setIsSmallScreen(window.innerWidth <= breakPoint);
    };
    window.addEventListener('resize', () => updateSize());
    updateSize()
  });

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
      return '100vh';
    } else if (activeIndex === -1) {
      return `${100 / navItems.length}vh`;
    } else {
      return i === activeIndex ? `calc(100vh - ${(navItems.length - 1) * registerHeight}px)` : `${registerHeight}px`
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
      return '100vh';
    } else if (activeIndex === -1) {
      return `${100 / navItems.length}vh`;
    } else {
      return `${registerHeight}px`;
    }
  };

  return (
    <div className={`DrawerNavContainer`}>
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
                <h4 className={'link'}>{item.text}</h4>
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
