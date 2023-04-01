import React from 'react';
import './LeftBar.css';

function LeftBar() {
  return (
    <div className="leftbar">
        <a href="#visualize" className="button">Visualize</a>
        -------------------------------
        <a href="#first">What is Queue?</a>
        <a href="#second">Key Concepts</a>
        <a href="#third">Implementation</a>
        <a href="#fourth">Applications</a>
        <a href="#fifth">Time Complexity</a>
        <a href="#sixth">Algorithm</a>
    </div>
  );
}

export default LeftBar;