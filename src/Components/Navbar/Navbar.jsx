import React, { useState } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State quản lý trạng thái mở/đóng của dropdown Tour
  const [isTourDropdownOpen, setIsTourDropdownOpen] = useState(false);

  // Xử lý khi chuột đi vào (Mở Dropdown)
  const handleMouseEnter = () => setIsTourDropdownOpen(true);
  
  // Xử lý khi chuột đi ra (Đóng Dropdown)
  const handleMouseLeave = () => setIsTourDropdownOpen(false);

  return (
    <header className="navbar">
      <div className="navbar__top">
        <span className="navbar__inquire">For Further Inquires</span>
        <a href="tel:+01977259912" className="navbar__phone">+01 (977) 2599 12</a>
      </div>

      <div className="navbar__main">
        <div className="navbar__brand">TRAVELER</div>

        <nav className="navbar__links">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT US</Link>
          <Link to="/destination">DESTINATION</Link>
          <Link to="/packages">PACKAGES</Link>
          
          {/* ================================================== */}
          {/* DROPDOWN MENU CHO TOUR */}
          {/* ================================================== */}
          <div
            className="dropdown-menu-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Liên kết cha: TOUR */}
            <Link to="/tour" className="nav-link">
              TOUR
            </Link>
            {/* <span className="nav-link">TOUR</span> */}
            {/* Nội dung Dropdown, chỉ hiển thị khi isTourDropdownOpen là true */}
            {isTourDropdownOpen && (
              <div className="tour-dropdown-content">
                {/* Các mục con trong dropdown */}
                <Link to="/tour">Tours</Link>
                <Link to="/tour/guide">Guide</Link>
                <Link to="/tour/grid-2">Tours 2 Grid</Link>
                <Link to="/tour/grid-3">Tours 3 Grid</Link>
                <Link to="/tour/detail">Tours Detail</Link>
              </div>
            )}
          </div>
          {/* ================================================== */}
          
          <Link to="/pages">PAGES</Link>
          <Link to="/contact">CONTACT US</Link>
        </nav>

        <div className="navbar__actions">
          <button className="btn btn--primary">BOOK NOW</button>
          {/* 1. Nút LOGIN */}
          <Link to="/login" className="btn btn--ghost">
            LOGIN
          </Link>
            {/* 2. Nút REGISTER */}
          <Link to="/register" className="btn btn--ghost">
            REGISTER
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;