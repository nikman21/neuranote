import React, { useState } from 'react';

const WidgetFactory = ({ onWidgetSelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleWidgetSelection = (widgetType) => {
    onWidgetSelect(widgetType);
    setIsMenuOpen(false); // Close the menu after selection
  };

  return (
    <div>
      <button className='text-white' onClick={toggleMenu}>Select Widget</button>
      {isMenuOpen && (
        <div className="widget-menu">
          <button className= 'text-white' onClick={() => handleWidgetSelection('TodoWidget')}>Todo Widget</button>
          {/* Add more buttons for other widgets */}
          <button className= 'text-white' onClick={() => handleWidgetSelection('JournalWidget')}>Journal Widget</button>
        </div>
      )}
    </div>
  );
};

export default WidgetFactory;


