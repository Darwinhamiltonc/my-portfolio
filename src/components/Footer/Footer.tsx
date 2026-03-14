import "./Footer.css";
function Footer() {
  return (
    <p className="footer-text">
      &copy; {new Date().getFullYear()} Darwin Hamilton. All rights reserved.
    </p>
  );
}

export default Footer;
