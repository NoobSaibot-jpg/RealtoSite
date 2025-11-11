import React from 'react';
import { Button } from 'react-bootstrap';
import { useTheme } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button 
      variant="link" 
      onClick={toggleTheme} 
      className="text-decoration-none"
      style={{ color: 'var(--header-text)' }}
    >
      <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
    </Button>
  );
};

export default ThemeSwitcher;
