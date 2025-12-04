import React from 'react';
import { FaUser, FaSuitcase, FaChartBar, FaSignOutAlt, FaCog, FaCalendarAlt, FaWallet, FaHeart } from "react-icons/fa";
import { COLORS } from '../../constants';
import { useNavigate } from 'react-router-dom';

// Component nhỏ cho từng dòng menu
const MenuItem = ({ icon, label, active, onClick }) => (
  <div onClick={onClick} style={{
    display: 'flex', alignItems: 'center', gap: 12, padding: '12px 20px', 
    margin: '8px 0', borderRadius: 12, cursor: 'pointer', transition: 'all 0.3s',
    backgroundColor: active ? COLORS.primary : 'transparent',
    color: active ? COLORS.white : COLORS.textGrey,
    fontWeight: active ? 600 : 400
  }}>
    <span style={{ fontSize: 18 }}>{icon}</span>
    <span>{label}</span>
  </div>
);

export default function Sidebar({ role, setRole, activeTab, setActiveTab }) {
 // 2. Khởi tạo biến điều hướng (QUAN TRỌNG: Phải có dòng này để dùng được navigate)
  const navigate = useNavigate();  // Định nghĩa Menu cho từng vai trò
  const menus = {
    seller: [
      { label: 'Dashboard', icon: <FaChartBar /> },
      { label: 'My Tours', icon: <FaSuitcase /> },
      { label: 'Bookings', icon: <FaCalendarAlt /> },
      { label: 'Wallet', icon: <FaWallet /> },
      { label: 'Settings', icon: <FaCog /> },
    ],
    user: [
      { label: 'Dashboard', icon: <FaUser /> },
      { label: 'My Bookings', icon: <FaSuitcase /> },
      { label: 'Wishlist', icon: <FaHeart /> },
      { label: 'Settings', icon: <FaCog /> },
    ]
  };

   const handleLogout = () => {
    // Hỏi người dùng có chắc chắn muốn thoát không
    const confirm = window.confirm("Bạn có chắc chắn muốn đăng xuất?");
    
    if (confirm) {
      // a. Xóa dữ liệu user trong localStorage (nếu bạn có lưu)
      // localStorage.removeItem('user'); 
      // localStorage.removeItem('token'); 

      // b. Chuyển hướng về trang Login
      navigate('/login');
    }
  };
  return (
    <aside style={{ width: 260, backgroundColor: COLORS.white, padding: 24, display: 'flex', flexDirection: 'column', borderRight: '1px solid #eee' }}>
      {/* Logo Area */}
      <div style={{ marginBottom: 40, paddingLeft: 10 }}>
        <h2 style={{ color: COLORS.primary, margin: 0, fontWeight: 800 }}>TRAVEL.<span style={{ color: COLORS.accent }}>GO</span></h2>
        <p style={{ margin: 0, color: COLORS.textGrey, fontSize: 12 }}>{role === 'seller' ? 'Partner Portal' : 'User Portal'}</p>
      </div>

      {/* Menu Items Loop */}
      <div style={{ flex: 1 }}>
        {menus[role].map((item) => (
          <MenuItem 
            key={item.label} 
            {...item} 
            active={activeTab === item.label} 
            onClick={() => setActiveTab(item.label)} 
          />
        ))}
      </div>

      {/* Bottom Actions */}
      <div style={{ borderTop: '1px solid #eee', paddingTop: 20 }}>
          {/* Nút chuyển đổi Role để test */}
          <button onClick={() => setRole(role === 'seller' ? 'user' : 'seller')} style={{ width: '100%', padding: 10, marginBottom: 10, backgroundColor: '#eee', border: 'none', borderRadius: 8, cursor: 'pointer' }}>
              Switch to {role === 'seller' ? 'User' : 'Seller'}
          </button>
          
          <MenuItem label="Logout" icon={<FaSignOutAlt />}
            onClick={handleLogout}  />
      </div>
    </aside>
  );
}