import { Card, Row, Col } from 'antd';

const Project = () => {
  const projects = [
    { 
      title: "Fake Tweet Generator", 
      description: "Gerçekçi sahte tweetler oluşturmak için bir web uygulaması. Kullanıcılar isim, avatar ve içerikleri özelleştirerek ikna edici tweetler oluşturabilir ve çıktıyı PNG görüntüsü olarak alabilirler.",
      link: "https://my-fake-tweet-app-2025.netlify.app",
      image: "/images/fake-tweet-proje-resmi.png"
    },
    { 
      title: "SpendMoney App", 
      description: "Gelir ve giderleri kaydetmek, özetleri görüntülemek ve grafikleri kullanarak bütçeni takip etmek için React ve Vite ile geliştirilmiş bir harcama takip uygulaması.",
      link: "https://my-spendmoney-app-2025.netlify.app",
      image: "/images/spendmoney.png"
    },
    { 
      title: "InnoPaper System", 
      description: "InnoPaper, kullanıcıların akademik makalelerini yükleyebildiği, ilgili kanıtları ekleyebildiği ve formları otomatik olarak doldurabildiği bir web tabanlı sistemdir. Sistem, doğrulama işlemlerini kolaylaştırır ve sonuçları PDF formatında sunarak süreçleri hızlandırır.",
      link: "https://innopaper-system.netlify.app/",
      image: "/images/makale.png" 
    },
    // { 
    //   title: "Proje 4", 
    //   description: "Bu proje hakkında kısa bir açıklama.",
    //   link: "#",
    //   image: null
    // }
  ];

  const placeholderImage = "/images/placeholder.png"; 

  return (
    <section id="projects" style={{ padding: '100px 20px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '36px', marginBottom: '40px' }}>Projelerim</h2>
      <Row gutter={[16, 16]} justify="center">
        {projects.map((project, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card 
              hoverable
              cover={
                <img 
                  alt={project.title} 
                  src={project.image ? project.image : placeholderImage} 
                  style={{ objectFit: 'cover', height: '200px', width: '100%' }} 
                />
              }
              style={{ height: '100%' }}
              onClick={() => window.open(project.link, '_blank')}
            >
              <Card.Meta 
                title={project.title}
                description={project.description} 
              />
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Project;
