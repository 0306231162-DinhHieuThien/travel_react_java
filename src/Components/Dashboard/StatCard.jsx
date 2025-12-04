import React from 'react';
import { COLORS } from '../../constants';


const cardStyle = {
  backgroundColor: COLORS.white,
  borderRadius: 15,
  padding: 24,
  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
  flex: 1,
  minWidth: 200, // Đảm bảo không bị quá nhỏ trên màn hình bé
};

export default function StatCard({ item }) {
  return (
    <div style={{ ...cardStyle, display: 'flex', alignItems: 'center', gap: 20 }}>
      <div style={{ 
        width: 60, height: 60, borderRadius: '50%', 
        backgroundColor: item.color + '20', // Màu nhạt (opacity 20%)
        color: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 
      }}>
        {item.icon}
      </div>
      <div>
        <h3 style={{ margin: 0, fontSize: 28, color: COLORS.textDark }}>{item.value}</h3>
        <p style={{ margin: 0, color: COLORS.textGrey }}>{item.label}</p>
      </div>
    </div>
  );
}