// src/components/GlowBackground.jsx
import React from 'react';
import './GlowBackground.css';

export default function GlowBackground() {
  return (
    <div className="glow-container" aria-hidden="true">
      <div className="blob red"></div>
      <div className="blob green"></div>
      <div className="blob yellow"></div>
      <div className="blob blue"></div>
    </div>
  );
}