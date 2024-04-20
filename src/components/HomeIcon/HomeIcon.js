// HomeIcon.js
import React from 'react';
import "./HomeIcon.css";

function HomeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 14v6a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4h6v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6" />
      <path d="M12 3v10l-3-3-3 3v-10h6z" />
    </svg>
  );
}

export default HomeIcon;
