import { Typography, Row, Col, Divider, Card, Tag, Progress } from "antd";
import {
  CodeOutlined,
  DatabaseOutlined,
  RocketOutlined,
  PhoneOutlined,
  MailOutlined,
  HomeOutlined,
  CalendarOutlined,
  LinkedinOutlined,
  GithubOutlined,
  BookOutlined,
  LaptopOutlined,
  ToolOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import "../css/About.css";

const { Title, Paragraph, Text } = Typography;

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

const SkillBar = ({ name, level, color }) => (
  <div className="skill-item">
    <div className="skill-info">
      <Text strong>{name}</Text>
      <Text type="secondary">{level}%</Text>
    </div>
    <Progress
      percent={level}
      showInfo={false}
      strokeColor={color}
      trailColor="#f0f0f0"
    />
  </div>
);

const About = () => {
  const skills = [
    { name: "JavaScript", level: 85, color: "#f7df1e" },
    { name: "React", level: 80, color: "#61dafb" },
    { name: "Node.js", level: 75, color: "#339933" },
    { name: "HTML/CSS", level: 90, color: "#e34f26" },
    { name: "C++/Qt", level: 70, color: "#00599c" },
    { name: "ASP.NET Core", level: 65, color: "#512bd4" },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <FadeIn>
          <div className="about-header">
            <Title level={1} className="about-title">
              Hakkımda
            </Title>
            <Divider className="about-divider" />
            <Paragraph className="about-subtitle">
              Yazılım mühendisliği tutkum ve teknolojiye olan ilgim hakkında
              daha fazla bilgi edinin
            </Paragraph>
          </div>
        </FadeIn>

        <Row gutter={[40, 40]} align="top">
          <Col xs={24} md={8}>
            <FadeIn delay={0.2}>
              <Card className="profile-card">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="profile-image-container">
                    <img
                      src="/images/dilayCvImg.jpg"
                      alt="Dilay Uluergüven"
                      className="profile-image"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/150/1890ff/ffffff?text=D";
                      }}
                    />
                  </div>
                </motion.div>

                <Title level={3} className="profile-name">
                  Dilay Uluergüven
                </Title>
                <Text className="profile-title">Yazılım Mühendisi</Text>

                <Divider className="profile-divider" />

                <div className="contact-info">
                  {[
                    { icon: <PhoneOutlined />, text: "0 (507) 900 2276" },
                    { icon: <MailOutlined />, text: "uluerguven245@gmail.com" },
                    { icon: <HomeOutlined />, text: "43030 / Kütahya" },
                    { icon: <CalendarOutlined />, text: "28.04.2003" },
                  ].map((item, index) => (
                    <Paragraph key={index} className="contact-item">
                      <span className="contact-icon">{item.icon}</span>
                      <Text className="contact-text">{item.text}</Text>
                    </Paragraph>
                  ))}

                  <Paragraph className="contact-item">
                    <LinkedinOutlined className="contact-icon" />
                    <a
                      href="www.linkedin.com/in/dilay-uluergüven-2b484125b"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#1890ff" }}
                    >
                      LinkedIn Profili
                    </a>
                  </Paragraph>

                  <Paragraph className="contact-item">
                    <GithubOutlined className="contact-icon" />
                    <a
                      href="https://github.com/dilayuluerguven"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#1890ff" }}
                    >
                      GitHub Profili
                    </a>
                  </Paragraph>
                </div>
              </Card>
            </FadeIn>
          </Col>

          <Col xs={24} md={16}>
            <FadeIn delay={0.4}>
              <Card className="content-card">
                <Title level={3} className="section-title">
                  <CodeOutlined className="section-icon" />
                  Profesyonel Özet
                </Title>

                <Paragraph className="professional-summary">
                  Konya Teknik Üniversitesi Yazılım Mühendisliği 4. sınıf
                  öğrencisiyim (Not Ortalaması: 3.38). Yazılım yolculuğuma 1.
                  sınıfta algoritma ve C programlama ile başladım. 2. sınıfta
                  Java ile OOP ve C# ile Tasarım Desenleri (Design Patterns)
                  konularında bilgi edindim. 3. sınıfta ise uzmanlaşmak
                  istediğim alan olarak web teknolojilerini seçerek, web
                  geliştirme, kullanıcı arayüzü tasarımı ve veritabanı yönetimi
                  gibi konulara odaklandım.
                </Paragraph>
              </Card>
            </FadeIn>

            <FadeIn delay={0.6}>
              <Card className="content-card">
                <Title level={3} className="section-title">
                  <BookOutlined className="section-icon" />
                  Eğitim
                </Title>

                <div className="education-timeline">
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-line"></div>

                    <Text strong className="timeline-school">
                      Konya Teknik Üniversitesi
                    </Text>
                    <br />
                    <Tag color="blue" style={{ margin: "8px 0" }}>
                      2022 - Devam Ediyor
                    </Tag>
                    <br />
                    <Text
                      type="secondary"
                      style={{ display: "block", marginBottom: "5px" }}
                    >
                      Mühendislik ve Doğa Bilimleri Fakültesi, Yazılım
                      Mühendisliği
                    </Text>
                    <Text>
                      Not Ortalaması: <Text strong>3.38</Text>
                    </Text>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-dot"></div>

                    <Text strong className="timeline-school">
                      Necip Fazıl Kısakürek Anadolu Lisesi
                    </Text>
                    <br />
                    <Tag color="blue" style={{ margin: "8px 0" }}>
                      2017 - 2021
                    </Tag>
                  </div>
                </div>
              </Card>
            </FadeIn>
          </Col>
        </Row>

        <FadeIn delay={0.8}>
          <Card className="content-card skills-container">
            <Title level={3} className="section-title">
              <LaptopOutlined className="section-icon" />
              Teknik Beceriler
            </Title>

            <Row gutter={[24, 24]}>
              <Col xs={24} md={12}>
                <Card className="skill-card">
                  <div className="skill-header">
                    <CodeOutlined className="skill-category-icon" />
                    <Title level={4} className="skill-category-title">
                      Frontend
                    </Title>
                  </div>
                  {skills
                    .filter((skill) =>
                      ["JavaScript", "React", "HTML/CSS", "C++/Qt"].includes(
                        skill.name
                      )
                    )
                    .map((skill) => (
                      <SkillBar key={skill.name} {...skill} />
                    ))}
                </Card>
              </Col>

              <Col xs={24} md={12}>
                <Card className="skill-card">
                  <div className="skill-header">
                    <DatabaseOutlined className="skill-category-icon" />
                    <Title level={4} className="skill-category-title">
                      Backend
                    </Title>
                  </div>
                  {skills
                    .filter((skill) =>
                      ["Node.js", "ASP.NET Core"].includes(skill.name)
                    )
                    .map((skill) => (
                      <SkillBar key={skill.name} {...skill} />
                    ))}

                  <div className="other-tech">
                    <div className="skill-header">
                      <ToolOutlined className="skill-category-icon" />
                      <Text strong>Diğer Teknolojiler</Text>
                    </div>
                    <div className="tech-tags">
                      {[
                        "Git",
                        "REST API",
                        "SQL",
                        "MongoDB",
                        "Entity Framework",
                      ].map((tech) => (
                        <Tag key={tech} color="blue" className="tech-tag">
                          {tech}
                        </Tag>
                      ))}
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Card>
        </FadeIn>

        <FadeIn delay={1}>
          <Card className="content-card">
            <Title level={3} className="section-title">
              <RocketOutlined className="section-icon" />
              Deneyim
            </Title>

            <div className="experience-item">
              <div className="experience-dot"></div>

              <Title level={4} className="experience-company">
                TEI TUSAŞ Motor Sanayii A.Ş.
              </Title>
              <Tag color="blue" style={{ marginBottom: "10px" }}>
                Haz 2025 - Ağu 2025
              </Tag>
              <Text strong className="experience-role">
                Stajyer Mühendis
              </Text>
              <Paragraph className="experience-description">
                Qt framework'ü kullanarak manuel test süreçlerini otomatize eden
                ve test verimliliğini artıran bir araç geliştirdim. Kullanıcı
                arayüzü tasarımı, test senaryolarının otomasyonu ve raporlama
                sistemleri üzerinde çalıştım.
              </Paragraph>

              <Title level={5} className="experience-company">
                Siber Vatan
              </Title>
              <Tag color="blue" style={{ marginBottom: "10px" }}>
                Ara 2024 - Tem 2025
              </Tag>
              <Text strong className="experience-role">
                Öğrenci
              </Text>
              <Paragraph className="experience-description">
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>Penetrasyon Testleri:</strong> Ağ ve web
                    uygulamalarında güvenlik açıklarının tespiti ve sömürülmesi
                    üzerine uygulamalı çalışmalar.
                  </li>
                  <li>
                    <strong>Zararlı Yazılım Analizi:</strong> Malware türlerinin
                    incelenmesi, davranış analizi ve olası tehditlerin
                    belirlenmesi.
                  </li>
                  <li>
                    <strong>Tersine Mühendislik:</strong> Yazılım bileşenlerinin
                    analiz edilmesi, kod çözümleme ve güvenlik açıklarının
                    tespiti.
                  </li>
                  <li>
                    <strong>Linux Sistemleri:</strong> Linux tabanlı işletim
                    sistemlerinde güvenlik, sistem yönetimi ve temel komut
                    satırı becerileri.
                  </li>
                </ul>
              </Paragraph>
            </div>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;
