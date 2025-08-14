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
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const items = [
    { key: 'home', label: 'Ana Sayfa' },
    { key: 'about', label: 'Hakkımda' },
    { key: 'contact', label: 'İletişim' },
    { key: 'projects', label: 'Projeler' },
  ];

  return (
    <Header style={{ display: 'flex', alignItems: 'center', background: '#fff' }}>
      <div style={{ fontWeight: 'bold', fontSize: '18px', marginRight: 'auto' }}>Navbar</div>
      <Menu
        mode="horizontal"
        style={{ lineHeight: '64px', flex: 1 }}
        items={items}
        onClick={handleClick}
      />
    </Header>
  );
}
