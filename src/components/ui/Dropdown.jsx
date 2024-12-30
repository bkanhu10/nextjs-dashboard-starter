// components/ui/Dropdown.js
"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Dropdown = ({ label, items, renderTrigger }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div onClick={toggleDropdown}>
        {renderTrigger ? renderTrigger() : <button>{label}</button>}
      </div>
      {isOpen && (
        <ul className="absolute top-full mt-2 w-48 rounded-md bg-white shadow-md">
          {items.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                alt={item.label}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={toggleDropdown}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
