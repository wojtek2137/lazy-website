import React, { useState } from 'react';
import styled from '@emotion/styled';
import { colors, fonts } from 'config/theme';

const NavWrapper = styled.nav`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(20px);
  border-radius: 15px;
  padding: 10px;
  border: 1px solid ${colors.primary.gold}30;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.5),
    0 0 20px ${colors.primary.gold}20;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.9);
    border-color: ${colors.primary.gold}50;
    box-shadow: 
      0 15px 40px rgba(0, 0, 0, 0.7),
      0 0 30px ${colors.primary.gold}30;
  }
`;

const NavButton = styled.button`
  background: linear-gradient(135deg, ${colors.primary.gold}20, transparent);
  border: 1px solid ${colors.primary.gold}40;
  color: ${colors.primary.white};
  cursor: pointer;
  padding: 14px 16px;
  border-radius: 10px;
  font-size: 20px;
  font-family: ${fonts.mulish.Medium};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, ${colors.primary.gold}30, transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, ${colors.primary.gold}40, ${colors.primary.sandy}20);
    border-color: ${colors.primary.gold}60;
    color: ${colors.primary.black};
    transform: scale(1.05);
    box-shadow: 0 5px 15px ${colors.primary.gold}30;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:focus {
    outline: 2px solid ${colors.primary.gold};
    outline-offset: 2px;
  }
  
  &:active {
    transform: scale(0.98);
  }
`;

const NavMenu = styled.ul<{ isOpen: boolean }>`
  list-style: none;
  padding: 0;
  margin: 12px 0 0 0;
  display: ${props => props.isOpen ? 'block' : 'none'};
  min-width: 220px;
  background: rgba(0, 0, 0, 0.95);
  border-radius: 12px;
  border: 1px solid ${colors.primary.gold}20;
  backdrop-filter: blur(15px);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
  animation: ${props => props.isOpen ? 'slideDown 0.3s ease' : 'none'};
  
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const NavItem = styled.li`
  margin: 0;
`;

const NavLink = styled.a`
  display: block;
  color: ${colors.primary.white};
  text-decoration: none;
  padding: 14px 18px;
  font-family: ${fonts.mulish.Medium};
  font-size: 15px;
  border-radius: 10px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  margin: 2px;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 3px;
    height: 100%;
    background: linear-gradient(180deg, ${colors.primary.gold}, ${colors.primary.sandy});
    transform: scaleY(0);
    transition: transform 0.3s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, ${colors.primary.gold}25, ${colors.primary.sandy}15);
    color: ${colors.primary.gold};
    transform: translateX(6px);
    text-shadow: 0 0 10px ${colors.primary.gold}40;
    box-shadow: 0 4px 12px ${colors.primary.gold}20;
  }
  
  &:hover::before {
    transform: scaleY(1);
  }
  
  &:focus {
    outline: 2px solid ${colors.primary.gold};
    outline-offset: 2px;
    background: ${colors.primary.gold}20;
  }
  
  &:active {
    transform: translateX(4px) scale(0.98);
  }
`;

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#glowna', label: 'Start', description: 'Strona główna' },
    { href: '#o-nas', label: 'O nas', description: 'Historia zespołu' },
    { href: '#lato-z-radiem', label: 'Lato z Radiem', description: 'Nasze potańcówki' },
    { href: '#albumy', label: 'Albumy', description: 'Nasza muzyka' },
    { href: '#festiwale', label: 'Festiwale', description: 'Występy w Polsce i za granicą' },
    { href: '#wideo', label: 'Wideo', description: 'Zobacz nas w akcji' },
    { href: '#uslugi', label: 'Usługi', description: 'Nasza oferta' },
    { href: '#swieta', label: '🎄 Święta', description: 'Lazy Christmas' },
    { href: '#zespol', label: 'Zespół', description: 'Poznaj muzyków' },
    { href: '#kontakt', label: 'Kontakt', description: 'Skontaktuj się z nami' },
  ];

  return (
    <NavWrapper role="navigation" aria-label="Nawigacja główna">
      <NavButton 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="main-nav"
        aria-label="Otwórz menu nawigacji"
      >
        {isOpen ? '✕' : '☰'}
      </NavButton>
      
      <NavMenu id="main-nav" isOpen={isOpen}>
        {navItems.map((item, index) => (
          <NavItem key={index}>
            <NavLink 
              href={item.href}
              onClick={() => setIsOpen(false)}
              aria-label={`Przejdź do sekcji: ${item.description}`}
              title={item.description}
            >
              {item.label}
            </NavLink>
          </NavItem>
        ))}
      </NavMenu>
    </NavWrapper>
  );
}
