import React, { useState } from 'react';
import styled from '@emotion/styled';
import { colors, fonts } from 'config/theme';

const NavWrapper = styled.nav`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 8px;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: ${colors.primary.white};
  cursor: pointer;
  padding: 12px;
  border-radius: 8px;
  font-size: 18px;
  
  &:hover {
    background: rgba(204, 179, 121, 0.2);
  }
  
  &:focus {
    outline: 2px solid ${colors.primary.sandy};
    outline-offset: 2px;
  }
`;

const NavMenu = styled.ul<{ isOpen: boolean }>`
  list-style: none;
  padding: 0;
  margin: 8px 0 0 0;
  display: ${props => props.isOpen ? 'block' : 'none'};
  min-width: 200px;
`;

const NavItem = styled.li`
  margin: 0;
`;

const NavLink = styled.a`
  display: block;
  color: ${colors.primary.white};
  text-decoration: none;
  padding: 12px 16px;
  font-family: ${fonts.mulish.Medium};
  font-size: 14px;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${colors.primary.sandy};
    color: ${colors.primary.black};
    transform: translateX(4px);
  }
  
  &:focus {
    outline: 2px solid ${colors.primary.sandy};
    outline-offset: 2px;
  }
`;

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#glowna', label: '🎷 Start' },
    { href: '#o-nas', label: '👥 O nas' },
    { href: '#lato-z-radiem', label: '📻 Lato z Radiem' },
    { href: '#albumy', label: '🎵 Albumy' },
    { href: '#festiwale', label: '🎪 Festiwale' },
    { href: '#wideo', label: '📹 Wideo' },
    { href: '#uslugi', label: '💼 Usługi' },
    { href: '#swieta', label: '🎄 Święta' },
    { href: '#zespol', label: '🎺 Zespół' },
    { href: '#kontakt', label: '📞 Kontakt' },
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
              aria-label={`Przejdź do sekcji: ${item.label}`}
            >
              {item.label}
            </NavLink>
          </NavItem>
        ))}
      </NavMenu>
    </NavWrapper>
  );
}
