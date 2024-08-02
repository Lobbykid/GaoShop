import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <h1 className="text-center">Cửa hàng gạo  &copy; VÂN TƯỜNG</h1>
      <p className="text-center mt-3">
        <Link to="/about">Về chúng tôi</Link>|<Link to="/contact">Liên hệ</Link>|
        <Link to="/policy">Chính sách bảo mật</Link>
      </p>
    </div>
  );
};

export default Footer;