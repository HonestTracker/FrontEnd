import React from "react";
import { Link } from "react-router-dom";

/**
 * Renders a custom link component.
 *
 * @param {Object} props - The props for the custom link.
 * @param {string} props.to - The target URL for the link.
 * @param {ReactNode} props.children - The content to be displayed within the link.
 * @param {Object} props.props - Additional props to be spread onto the Link component.
 * @returns {ReactNode} The rendered custom link component.
 */
function CustomLink({ to, children, props }) {
  const path = window.location.pathname;
  return (
    <p className="hover:text-gray-300">
      <Link to={to} {...props}>
        {children}
      </Link>
    </p>
  );
}

export default CustomLink;
