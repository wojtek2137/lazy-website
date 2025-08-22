import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { colors, fonts } from 'config/theme';

// Quick Actions Panel - 2024 UX Trends
const QuickActionsPanel = styled.div<{ isVisible: boolean }>`
  position: fixed;
  bottom: 120px;
  right: 30px;
  width: 280px;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(40px);
  border: 1px solid ${colors.primary.gold}30;
  border-radius: 20px;
  overflow: hidden;
  transform: translateY(${({ isVisible }) => isVisible ? '0' : '100px'});
  opacity: ${({ isVisible }) => isVisible ? 1 : 0};
  pointer-events: ${({ isVisible }) => isVisible ? 'all' : 'none'};
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 9998;
  box-shadow: 
    0 40px 80px rgba(0, 0, 0, 0.8),
    0 0 60px ${colors.primary.gold}20,
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
`;

const QuickActionHeader = styled.div`
  padding: 20px 24px 16px;
  border-bottom: 1px solid ${colors.primary.gold}20;
`;

const QuickActionTitle = styled.h3`
  color: ${colors.primary.gold};
  font-family: ${fonts.mulish.Bold};
  font-size: 16px;
  margin: 0 0 8px 0;
  letter-spacing: 1px;
`;

const QuickActionSubtitle = styled.p`
  color: ${colors.neutrals.N300};
  font-family: ${fonts.mulish.Regular};
  font-size: 14px;
  margin: 0;
`;

const QuickActionsList = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const QuickActionItem = styled.button<{ variant?: 'primary' | 'secondary' | 'danger' }>`
  display: flex;
  align-items: center;
  padding: 16px;
  background: ${({ variant }) => {
    switch (variant) {
      case 'primary': return `linear-gradient(135deg, ${colors.primary.gold}20, ${colors.primary.gold}10)`;
      case 'danger': return 'linear-gradient(135deg, #ff174420, #ff174410)';
      default: return 'rgba(255, 255, 255, 0.05)';
    }
  }};
  border: 1px solid ${({ variant }) => {
    switch (variant) {
      case 'primary': return `${colors.primary.gold}40`;
      case 'danger': return '#ff174440';
      default: return 'rgba(255, 255, 255, 0.1)';
    }
  }};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  color: ${colors.primary.white};
  font-family: ${fonts.mulish.Medium};
  
  &:hover {
    transform: translateY(-2px) scale(1.02);
    background: ${({ variant }) => {
      switch (variant) {
        case 'primary': return `linear-gradient(135deg, ${colors.primary.gold}30, ${colors.primary.gold}15)`;
        case 'danger': return 'linear-gradient(135deg, #ff174430, #ff174415)';
        default: return 'rgba(255, 255, 255, 0.1)';
      }
    }};
    border-color: ${({ variant }) => {
      switch (variant) {
        case 'primary': return `${colors.primary.gold}60`;
        case 'danger': return '#ff174460';
        default: return 'rgba(255, 255, 255, 0.2)';
      }
    }};
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }
  
  &:active {
    transform: translateY(0) scale(0.98);
  }
`;

const ActionIcon = styled.span`
  font-size: 20px;
  margin-right: 12px;
  width: 24px;
  text-align: center;
`;

const ActionContent = styled.div`
  flex: 1;
  text-align: left;
`;

const ActionLabel = styled.div`
  font-size: 14px;
  margin-bottom: 2px;
`;

const ActionDescription = styled.div`
  font-size: 12px;
  color: ${colors.neutrals.N300};
  font-family: ${fonts.mulish.Regular};
`;

const ActionShortcut = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 11px;
  color: ${colors.neutrals.N300};
  font-family: ${fonts.mulish.Regular};
`;


// Progress Ring Component
const ProgressRing = styled.div<{ progress: number }>`
  position: fixed;
  bottom: 30px;
  left: 30px;
  width: 64px;
  height: 64px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid transparent;
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    conic-gradient(
      ${colors.primary.gold} 0deg,
      ${colors.primary.gold} ${({ progress }) => progress * 3.6}deg,
      rgba(255, 255, 255, 0.1) ${({ progress }) => progress * 3.6}deg,
      rgba(255, 255, 255, 0.1) 360deg
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  }
`;

const ProgressText = styled.span`
  color: ${colors.primary.white};
  font-family: ${fonts.mulish.Bold};
  font-size: 12px;
`;

// Smart Suggestions
const SmartSuggestions = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 100px;
  left: 30px;
  width: 300px;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(40px);
  border: 1px solid ${colors.primary.gold}30;
  border-radius: 16px;
  padding: 20px;
  transform: ${({ isVisible }) => 
    isVisible 
      ? 'translateX(0) scale(1)' 
      : 'translateX(-20px) scale(0.95)'
  };
  opacity: ${({ isVisible }) => isVisible ? 1 : 0};
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  pointer-events: ${({ isVisible }) => isVisible ? 'all' : 'none'};
  z-index: 9997;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.6),
    0 0 30px ${colors.primary.gold}20;
    
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${colors.primary.gold}60, transparent);
    border-radius: 16px 16px 0 0;
  }
`;

