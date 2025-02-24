import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export function Link({ href, children }: LinkProps) {
  return (
    <a
      href={href}
      className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
    >
      {children}
    </a>
  );
}