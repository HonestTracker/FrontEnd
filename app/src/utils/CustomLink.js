import React from 'react';
import { Link } from 'react-router-dom';

function CustomLink({ to, children, props }) {
  const path = window.location.pathname;
  return (
    <p class="hover:text-gray-300" className={path === to ? "active" : ""} >
      <Link to={to} {...props}>{children}</Link>
    </p>
  );
}

export default CustomLink;
