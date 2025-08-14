import { Card, Row, Col } from 'antd';

const Project = () => {
  const projects = [
    { 
      title: "Proje 1", 
      description: "Bu proje hakkında kısa bir açıklama.",
      link: "#"
    },
    { 
      title: "Proje 2", 
      description: "Bu proje hakkında kısa bir açıklama.",
      link: "#"
    },
    { 
      title: "Proje 3", 
      description: "Bu proje hakkında kısa bir açıklama.",
      link: "#"
    },
    { 
      title: "Proje 4", 
      description: "Bu proje hakkında kısa bir açıklama.",
      link: "#"
    }
  ];

  return (
    <section id="projects" style={{ padding: '100px 20px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '36px', marginBottom: '40px' }}>Projelerim</h2>
      <Row gutter={[16, 16]} justify="center">
        {projects.map((project, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card 
              title={project.title} 
              hoverable
              style={{ height: '100%' }}
              onClick={() => window.open(project.link, '_blank')}
            >
              <p>{project.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Project;