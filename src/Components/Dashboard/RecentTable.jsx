import React from 'react';
import { COLORS } from '../../constants';

export default function RecentTable({ data }) {
  return (
    <div style={{ 
      backgroundColor: COLORS.white,
      borderRadius: 15,
      padding: 24,
      boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
      marginTop: 24
    }}>
      <h3 style={{ marginTop: 0, marginBottom: 20, color: COLORS.textDark }}>Recent Bookings</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ color: COLORS.textGrey, borderBottom: '1px solid #eee' }}>
            <th style={{ padding: 12 }}>ID</th>
            <th style={{ padding: 12 }}>Tour Name</th>
            <th style={{ padding: 12 }}>Date</th>
            <th style={{ padding: 12 }}>Amount</th>
            <th style={{ padding: 12 }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} style={{ borderBottom: '1px solid #f5f5f5' }}>
              <td style={{ padding: 12, fontWeight: 600, color: COLORS.primary }}>{row.id}</td>
              <td style={{ padding: 12, color: COLORS.textDark }}>{row.tour}</td>
              <td style={{ padding: 12, color: COLORS.textGrey }}>{row.date}</td>
              <td style={{ padding: 12, fontWeight: 'bold' }}>{row.amount}</td>
              <td style={{ padding: 12 }}>
                <span style={{ 
                  padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 600,
                  backgroundColor: row.status === 'Completed' ? '#E6F7E9' : row.status === 'Pending' ? '#FFF4E5' : '#FFEEEE',
                  color: row.status === 'Completed' ? '#28A745' : row.status === 'Pending' ? '#FFAA00' : '#DC3545'
                }}>
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}