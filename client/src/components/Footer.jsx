import { Layout, Typography } from "antd";

const { Footer } = Layout;
const { Text } = Typography;

export default function AppFooter() {  
  const currentYear = new Date().getFullYear();

  return (
    <Footer className="bg-white py-6 border-t border-gray-200 text-center shadow-sm select-none">
      <div className="max-w-4xl mx-auto px-4">
        <Text type="secondary" className="text-sm text-gray-600">
          &copy; {currentYear} Dilay Uluergüven
        </Text>
      </div>
    </Footer>
  );
}