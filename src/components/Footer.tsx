// src/components/Footer.tsx
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 mt-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Footer Text */}
        <div>
          <h1 className="text-7xl font-bold leading-tight">Mekanikace</h1>
          <p className="text-xl mt-4">
            Mekanikace delivers innovative and reliable tech solutions tailored to your business. We’re here to empower your growth and drive real progress in the digital era.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 my-8">
          <Link href="#">
            <span className="text-xl">Q</span>
          </Link>
          <Link href="#">
            <span className="text-xl">Q</span>
          </Link>
          <Link href="#">
            <span className="text-xl">Q</span>
          </Link>
        </div>

        {/* Services & Products Sections */}
        <div className="grid grid-cols-2 gap-12">
          {/* Services */}
          <div>
            <h4 className="text-2xl font-bold mb-4">Services</h4>
            <ul>
              <li><Link href="#">Website Development</Link></li>
              <li><Link href="#">Mobile Development</Link></li>
              <li><Link href="#">Machine Learning Solutions</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-2xl font-bold mb-4">Products</h4>
            <ul>
              <li><Link href="#">Whatsapp Gateway</Link></li>
              <li><Link href="#">Chatbot</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
