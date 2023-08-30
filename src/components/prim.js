import React, { useState } from 'react';

const Expandableprim= ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="expandable-contentprim">
      <button className="expandable-titleprim" onClick={toggleExpansion}>
        {title}
      </button>
      {expanded && <div className="expandable-bodyprim">{children}</div>}
    </div>
  );
};

export default Expandableprim;
