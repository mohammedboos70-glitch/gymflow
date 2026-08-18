import React from 'react';

function Dashboard() {
  return (
    <div style={{ fontFamily: 'Arial', backgroundColor: '#f4f6f9', minHeight: '100vh', direction: 'rtl', padding: '20px' }}>
      {/* الشريط العلوي */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1a1a1a', color: '#fff', padding: '15px 30px', borderRadius: '8px', marginBottom: '20px' }}>
        <h2>📈 لوحة الإدارة الذكية | GymFlow SaaS</h2>
        <div>
          <span style={{ marginLeft: '15px' }}>مرحباً بك، كابتن الصالة 👋</span>
          <button style={{ backgroundColor: '#d9534f', color: '#fff', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer' }}>خروج</button>
        </div>
      </div>

      {/* بطاقات الإحصائيات المالية والاشتراكات */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '20px' }}>
        <div style={{ flex: '1', minWidth: '220px', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', borderRight: '5px solid #2ea44f' }}>
          <p style={{ color: '#666', margin: '0 0 10px 0' }}>إجمالي الأرباح الشهرية</p>
          <h2 style={{ color: '#2ea44f', margin: '0' }}>$4,800</h2>
        </div>
        <div style={{ flex: '1', minWidth: '220px', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', borderRight: '5px solid #0275d8' }}>
          <p style={{ color: '#666', margin: '0 0 10px 0' }}>المشتركون النشطون</p>
          <h2 style={{ color: '#0275d8', margin: '0' }}>48 مشترك</h2>
        </div>
        <div style={{ flex: '1', minWidth: '220px', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', borderRight: '5px solid #f0ad4e' }}>
          <p style={{ color: '#666', margin: '0 0 10px 0' }}>عمليات الدفع عبر Stripe اليوم</p>
          <h2 style={{ color: '#f0ad4e', margin: '0' }}>5 عمليات ناجحة</h2>
        </div>
      </div>

      {/* جدول العمليات الأخير */}
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
        <h3 style={{ marginTop: '0', marginBottom: '15px' }}>🕒 آخر الاشتراكات وتأكيدات الدفع العالمية</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #eee' }}>
              <th style={{ padding: '10px' }}>اسم المشترك</th>
              <th style={{ padding: '10px' }}>الباقة</th>
              <th style={{ padding: '10px' }}>الحالة</th>
              <th style={{ padding: '10px' }}>المبلغ</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '10px' }}>أحمد علي (السعودية)</td>
              <td style={{ padding: '10px' }}>الباقة الذهبية سنوي</td>
              <td style={{ padding: '10px', color: '#2ea44f', fontWeight: 'bold' }}>✅ مدفوع تلقائي</td>
              <td style={{ padding: '10px' }}>$100</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '10px' }}>محمد عمر (الإمارات)</td>
              <td style={{ padding: '10px' }}>باقة الرشاقة شهري</td>
              <td style={{ padding: '10px', color: '#2ea44f', fontWeight: 'bold' }}>✅ مدفوع تلقائي</td>
              <td style={{ padding: '10px' }}>$50</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
