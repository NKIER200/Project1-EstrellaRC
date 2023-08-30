import React, { useState } from 'react';

const Expandablelpf= ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="expandable-contentlpf">
      <button className="expandable-titlelpf" onClick={toggleExpansion}>
        {title}
      </button>
      {expanded && <div className="expandable-bodylpf">{children}</div>}
    </div>
  );
};

export default Expandablelpf;
