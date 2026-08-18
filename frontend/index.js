import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h1>🏋️‍♂️ GymFlow SaaS - Dashboard</h1>
      <p>مرحباً بك في لوحة تحكم إدارة الصالات الرياضية والاشتراكات العالمية.</p>
      <div style={{ padding: '20px', border: '1px solid #ccc', display: 'inline-block', borderRadius: '10px' }}>
        <h3>💳 نظام الفواتير المؤتمت عبر Stripe جاهز للعمل بره العراق</h3>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
