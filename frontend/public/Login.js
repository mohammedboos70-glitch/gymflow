import React from 'react';

function Login() {
  return (
    <div style={{
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      fontFamily: 'Arial', 
      backgroundColor: '#f4f6f9',
      direction: 'rtl'
    }}>
      <div style={{
        padding: '30px', 
        backgroundColor: '#fff', 
        borderRadius: '12px', 
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        width: '320px',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#1a1a1a', marginBottom: '20px' }}>🏋️‍♂️ تسجيل الدخول | GymFlow</h2>
        <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px' }}>أهلاً بك مجدداً في نظام إدارة قاعتك الرياضية</p>
        
        <input type="email" placeholder="البريد الإلكتروني" style={{
          width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box'
        }} />
        
        <input type="password" placeholder="كلمة المرور" style={{
          width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box'
        }} />
        
        <button style={{
          width: '100%', padding: '12px', backgroundColor: '#2ea44f', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold'
        }}>دخول للنظام</button>
      </div>
    </div>
  );
}

export default Login;
