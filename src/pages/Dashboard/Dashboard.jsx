import React, { useState } from 'react';
import { FaSuitcase, FaCalendarAlt, FaWallet, FaHeart } from "react-icons/fa";
import { COLORS } from '../../constants';
// IMPORT CÁC COMPONENT VỪA TẠO
import Sidebar from '../../Components/Dashboard/Sidebar';
import StatCard from '../../Components/Dashboard/StatCard';
import RecentTable from '../../Components/Dashboard/RecentTable';



// --- DỮ LIỆU GIẢ LẬP ---
const sellerStats = [
  { label: 'Total Earnings', value: '$4,250', icon: <FaWallet />, color: COLORS.primary },
  { label: 'Total Bookings', value: '128', icon: <FaSuitcase />, color: COLORS.accent },
  { label: 'Upcoming Tours', value: '12', icon: <FaCalendarAlt />, color: '#7B61FF' },
];

const userStats = [
  { label: 'Trips Taken', value: '05', icon: <FaSuitcase />, color: COLORS.primary },
  { label: 'Wishlist', value: '12', icon: <FaHeart />, color: COLORS.danger },
  { label: 'Wallet Point', value: '350', icon: <FaWallet />, color: COLORS.accent },
];

const recentBookings = [
  { id: '#TRX-9871', tour: 'Bali Adventure', date: '02 Oct 2023', amount: '$450', status: 'Pending' },
  { id: '#TRX-9872', tour: 'Paris City Tour', date: '15 Oct 2023', amount: '$200', status: 'Completed' },
  { id: '#TRX-9873', tour: 'Tokyo Hidden Gems', date: '20 Nov 2023', amount: '$850', status: 'Cancelled' },
];

export default function DashboardPage() {
  const [role, setRole] = useState('seller'); 
  const [activeTab, setActiveTab] = useState('Dashboard');

  // Giao diện nội dung User (Có thể tách ra file riêng nếu muốn gọn hơn nữa)
  const UserContent = () => (
    <div>
        <div style={{ display: 'flex', gap: 24, marginTop: 10 }}>
           <div style={{ backgroundColor: 'white', borderRadius: 15, padding: 24, flex: 2, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <h3 style={{ marginTop: 0, color: COLORS.textDark }}>Next Trip</h3>
              <div style={{ display: 'flex', gap: 20, marginTop: 16 }}>
                 <img src="https://images.unsplash.com/photo-1537996194471-e657df975ab4" alt="Bali" style={{ width: 120, height: 120, borderRadius: 12, objectFit: 'cover' }} />
                 <div>
                    <h4 style={{ margin: '0 0 8px', fontSize: 18 }}>Bali High Waterfall</h4>
                    <p style={{ margin: '0 0 8px', color: COLORS.textGrey }}><FaCalendarAlt style={{ marginRight: 6 }}/> 25 Dec, 2025</p>
                    <div style={{ display: 'flex', gap: 10 }}>
                       <button style={{ padding: '8px 16px', backgroundColor: COLORS.primary, color: 'white', border: 'none', borderRadius: 8, cursor: 'pointer' }}>View Details</button>
                    </div>
                 </div>
              </div>
           </div>
        </div>
    </div>
  );

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: COLORS.bgBody, fontFamily: 'sans-serif' }}>
      
      {/* 1. SIDEBAR */}
      <Sidebar 
        role={role} 
        setRole={setRole} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />

      {/* 2. MAIN CONTENT */}
      <main style={{ flex: 1, padding: 40, overflowY: 'auto' }}>
         {/* Header */}
         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 }}>
            <div>
              <h1 style={{ margin: 0, fontSize: 24 }}>{activeTab}</h1>
              <p style={{ margin: 0, color: COLORS.textGrey }}>Overview of your activity</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                <div style={{ textAlign: 'right' }}>
                    <p style={{ margin: 0, fontWeight: 'bold' }}>{role === 'seller' ? 'Mr. Murphy' : 'Jenny Kim'}</p>
                    <p style={{ margin: 0, fontSize: 12, color: COLORS.textGrey }}>{role === 'seller' ? 'Top Guide' : 'Gold Member'}</p>
                </div>
                <img src={role === 'seller' ? "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" : "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80"} 
                     alt="Avatar" 
                     style={{ width: 45, height: 45, borderRadius: '50%', objectFit: 'cover', border: `2px solid ${COLORS.primary}` }} />
            </div>
         </div>

         {/* 3. Hiển thị Stats Card (Chung cho cả 2 role) */}
         <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 24 }}>
            {(role === 'seller' ? sellerStats : userStats).map((stat, idx) => (
                <StatCard key={idx} item={stat} />
            ))}
         </div>

         {/* 4. Hiển thị nội dung riêng */}
         {role === 'seller' ? (
             <RecentTable data={recentBookings} />
         ) : (
             <UserContent />
         )}

      </main>
    </div>
  );
}