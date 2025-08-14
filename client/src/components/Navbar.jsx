import { Menu, Layout } from 'antd';

const { Header } = Layout;

export default function Navbar() {
  const handleClick = (e) => {
    const idMap = {
      home: 'home',
      about: 'about',
      contact: 'contact',
      projects: 'projects',
    };
    const element = document.getElementById(idMap[e.key]);
    if (element) {
      const yOffset = -64; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  const items = [
    { key: 'home', label: 'Ana Sayfa' },
    { key: 'about', label: 'Hakkımda' },
    { key: 'projects', label: 'Projeler' },
    { key: 'contact', label: 'İletişim' },
  ];

  return (
    <Header style={{ 
      display: 'flex', 
      alignItems: 'center', 
      background: '#fff',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '18px', marginRight: 'auto' }}>Dilay Uluergüven</div>
      <Menu
        mode="horizontal"
        style={{ 
          lineHeight: '64px', 
          flex: 1,
          justifyContent: 'flex-end',
          borderBottom: 'none'
        }}
        items={items}
        onClick={handleClick}
      />
    </Header>
  );
}