import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { colors, fonts } from 'config/theme';

// Quick Actions Panel - 2024 UX Trends
const QuickActionsPanel = styled.div`
  position: fixed;
  bottom: 120px;
  right: 30px;
  width: 280px;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(40px);
  border: 1px solid ${colors.primary.gold}30;
  border-radius: 20px;
  overflow: hidden;
  z-index: 9998;
  box-shadow: 
    0 40px 80px rgba(0, 0, 0, 0.8),
    0 0 60px ${colors.primary.gold}20,
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  
  /* Entry animation */
  animation: slideInUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  
  @keyframes slideInUp {
    from {
      transform: translateY(100px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
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
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid transparent;
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
    conic-gradient(
      ${colors.primary.gold} 0deg,
      ${colors.primary.gold} ${({ progress }) => progress * 3.6}deg,
      rgba(255, 255, 255, 0.1) ${({ progress }) => progress * 3.6}deg,
      rgba(255, 255, 255, 0.1) 360deg
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
  cursor: pointer;
  z-index: 10005;
  box-shadow: 
    0 8px 25px rgba(0, 0, 0, 0.4),
    0 0 20px ${colors.primary.gold}20;
  
  /* Entry animation */
  animation: scaleIn 0.3s ease forwards;
  
  @keyframes scaleIn {
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 
      0 12px 35px rgba(0, 0, 0, 0.5),
      0 0 30px ${colors.primary.gold}30;
  }
  
  &:active {
    transform: scale(1.05);
  }
`;

const ProgressText = styled.span`
  color: ${colors.primary.white};
  font-family: ${fonts.mulish.Bold};
  font-size: 12px;
`;

interface QuickActions2024Props {
  isVisible: boolean;
  onClose: () => void;
}

export function QuickActions2024({ isVisible, onClose }: QuickActions2024Props) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showProgressRing, setShowProgressRing] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
          setScrollProgress(Math.min(100, Math.max(0, progress)));
          
          // Show progress ring after scrolling past main section (roughly 100vh)
          const mainSectionHeight = window.innerHeight;
          setShowProgressRing(scrollTop > mainSectionHeight * 0.8);
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside to close
  useEffect(() => {
    if (!isVisible) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      
      // Check if click was on toggle button or its children
      const isToggleButton = target.closest('[data-quick-actions-toggle="true"]');
      
      if (panelRef.current && !panelRef.current.contains(target as Node) && !isToggleButton) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible, onClose]);

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

  return (
    <>
      {/* Quick Actions Panel - conditional rendering */}
      {isVisible && (
        <QuickActionsPanel ref={panelRef}>
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
      )}

      {/* Scroll Progress Ring - conditional rendering */}
      {showProgressRing && (
        <ProgressRing 
          progress={scrollProgress}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title={`Postęp czytania: ${Math.round(scrollProgress)}% - kliknij aby wrócić na górę`}
        >
          <ProgressText>{Math.round(scrollProgress)}%</ProgressText>
        </ProgressRing>
      )}
    </>
  );
}