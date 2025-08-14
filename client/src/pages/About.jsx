import { Typography, Row, Col, Divider, Avatar, Card } from "antd";
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
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const About = () => {
  return (
    <section
      id="about"
      style={{
        padding: "80px 20px",
        background: "#f0f2f5",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <Title level={2} style={{ fontSize: "36px", marginBottom: "10px" }}>
            Hakkımda
          </Title>
          <Divider
            style={{
              maxWidth: "100px",
              borderColor: "#1890ff",
              margin: "0 auto",
            }}
          />
        </div>

        <Row gutter={[40, 40]} align="top">
          <Col xs={24} md={8}>
            <Card
              style={{
                textAlign: "center",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                height: "100%",
                padding: "24px",
              }}
            >
              <Avatar
                size={150}
                icon={<UserOutlined />}
                style={{
                  backgroundColor: "#1890ff",
                  fontSize: "50px",
                  marginBottom: "20px",
                }}
              />
              <Title level={3} style={{ marginBottom: "5px" }}>
                Dilay Uluergüven
              </Title>
              <Text type="secondary" style={{ fontSize: "16px" }}>
                Yazılım Mühendisi
              </Text>

              <Divider style={{ margin: "20px 0" }} />

              <div style={{ textAlign: "left" }}>
                <Paragraph style={{ marginBottom: "15px" }}>
                  <PhoneOutlined
                    style={{
                      color: "#1890ff",
                      fontSize: "16px",
                      marginRight: "10px",
                    }}
                  />
                  <Text>0 (507) 900 2276</Text>
                </Paragraph>

                <Paragraph style={{ marginBottom: "15px" }}>
                  <MailOutlined
                    style={{
                      color: "#1890ff",
                      fontSize: "16px",
                      marginRight: "10px",
                    }}
                  />
                  <Text>uluerguven245@gmail.com</Text>
                </Paragraph>

                <Paragraph style={{ marginBottom: "15px" }}>
                  <HomeOutlined
                    style={{
                      color: "#1890ff",
                      fontSize: "16px",
                      marginRight: "10px",
                    }}
                  />
                  <Text>43030 / Kütahya</Text>
                </Paragraph>

                <Paragraph style={{ marginBottom: "15px" }}>
                  <CalendarOutlined
                    style={{
                      color: "#1890ff",
                      fontSize: "16px",
                      marginRight: "10px",
                    }}
                  />
                  <Text>28.04.2003</Text>
                </Paragraph>

                <Paragraph style={{ marginBottom: "15px" }}>
                  <LinkedinOutlined
                    style={{
                      color: "#1890ff",
                      fontSize: "16px",
                      marginRight: "10px",
                    }}
                  />
                  <a
                    href="www.linkedin.com/in/dilay-uluergüven-2b484125b"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn Profili
                  </a>
                </Paragraph>

                <Paragraph>
                  <GithubOutlined
                    style={{
                      color: "#1890ff",
                      fontSize: "16px",
                      marginRight: "10px",
                    }}
                  />
                  <a
                    href="https://github.com/dilayuluerguven"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Profili
                  </a>
                </Paragraph>
              </div>
            </Card>
          </Col>

          <Col xs={24} md={16}>
            <Card
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                height: "100%",
                marginBottom: "30px",
                padding: "24px",
              }}
            >
              <Paragraph
                style={{
                  fontSize: "16px",
                  lineHeight: 1.8,
                  textAlign: "left",
                  marginBottom: "0",
                }}
              >
                Konya Teknik Üniversitesi Yazılım Mühendisliği 4. sınıf
                öğrencisiyim (Not Ortalaması: 3.38). Yazılım yolculuğuma 1.
                sınıfta algoritma ve C programlama ile başladım. 2. sınıfta Java
                ile OOP ve C# ile Tasarım Desenleri (Design Patterns)
                konularında bilgi edindim. 3. sınıfta ise uzmanlaşmak istediğim
                alan olarak web teknolojilerini seçerek, web geliştirme,
                kullanıcı arayüzü tasarımı ve veritabanı yönetimi gibi konulara
                odaklandım.
              </Paragraph>
            </Card>

            <Card
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                marginBottom: "30px",
              }}
            >
              <Title level={4} style={{ marginBottom: "20px" }}>
                <BookOutlined
                  style={{
                    color: "#1890ff",
                    margin: "30px",
                  }}
                />
                Eğitim
              </Title>

              <div style={{ marginLeft: "34px" }}>
                <Paragraph style={{ marginBottom: "15px" }}>
                  <Text strong style={{ fontSize: "16px" }}>
                    Konya Teknik Üniversitesi
                  </Text>
                  <br />
                  <Text type="secondary">
                    Mühendislik ve Doğa Bilimleri Fakültesi, Yazılım
                    Mühendisliği
                  </Text>
                  <br />
                  <Text>Eyl 2022 - Devam ediyor</Text>
                  <br />
                  <Text>Not Ortalaması: 3.38</Text>
                </Paragraph>

                <Paragraph>
                  <Text strong style={{ fontSize: "16px" }}>
                    Necip Fazıl Kısakürek Anadolu Lisesi
                  </Text>
                  <br />
                  <Text type="secondary">Eyl 2017 - Haz 2021</Text>
                </Paragraph>
              </div>
            </Card>
          </Col>
        </Row>

        <Card
          style={{
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
            marginTop: "30px",
            padding: "24px",
          }}
        >
          <Title level={4} style={{ marginBottom: "10px" }}>
            <LaptopOutlined
              style={{
                color: "#1890ff",
                marginRight: "10px",
              }}
            />
            Teknik Beceriler
          </Title>

          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Card
                style={{
                  background: "#f9f9f9",
                  borderRadius: "8px",
                  height: "100%",
                  width: "100%",
                  border: "none",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "15px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "baseline" }}>
                    <div style={{ display: "flex", alignItems: "baseline" }}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <CodeOutlined
                            style={{
                              color: "#1890ff",
                              fontSize: "20px",
                              flexShrink: 0,
                            }}
                          />
                          <Title
                            level={5}
                            style={{
                              color: "#1890ff",
                              margin: 0,
                              lineHeight: 1,
                              fontSize: "16px",
                            }}
                          >
                            Frontend
                          </Title>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ul
                  style={{
                    paddingLeft: "20px",
                    margin: 0,
                    listStyleType: "none",
                  }}
                >
                  <li style={{ marginBottom: "8px" }}>• JavaScript</li>
                  <li style={{ marginBottom: "8px" }}>• ReactJS</li>
                  <li style={{ marginBottom: "8px" }}>• Qt (C++)</li>
                  <li style={{ marginBottom: "8px" }}>• HTML/CSS</li>
                  <li>• Tailwind CSS</li>
                </ul>
              </Card>
            </Col>

            <Col xs={24} md={12}>
              <Card
                style={{
                  background: "#f9f9f9",
                  borderRadius: "8px",
                  height: "100%",
                  width: "100%",
                  border: "none",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "15px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <DatabaseOutlined
                      style={{
                        color: "#1890ff",
                        fontSize: "20px",
                        marginRight: "10px",
                        flexShrink: 0,
                      }}
                    />
                    <Title
                      level={5}
                      style={{
                        color: "#1890ff",
                        margin: 0,
                        lineHeight: 1,
                      }}
                    >
                      Backend
                    </Title>
                  </div>
                </div>
                <ul
                  style={{
                    paddingLeft: "20px",
                    margin: 0,
                    listStyleType: "none",
                  }}
                >
                  <li style={{ marginBottom: "8px" }}>• Node.js</li>
                  <li style={{ marginBottom: "8px" }}>• Express.js</li>
                  <li style={{ marginBottom: "8px" }}>• ASP.NET Core MVC</li>
                  <li>• Entity Framework</li>
                </ul>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card
          style={{
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
            marginTop: "30px",
            padding: "24px",
          }}
        >
          <Title level={4} style={{ marginBottom: "15px" }}>
            <RocketOutlined
              style={{
                color: "#1890ff",
                marginRight: "10px",
              }}
            />
            İş Deneyimi
          </Title>

          <div style={{ marginLeft: "34px" }}>
            <Title level={5} style={{ marginBottom: "5px" }}>
              TEI TUSAŞ Motor Sanayii A.Ş.
            </Title>
            <Text strong>Stajyer Mühendis</Text>
            <br />
            <Text type="secondary">Haz 2025 - Ağu 2025</Text>
            <Paragraph style={{ marginTop: "10px", marginBottom: "0" }}>
              Qt ile manuel test süreçlerini otomatize eden araç geliştirme
            </Paragraph>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