const SuggestionTitle = styled.h4`
  color: ${colors.primary.gold};
  font-family: ${fonts.mulish.Bold};
  font-size: 14px;
  margin: 0 0 12px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

const SuggestionCloseButton = styled.button`
  background: none;
  border: none;
  color: ${colors.neutrals.N300};
  font-size: 16px;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  transition: all 0.2s ease;
  
  &:hover {
    color: ${colors.primary.white};
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

const SuggestionItem = styled.div`
  padding: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      ${colors.primary.gold}10, 
      transparent
    );
    transition: left 0.6s ease;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: ${colors.primary.gold}40;
    transform: translateX(4px) scale(1.02);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateX(2px) scale(0.98);
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SuggestionText = styled.p`
  color: ${colors.primary.white};
  font-family: ${fonts.mulish.Medium};
  font-size: 13px;
  margin: 0 0 4px 0;
`;

const SuggestionMeta = styled.span`
  color: ${colors.neutrals.N300};
  font-family: ${fonts.mulish.Regular};
  font-size: 11px;
`;

interface QuickActions2024Props {
  isVisible: boolean;
  onClose: () => void;
}

export function QuickActions2024({ isVisible, onClose }: QuickActions2024Props) {

  const [scrollProgress, setScrollProgress] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Show smart suggestions after 3 seconds of inactivity
    const timer = setTimeout(() => {
      setShowSuggestions(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Re-show suggestions after being closed for 30 seconds
  useEffect(() => {
    if (!showSuggestions) {
      const reShowTimer = setTimeout(() => {
        setShowSuggestions(true);
      }, 30000); // 30 seconds

      return () => clearTimeout(reShowTimer);
    }
  }, [showSuggestions]);



  const quickActions = [
    {
      icon: '',
      label: 'Rezerwacja',
      description: 'Zarezerwuj występ',
      shortcut: 'Ctrl+R',
      variant: 'primary' as const,
      action: () => {
        document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      icon: '',
      label: 'Posłuchaj',
      description: 'Nasza muzyka',
      shortcut: 'Ctrl+M',
      variant: 'secondary' as const,
      action: () => {
        document.getElementById('albumy')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      icon: '',
      label: 'Wideo',
      description: 'Zobacz występy',
      shortcut: 'Ctrl+V',
      variant: 'secondary' as const,
      action: () => {
        document.getElementById('wideo')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      icon: '',
      label: 'Festiwale',
      description: 'Nasze występy',
      shortcut: 'Ctrl+F',
      variant: 'secondary' as const,
      action: () => {
        document.getElementById('festiwale')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    }
  ];

  const suggestions = [
    {
      text: 'Chcesz nas usłyszeć?',
      meta: 'Sprawdź nasze nagrania na Spotify',
      action: () => document.getElementById('albumy')?.scrollIntoView({ behavior: 'smooth' })
    },
    {
      text: 'Organizujesz event?',
      meta: 'Zobacz naszą ofertę koncertową',
      action: () => document.getElementById('uslugi')?.scrollIntoView({ behavior: 'smooth' })
    },
    {
      text: 'Poznaj naszą historię',
      meta: 'Od Piwnicy pod Baranami do dzisiaj',
      action: () => document.getElementById('o-nas')?.scrollIntoView({ behavior: 'smooth' })
    }
  ];

  return (
    <>
      {/* Quick Actions Panel */}
      <QuickActionsPanel isVisible={isVisible}>
        <QuickActionHeader>
          <QuickActionTitle>Szybkie Akcje</QuickActionTitle>
          <QuickActionSubtitle>Najczęściej używane funkcje</QuickActionSubtitle>
        </QuickActionHeader>
        
        <QuickActionsList>
          {quickActions.map((action, index) => (
            <QuickActionItem
              key={index}
              variant={action.variant}
              onClick={action.action}
            >
              {action.icon && <ActionIcon>{action.icon}</ActionIcon>}
              <ActionContent>
                <ActionLabel>{action.label}</ActionLabel>
                <ActionDescription>{action.description}</ActionDescription>
              </ActionContent>
              <ActionShortcut>{action.shortcut}</ActionShortcut>
            </QuickActionItem>
          ))}
        </QuickActionsList>
      </QuickActionsPanel>


      {/* Scroll Progress Ring */}
      <ProgressRing 
        progress={scrollProgress}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        title={`Postęp: ${Math.round(scrollProgress)}%`}
      >
        <ProgressText>{Math.round(scrollProgress)}%</ProgressText>
      </ProgressRing>

      {/* Smart Suggestions */}
      <SmartSuggestions isVisible={showSuggestions}>
        <SuggestionTitle>
          <span>Może Cię zainteresuje</span>
          <SuggestionCloseButton 
            onClick={() => setShowSuggestions(false)}
            title="Zamknij sugestie"
          >
            ×
          </SuggestionCloseButton>
        </SuggestionTitle>
        {suggestions.map((suggestion, index) => (
          <SuggestionItem key={index} onClick={suggestion.action}>
            <SuggestionText>{suggestion.text}</SuggestionText>
            <SuggestionMeta>{suggestion.meta}</SuggestionMeta>
          </SuggestionItem>
        ))}
      </SmartSuggestions>
    </>
  );
}
