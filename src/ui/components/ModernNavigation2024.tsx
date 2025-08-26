import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import styled from '@emotion/styled';
import { colors, fonts } from 'config/theme';

// Command Palette Interface
interface NavigationItem {
  id: string;
  label: string;
  description: string;
  href: string;
  icon: string;
  category: 'primary' | 'content' | 'action';
  keywords: string[];
}

// Modern 2024 Navigation System
const ModernNavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000;
  pointer-events: none;
`;

// Command Palette (VS Code style)
const CommandPalette = styled.div`
  position: fixed;
  top: 20vh;
  left: 50%;
  transform: translateX(-50%);
  width: min(600px, 90vw);
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(40px);
  border: 1px solid ${colors.primary.gold}30;
  border-radius: 20px;
  overflow: hidden;
  z-index: 10002;
  pointer-events: all; /* Ensure clicks work */
  box-shadow: 
    0 40px 80px rgba(0, 0, 0, 0.8),
    0 0 60px ${colors.primary.gold}20,
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  
  /* Entry animation */
  animation: slideInDown 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  
  @keyframes slideInDown {
    from {
      transform: translateX(-50%) translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${colors.primary.gold}60, transparent);
  }
`;

const CommandBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 10001;
  cursor: pointer;
  
  /* Entry animation */
  animation: fadeIn 0.3s ease forwards;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const CommandInput = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  padding: 20px 24px;
  color: ${colors.primary.white};
  font-family: ${fonts.outfit.Medium};
  font-size: 18px;
  outline: none;
  border-bottom: 1px solid ${colors.primary.gold}20;
  
  &::placeholder {
    color: ${colors.neutrals.N300};
  }
`;

const CommandResults = styled.div`
  max-height: 400px;
  overflow-y: auto;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CommandItem = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  cursor: pointer;
  background: ${({ isSelected }) => isSelected ? 
    `linear-gradient(90deg, ${colors.primary.gold}15, ${colors.primary.gold}05)` : 
    'transparent'
  };
  border-left: 3px solid ${({ isSelected }) => isSelected ? colors.primary.gold : 'transparent'};
  transition: all 0.2s ease;
  
  &:hover {
    background: linear-gradient(90deg, ${colors.primary.gold}10, ${colors.primary.gold}03);
    border-left-color: ${colors.primary.gold}60;
  }
`;

const CommandIcon = styled.span`
  font-size: 20px;
  margin-right: 16px;
  width: 24px;
  text-align: center;
`;

const CommandContent = styled.div`
  flex: 1;
`;

const CommandLabel = styled.div`
  color: ${colors.primary.white};
  font-family: ${fonts.outfit.Medium};
  font-size: 16px;
  margin-bottom: 4px;
`;

const CommandDescription = styled.div`
  color: ${colors.neutrals.N300};
  font-family: ${fonts.outfit.Light};
  font-size: 14px;
`;

const CommandShortcut = styled.div`
  color: ${colors.neutrals.N300};
  font-family: ${fonts.outfit.Light};
  font-size: 12px;
  padding: 4px 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
`;



// Smart Breadcrumbs
const BreadcrumbWrapper = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  pointer-events: all;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  padding: 12px 20px;
  border-radius: 25px;
  border: 1px solid ${colors.primary.gold}20;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.9);
    border-color: ${colors.primary.gold}40;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  }
`;

const BreadcrumbItem = styled.span<{ isActive: boolean }>`
  color: ${({ isActive }) => isActive ? colors.primary.gold : colors.neutrals.N300};
  font-family: ${fonts.outfit.Medium};
  font-size: 14px;
  transition: color 0.3s ease;
  cursor: ${({ isActive }) => isActive ? 'default' : 'pointer'};
  
  &:hover {
    color: ${colors.primary.sandy};
  }
`;

const BreadcrumbSeparator = styled.span`
  color: ${colors.neutrals.N400};
  font-size: 12px;
`;

// Quick Actions Floating Button
const QuickActionsButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, ${colors.primary.gold}, ${colors.primary.sandy});
  border: none;
  border-radius: 32px;
  cursor: pointer;
  pointer-events: all;
  transition: all 0.3s ease;
  box-shadow: 
    0 8px 25px rgba(245, 203, 92, 0.3),
    0 0 20px rgba(245, 203, 92, 0.2);
  
  &:hover {
    transform: translateY(-2px) scale(1.1);
    box-shadow: 
      0 12px 35px rgba(245, 203, 92, 0.5),
      0 0 30px rgba(245, 203, 92, 0.3);
  }
  
  &:active {
    transform: translateY(-1px) scale(1.05);
  }
`;

const QuickActionsIcon = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: ${colors.primary.black};
  transition: all 0.3s ease;
