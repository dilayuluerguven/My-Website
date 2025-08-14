import React from "react";
import { Typography, Row, Col, Divider, Avatar } from "antd";
import { 
  UserOutlined, 
  CodeOutlined, 
  DatabaseOutlined, 
  RocketOutlined,
  PhoneOutlined,
  MailOutlined,
  HomeOutlined,
  CalendarOutlined,
  LinkedinOutlined,
  GithubOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const About = () => {
  return (
    <section
      id="about"
      style={{
        padding: "80px 20px",
        background: "#f0f2f5",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Title level={2} style={{ fontSize: "36px", marginBottom: "10px" }}>
          Hakkımda
        </Title>
        <Divider style={{ maxWidth: "100px", borderColor: "#1890ff" }} />
        
        <Row gutter={[40, 40]} align="middle" style={{ marginTop: "50px" }}>
          <Col xs={24} md={8}>
            <Avatar 
              size={200} 
              icon={<UserOutlined />} 
              style={{ 
                backgroundColor: '#1890ff',
                fontSize: '60px',
                marginBottom: '20px'
              }} 
            />
            <Title level={4} style={{ marginBottom: '5px' }}>Dilay Uluergüven</Title>
            <Text type="secondary">Yazılım Mühendisi</Text>
            
            <div style={{ marginTop: "30px", textAlign: "left" }}>
              <Paragraph>
                <PhoneOutlined style={{ marginRight: "8px" }} /> 
                <Text>0 (507) 900 2276</Text>
              </Paragraph>
              <Paragraph>
                <MailOutlined style={{ marginRight: "8px" }} /> 
                <Text>uluerguven245@gmail.com</Text>
              </Paragraph>
              <Paragraph>
                <HomeOutlined style={{ marginRight: "8px" }} /> 
                <Text>43030 / Kütahya</Text>
              </Paragraph>
              <Paragraph>
                <CalendarOutlined style={{ marginRight: "8px" }} /> 
                <Text>28.04.2003</Text>
              </Paragraph>
              <Paragraph>
                <LinkedinOutlined style={{ marginRight: "8px" }} /> 
                <a href="https://linkedin.com/in/dilay-uluergüven-2b484125b" target="_blank">
                  LinkedIn Profili
                </a>
              </Paragraph>
              <Paragraph>
                <GithubOutlined style={{ marginRight: "8px" }} /> 
                <a href="https://github.com/dilayuluerguven" target="_blank">
                  GitHub Profili
                </a>
              </Paragraph>
            </div>
          </Col>
          
          <Col xs={24} md={16}>
            <Paragraph
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                textAlign: "left",
              }}
            >
              Konya Teknik Üniversitesi Yazılım Mühendisliği 4. sınıf öğrencisiyim (Not Ortalaması: 3.38).
              Yazılım yolculuğuma 1. sınıfta algoritma ve C programlama ile başladım.
              2. sınıfta Java ile OOP ve C# ile Tasarım Desenleri (Design Patterns)
              konularında bilgi edindim. 3. sınıfta ise uzmanlaşmak istediğim alan
              olarak web teknolojilerini seçerek, web geliştirme, kullanıcı arayüzü
              tasarımı ve veritabanı yönetimi gibi konulara odaklandım.
            </Paragraph>
            
            <Title level={4} style={{ textAlign: "left", marginTop: "30px" }}>
              Eğitim
            </Title>
            <Paragraph style={{ textAlign: "left" }}>
              <Text strong>Konya Teknik Üniversitesi</Text><br />
              Mühendislik ve Doğa Bilimleri Fakültesi, Yazılım Mühendisliği<br />
              Eyl 2022 - Devam ediyor<br />
              Not Ortalaması: 3.38
            </Paragraph>
            <Paragraph style={{ textAlign: "left" }}>
              <Text strong>Necip Fazıl Kısakürek Anadolu Lisesi</Text><br />
              Eyl 2017 - Haz 2021
            </Paragraph>
          </Col>
        </Row>

        <Row gutter={[30, 30]} style={{ marginTop: "50px" }}>
          <Col xs={24} md={8}>
            <div style={{ padding: "20px", background: "#fff", borderRadius: "8px", height: "100%" }}>
              <CodeOutlined style={{ fontSize: "36px", color: "#1890ff", marginBottom: "15px" }} />
              <Title level={4}>Frontend</Title>
              <Text>
                JavaScript, ReactJS, Qt (C++), HTML/CSS, Tailwind CSS
              </Text>
            </div>
          </Col>
          
          <Col xs={24} md={8}>
            <div style={{ padding: "20px", background: "#fff", borderRadius: "8px", height: "100%" }}>
              <DatabaseOutlined style={{ fontSize: "36px", color: "#1890ff", marginBottom: "15px" }} />
              <Title level={4}>Backend</Title>
              <Text>
                Node.js, Express.js, ASP.NET Core MVC, Entity Framework
              </Text>
            </div>
          </Col>
          
          <Col xs={24} md={8}>
            <div style={{ padding: "20px", background: "#fff", borderRadius: "8px", height: "100%" }}>
              <RocketOutlined style={{ fontSize: "36px", color: "#1890ff", marginBottom: "15px" }} />
              <Title level={4}>Deneyim</Title>
              <Text>
                <Text strong>TEI TUSAŞ Motor Sanayii A.Ş.</Text><br />
                Stajyer Mühendis (Haz 2025 - Ağu 2025)<br />
                Qt ile manuel test süreçlerini otomatize eden araç geliştirme
              </Text>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default About;