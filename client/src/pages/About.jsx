import {
  Typography,
  Row,
  Col,
  Divider,
  Avatar,
  Card,
  Tag,
  Progress,
} from "antd";
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
  GithubOutlined,
  BookOutlined,
  LaptopOutlined,
  TrophyOutlined,
  GlobalOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";

const { Title, Paragraph, Text } = Typography;

// Animasyon bileşenleri
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
  <div style={{ marginBottom: 15 }}>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 5,
      }}
    >
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
    { name: "JavaScript", level: 90, color: "#f7df1e" },
    { name: "React", level: 85, color: "#61dafb" },
    { name: "Node.js", level: 80, color: "#339933" },
    { name: "HTML/CSS", level: 95, color: "#e34f26" },
    { name: "C++/Qt", level: 75, color: "#00599c" },
    { name: "ASP.NET Core", level: 60, color: "#512bd4" },
  ];

  return (
    <section
      id="about"
      style={{
        padding: "80px 20px",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <Title
              level={1}
              style={{
                fontSize: "42px",
                marginBottom: "15px",
                background: "linear-gradient(135deg, #1890ff 0%, #722ed1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Hakkımda
            </Title>
            <Divider
              style={{
                maxWidth: "80px",
                borderWidth: "2px",
                borderColor: "#1890ff",
                margin: "0 auto",
              }}
            />
            <Paragraph
              style={{
                fontSize: "18px",
                maxWidth: "600px",
                margin: "20px auto 0",
                color: "#666",
              }}
            >
              Yazılım mühendisliği tutkum ve teknolojiye olan ilgim hakkında
              daha fazla bilgi edinin.
            </Paragraph>
          </div>
        </FadeIn>

        <Row gutter={[40, 40]} align="top">
          <Col xs={24} md={8}>
            <FadeIn delay={0.2}>
              <Card
                style={{
                  textAlign: "center",
                  borderRadius: "15px",
                  boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
                  height: "100%",
                  padding: "30px 20px",
                  background: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(10px)",
                  border: "none",
                }}
                bodyStyle={{ padding: 0 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Avatar
                    size={150}
                    src="/src/assets/dilayCvImg.jpg" 
                    style={{
                      marginBottom: "25px",
                      boxShadow: "0 5px 15px rgba(24, 144, 255, 0.3)",
                    }}
                  />
                </motion.div>

                <Title
                  level={3}
                  style={{ marginBottom: "5px", color: "#262626" }}
                >
                  Dilay Uluergüven
                </Title>
                <Text
                  type="secondary"
                  style={{ fontSize: "16px", color: "#595959" }}
                >
                  Yazılım Mühendisi
                </Text>

                <Divider style={{ margin: "25px 0", borderColor: "#f0f0f0" }} />

                <div style={{ textAlign: "left", padding: "0 15px" }}>
                  {[
                    { icon: <PhoneOutlined />, text: "0 (507) 900 2276" },
                    { icon: <MailOutlined />, text: "uluerguven245@gmail.com" },
                    { icon: <HomeOutlined />, text: "43030 / Kütahya" },
                    { icon: <CalendarOutlined />, text: "28.04.2003" },
                  ].map((item, index) => (
                    <Paragraph
                      key={index}
                      style={{
                        marginBottom: "15px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          color: "#1890ff",
                          fontSize: "16px",
                          marginRight: "12px",
                          minWidth: "20px",
                        }}
                      >
                        {item.icon}
                      </span>
                      <Text style={{ color: "#595959" }}>{item.text}</Text>
                    </Paragraph>
                  ))}

                  <Paragraph
                    style={{
                      marginBottom: "15px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <LinkedinOutlined
                      style={{
                        color: "#1890ff",
                        fontSize: "16px",
                        marginRight: "12px",
                      }}
                    />
                    <a
                      href="www.linkedin.com/in/dilay-uluergüven-2b484125b"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#1890ff" }}
                    >
                      LinkedIn Profili
                    </a>
                  </Paragraph>

                  <Paragraph style={{ display: "flex", alignItems: "center" }}>
                    <GithubOutlined
                      style={{
                        color: "#1890ff",
                        fontSize: "16px",
                        marginRight: "12px",
                      }}
                    />
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
              <Card
                style={{
                  borderRadius: "15px",
                  boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
                  height: "100%",
                  marginBottom: "30px",
                  padding: "30px",
                  background: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(10px)",
                  border: "none",
                }}
              >
                <Title
                  level={3}
                  style={{
                    marginBottom: "20px",
                    color: "#262626",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <UserOutlined
                    style={{ color: "#1890ff", marginRight: "10px" }}
                  />
                  Profesyonel Özet
                </Title>

                <Paragraph
                  style={{
                    fontSize: "16px",
                    lineHeight: 1.8,
                    textAlign: "left",
                    marginBottom: "0",
                    color: "#595959",
                  }}
                >
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
              <Card
                style={{
                  borderRadius: "15px",
                  boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
                  marginBottom: "30px",
                  padding: "30px",
                  background: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(10px)",
                  border: "none",
                }}
              >
                <Title
                  level={3}
                  style={{
                    marginBottom: "25px",
                    color: "#262626",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <BookOutlined
                    style={{ color: "#1890ff", marginRight: "10px" }}
                  />
                  Eğitim
                </Title>

                <div style={{ paddingLeft: "10px" }}>
                  <div
                    style={{
                      marginBottom: "30px",
                      position: "relative",
                      paddingLeft: "30px",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 5,
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        background: "#1890ff",
                      }}
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "7px",
                        top: "21px",
                        bottom: "-25px",
                        width: "2px",
                        background: "#1890ff",
                        opacity: 0.3,
                      }}
                    ></div>

                    <Text strong style={{ fontSize: "18px", color: "#262626" }}>
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

                  <div style={{ position: "relative", paddingLeft: "30px" }}>
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 5,
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        background: "#1890ff",
                      }}
                    ></div>

                    <Text strong style={{ fontSize: "18px", color: "#262626" }}>
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
          <Card
            style={{
              borderRadius: "15px",
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
              marginTop: "30px",
              padding: "30px",
              background: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(10px)",
              border: "none",
            }}
          >
            <Title
              level={3}
              style={{
                marginBottom: "25px",
                color: "#262626",
                display: "flex",
                alignItems: "center",
              }}
            >
              <LaptopOutlined
                style={{ color: "#1890ff", marginRight: "10px" }}
              />
              Teknik Beceriler
            </Title>

            <Row gutter={[24, 24]}>
              <Col xs={24} md={12}>
                <Card
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    borderRadius: "12px",
                    height: "100%",
                    border: "none",
                    padding: "20px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <CodeOutlined
                      style={{
                        color: "#1890ff",
                        fontSize: "24px",
                        marginRight: "12px",
                      }}
                    />
                    <Title level={4} style={{ margin: 0, color: "#262626" }}>
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
                <Card
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    borderRadius: "12px",
                    height: "100%",
                    border: "none",
                    padding: "20px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <DatabaseOutlined
                      style={{
                        color: "#1890ff",
                        fontSize: "24px",
                        marginRight: "12px",
                      }}
                    />
                    <Title level={4} style={{ margin: 0, color: "#262626" }}>
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

                  <div style={{ marginTop: "20px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "15px",
                      }}
                    >
                      <ToolOutlined
                        style={{
                          color: "#1890ff",
                          fontSize: "20px",
                          marginRight: "12px",
                        }}
                      />
                      <Text strong>Diğer Teknolojiler</Text>
                    </div>
                    <div
                      style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
                    >
                      {[
                        "Git",
                        "REST API",
                        "SQL",
                        "MongoDB",
                        "Entity Framework",
                      ].map((tech) => (
                        <Tag
                          key={tech}
                          color="blue"
                          style={{ borderRadius: "12px", padding: "5px 12px" }}
                        >
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
          <Card
            style={{
              borderRadius: "15px",
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
              marginTop: "30px",
              padding: "30px",
              background: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(10px)",
              border: "none",
            }}
          >
            <Title
              level={3}
              style={{
                marginBottom: "25px",
                color: "#262626",
                display: "flex",
                alignItems: "center",
              }}
            >
              <RocketOutlined
                style={{ color: "#1890ff", marginRight: "10px" }}
              />
              İş Deneyimi
            </Title>

            <div style={{ position: "relative", paddingLeft: "30px" }}>
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 5,
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  background: "#1890ff",
                }}
              ></div>

              <Title
                level={4}
                style={{ marginBottom: "5px", color: "#262626" }}
              >
                TEI TUSAŞ Motor Sanayii A.Ş.
              </Title>
              <Tag color="blue" style={{ marginBottom: "10px" }}>
                Haz 2025 - Ağu 2025
              </Tag>
              <Text
                strong
                style={{
                  display: "block",
                  marginBottom: "10px",
                  color: "#1890ff",
                }}
              >
                Stajyer Mühendis
              </Text>
              <Paragraph
                style={{
                  marginTop: "10px",
                  marginBottom: "0",
                  color: "#595959",
                }}
              >
                Qt framework'ü kullanarak manuel test süreçlerini otomatize eden
                ve test verimliliğini artıran bir araç geliştirdim. Kullanıcı
                arayüzü tasarımı, test senaryolarının otomasyonu ve raporlama
                sistemleri üzerinde çalıştım.
              </Paragraph>
            </div>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;