`;



// Command Trigger Button
const CommandTrigger = styled.button`
  position: fixed;
  top: 30px;
  right: 30px;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(20px);
  border: 1px solid ${colors.primary.gold}30;
  border-radius: 12px;
  padding: 12px 20px;
  color: ${colors.primary.white};
  font-family: ${fonts.outfit.Medium};
  font-size: 14px;
  cursor: pointer;
  pointer-events: all;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    background: rgba(0, 0, 0, 0.95);
    border-color: ${colors.primary.gold}50;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  }
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    padding: 0;
    border-radius: 25px;
    top: 20px;
    right: 20px;
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
    border-radius: 22px;
    top: 15px;
    right: 15px;
  }
`;

const CommandTriggerIcon = styled.span`
  font-size: 16px;
  
  @media (min-width: 769px) {
    display: none;
  }
  
  @media (max-width: 768px) {
    display: block;
    font-size: 20px;
  }
  
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const CommandText = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`;

const KeyboardShortcut = styled.span`
  background: rgba(255, 255, 255, 0.1);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
  color: ${colors.neutrals.N300};
  
  @media (max-width: 768px) {
    display: none;
  }
`;



// Props interface
interface ModernNavigation2024Props {
  onQuickActionsToggle?: () => void;
}

// Main Navigation Component
export function ModernNavigation2024({ onQuickActionsToggle }: ModernNavigation2024Props = {}) {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [currentSection, setCurrentSection] = useState('glowna');

  
  const commandInputRef = useRef<HTMLInputElement>(null);

  const navigationItems: NavigationItem[] = [
    {
      id: 'glowna',
      label: 'Strona Główna',
      description: 'Powrót do sekcji powitalnej z wideo',
      href: '#glowna',
      icon: '',
      category: 'primary',
      keywords: ['home', 'start', 'główna', 'wideo', 'logo']
    },
    {
      id: 'o-nas',
      label: 'O Nas',
      description: 'Historia zespołu i nasza misja',
      href: '#o-nas',
      icon: '',
      category: 'content',
      keywords: ['zespół', 'historia', 'o nas', 'biografia', 'kraków']
    },
    {
      id: 'lato-z-radiem',
      label: 'Lato z Radiem',
      description: 'Współpraca z Polskim Radiem',
      href: '#lato-z-radiem',
      icon: '',
      category: 'content',
      keywords: ['radio', 'polskie radio', 'potańcówki', 'lato', 'koncerty']
    },
    {
      id: 'albumy',
      label: 'Nasza Muzyka',
      description: 'Posłuchaj naszych utworów',
      href: '#albumy',
      icon: '',
      category: 'content',
      keywords: ['muzyka', 'albumy', 'spotify', 'słuchaj', 'piosenki']
    },
    {
      id: 'festiwale',
      label: 'Festiwale',
      description: 'Nasze występy w Polsce i za granicą',
      href: '#festiwale',
      icon: '',
      category: 'content',
      keywords: ['festiwale', 'koncerty', 'występy', 'dragon', 'lindy hop']
    },
    {
      id: 'wideo',
      label: 'Zobacz Nas',
      description: 'Filmiki z naszych występów',
      href: '#wideo',
      icon: '',
      category: 'content',
      keywords: ['wideo', 'youtube', 'występy', 'nagrania', 'koncerty']
    },
    {
      id: 'uslugi',
      label: 'Nasza Oferta',
      description: 'Co możemy dla Ciebie zagrać',
      href: '#uslugi',
      icon: '',
      category: 'content',
      keywords: ['usługi', 'oferta', 'wesela', 'eventy', 'koncerty']
    },
    {
      id: 'swieta',
      label: 'Lazy Christmas',
      description: 'Świąteczna oferta zespołu',
      href: '#swieta',
      icon: '',
      category: 'content',
      keywords: ['święta', 'christmas', 'wigilie', 'świąteczne', 'xmas']
    },
    {
      id: 'zespol',
      label: 'Poznaj Zespół',
      description: 'Członkowie Lazy Swing Band',
      href: '#zespol',
      icon: '',
      category: 'content',
      keywords: ['zespół', 'muzycy', 'członkowie', 'instrumenty', 'sylwetki']
    },
    {
      id: 'kontakt',
      label: 'Kontakt',
      description: 'Skontaktuj się z nami',
      href: '#kontakt',
      icon: '',
      category: 'action',
      keywords: ['kontakt', 'telefon', 'email', 'rezerwacja', 'booking']
    }
  ];

  const sections = useMemo(() => ['glowna', 'o-nas', 'lato-z-radiem', 'albumy', 'festiwale', 'wideo', 'uslugi', 'swieta', 'zespol', 'kontakt'], []);

  // Filter items based on search
  const filteredItems = navigationItems.filter(item =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Navigation handler with URL routing
  const handleNavigation = useCallback((href: string) => {
    const element = document.querySelector(href);
    
    if (element) {
      // Update URL hash for better SEO and browser history
      window.history.pushState(null, '', href);
      
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setCommandPaletteOpen(false);
      
      // Update current section state
      const sectionId = href.replace('#', '');
      setCurrentSection(sectionId);
      
      // Haptic feedback simulation
      if ('vibrate' in navigator) {
        navigator.vibrate(50);
      }
    }
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + K to open command palette
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(true);
        setTimeout(() => {
          commandInputRef.current?.focus();
        }, 150);
      }

      // Escape to close
      if (e.key === 'Escape') {
        setCommandPaletteOpen(false);
      }

      // Arrow navigation in command palette (only when not typing in input)
      if (commandPaletteOpen && e.target !== commandInputRef.current) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex(prev => Math.min(prev + 1, filteredItems.length - 1));
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex(prev => Math.max(prev - 1, 0));
        }
        if (e.key === 'Enter' && filteredItems[selectedIndex]) {
          e.preventDefault();
          handleNavigation(filteredItems[selectedIndex].href);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [commandPaletteOpen, selectedIndex, filteredItems, handleNavigation]);

  // Reset search when palette closes
  useEffect(() => {
    if (!commandPaletteOpen) {
      setSearchQuery('');
      setSelectedIndex(0);
    }
  }, [commandPaletteOpen]);

  // Scroll tracking with throttling for performance
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset;

          // Detect current section - throttled to reduce DOM queries
          const sectionElements = sections.map(id => document.getElementById(id)).filter(Boolean);
          for (let i = sectionElements.length - 1; i >= 0; i--) {
            const element = sectionElements[i];
            if (element && element.offsetTop <= scrollTop + 100) {
              const newSection = sections[i];
              if (newSection !== currentSection) {
                setCurrentSection(newSection);
                // Update URL hash during scroll for SEO
                const newHash = `#${newSection}`;
                if (window.location.hash !== newHash) {
                  window.history.replaceState(null, '', newHash);
                }
              }
              break;
            }
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, currentSection]);

  // Handle browser back/forward buttons and initial hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && sections.includes(hash)) {
        setCurrentSection(hash);
      }
    };

    // Set initial section from URL hash
    const initialHash = window.location.hash.replace('#', '');
    if (initialHash && sections.includes(initialHash)) {
      setCurrentSection(initialHash);
    } else if (!window.location.hash) {
      // Set default hash if none exists
      window.history.replaceState(null, '', '#glowna');
      setCurrentSection('glowna');
    }

    // Listen for hash changes (back/forward buttons)
    window.addEventListener('hashchange', handleHashChange);
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [sections]);

  return (
    <ModernNavWrapper>
      {/* Command Trigger */}
      <CommandTrigger
        onClick={() => setCommandPaletteOpen(true)}
      >
        <CommandTriggerIcon>☰</CommandTriggerIcon>
        <CommandText>⚡ Szybka nawigacja</CommandText>
        <KeyboardShortcut>⌘K</KeyboardShortcut>
      </CommandTrigger>

      {/* Smart Breadcrumbs */}
      <BreadcrumbWrapper>
        <BreadcrumbItem isActive={false}>Lazy Swing Band</BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        <BreadcrumbItem isActive={true}>
          {navigationItems.find(item => item.id === currentSection)?.label || 'Start'}
        </BreadcrumbItem>
      </BreadcrumbWrapper>



      {/* Command Palette */}
      {commandPaletteOpen && (
        <>
          <CommandBackdrop onClick={() => setCommandPaletteOpen(false)} />
          <CommandPalette>
        <CommandInput
          ref={commandInputRef}
          placeholder="Szukaj sekcji, wpisz komendę..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setSelectedIndex(0);
          }}
        />
        <CommandResults>
          {filteredItems.map((item, index) => (
            <CommandItem
              key={item.id}
              isSelected={index === selectedIndex}
              onClick={(e) => {
                e.stopPropagation();
                handleNavigation(item.href);
              }}
            >
              {item.icon && <CommandIcon>{item.icon}</CommandIcon>}
              <CommandContent>
                <CommandLabel>{item.label}</CommandLabel>
                <CommandDescription>{item.description}</CommandDescription>
              </CommandContent>
              <CommandShortcut>Enter</CommandShortcut>
            </CommandItem>
          ))}
          {filteredItems.length === 0 && (
            <CommandItem isSelected={false}>
              <CommandContent>
                <CommandLabel>Brak wyników</CommandLabel>
                <CommandDescription>Spróbuj innego wyszukiwania</CommandDescription>
              </CommandContent>
            </CommandItem>
          )}
        </CommandResults>
          </CommandPalette>
        </>
      )}

      {/* Quick Actions Button */}
      <QuickActionsButton
        data-quick-actions-toggle="true"
        onClick={() => onQuickActionsToggle?.()}
      >
        <QuickActionsIcon>
          ⚡
        </QuickActionsIcon>
      </QuickActionsButton>



      {/* Click outside to close */}
      {commandPaletteOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 9999,
            pointerEvents: 'all'
          }}
          onClick={() => setCommandPaletteOpen(false)}
        />
      )}
    </ModernNavWrapper>
  );
}
