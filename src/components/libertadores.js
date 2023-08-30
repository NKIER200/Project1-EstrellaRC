import React, { useState } from 'react';

const Expandablelib= ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="expandable-content">
      <button className="expandable-title" onClick={toggleExpansion}>
        {title}
      </button>
      {expanded && <div className="expandable-body">{children}</div>}
    </div>
  );
};

export default Expandablelib;
