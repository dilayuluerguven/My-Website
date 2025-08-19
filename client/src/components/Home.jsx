import { Button, Card, Row, Col } from "antd";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  CodeOutlined,
  RocketOutlined,
  GithubOutlined,
  LinkedinOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import "../css/Home.css";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const fullText =
    "const developer = new FullStackDeveloper('Dilay Uluergüven');";
  const codeLines = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    content:
      i % 3 === 0
        ? "function() {"
        : i % 3 === 1
        ? "const code = 'creative';"
        : "return <AwesomeCode />;",
    top: Math.random() * 100,
    left: Math.random() * 100,
    animationDelay: Math.random() * 5,
  }));

  useEffect(() => {
    setIsVisible(true);

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);

        setInterval(() => {
          setCursorVisible((prev) => !prev);
        }, 500);
      }
    }, 100);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <div>
      <motion.section
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hero-section"
      >
        <div className="terminal-window"></div>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
        
          <Button
            className="terminal-btn-secondary"
            size="large"
            icon={<DownloadOutlined />}
          >
            <a
              href="/src/assets/DilayCv.pdf"
              download
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Özgeçmişim
            </a>
          </Button>
        </motion.div>

        <motion.div
          className="social-icons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <a
            href="https://github.com/dilayuluerguven"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubOutlined />
          </a>
          <a
            href="https://www.linkedin.com/in/dilay-uluerg%C3%BCven-2b484125b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinOutlined />
          </a>
        </motion.div>
      </motion.section>
    </div>
  );
}
