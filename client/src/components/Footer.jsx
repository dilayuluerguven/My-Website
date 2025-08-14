import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

export default function footer() {
  return (
    <Footer style={{ textAlign: 'center', background: '#001529', color: '#fff', padding: '40px 20px' }}>
      <div style={{ marginBottom: '10px', fontSize: '18px', fontWeight: 'bold' }}>My Website</div>
      <div style={{ marginBottom: '10px' }}>
        &copy; {new Date().getFullYear()} Tüm hakları saklıdır.
      </div>
      <div>
        <a href="#home" style={{ color: '#fff', margin: '0 10px' }}>Ana Sayfa</a>
        <a href="#about" style={{ color: '#fff', margin: '0 10px' }}>Hakkımda</a>
        <a href="#projects" style={{ color: '#fff', margin: '0 10px' }}>Projeler</a>
        <a href="#contact" style={{ color: '#fff', margin: '0 10px' }}>İletişim</a>
      </div>
    </Footer>
  );
}
