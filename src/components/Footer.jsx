import React from "react";
import './Footer.css';

export default function Footer() { 

    return(
    <footer className="footer">
      &copy; {new Date().getFullYear()} F25D Borås YH
    </footer>
    )
}