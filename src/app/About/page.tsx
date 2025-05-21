import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="py-6 flex justify-center">
        <div className="flex space-x-8 px-4 py-2 bg-black/80 rounded-full">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-white font-medium">
            About Us
          </Link>
          <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">
            Portfolio
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 max-w-4xl">
        {/* Header Section */}
        <section className="py-16">
          <h1 className="text-4xl font-bold mb-2">About Mekanikace</h1>
          <p className="text-gray-400">Discover the story, mission, and people behind everything we do.</p>
        </section>

        {/* About Text */}
        <section className="py-8">
          <p className="mb-6">
            <span className="font-medium">Mekanikace is a technology solutions provider</span>{" "}
            <span className="text-gray-400">
              focused on delivering innovative tools to help your business grow and transform in the digital era. We are
              committed to delivering optimal results through carefully designed solutions tailored to meet your
              specific business needs.
            </span>
          </p>
          <p className="text-gray-400">
            By prioritizing quality and reliability, Mekanikace ensures every service we offer is built to last. We are
            here to support your digital goals with effective and sustainable solutions that drive real progress.
          </p>
        </section>

        {/* Team Button */}
        <section className="py-16 flex justify-center">
          <Button className="bg-red-700 hover:bg-red-800 text-white rounded-full px-6 py-2 flex items-center">
            <span className="mr-2">❤</span> Our Dedicated Professionals
          </Button>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Vision & Mission</h2>
          </div>
          <div className="md:col-span-2 space-y-12">
            <div>
              <h3 className="flex items-center text-xl font-medium mb-4">
                <span className="mr-2">↗</span> Vision
              </h3>
              <p className="text-gray-400">
                Our vision is to be a leading partner for businesses in delivering innovative and reliable technology
                solutions, which drive growth and readiness to face challenges in the digital era.
              </p>
            </div>
            <div>
              <h3 className="flex items-center text-xl font-medium mb-4">
                <span className="mr-2">◉</span> Mission
              </h3>
              <p className="text-gray-400">
                Our mission is to provide quality technology solutions specifically designed to drive business growth in
                the digital era, prioritizing innovation and reliability in every service. We are committed to building
                long-term relationships based on trust, transparency, and responsive support, and adapting to the latest
                technological developments to meet dynamic business needs and help clients achieve their goals
                efficiently and effectively.
              </p>
            </div>
          </div>
        </section>

        {/* Commitment */}
        <section className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Commitment</h2>
          </div>
          <div className="md:col-span-2 space-y-12">
            <div>
              <h3 className="flex items-center text-xl font-medium mb-4">
                <span className="mr-2">⚡</span> Product Quality
              </h3>
              <p className="text-gray-400">
                We provide a guarantee for every product we make, ensuring the best quality for you.
              </p>
            </div>
            <div>
              <h3 className="flex items-center text-xl font-medium mb-4">
                <span className="mr-2">⚡</span> Quick Response
              </h3>
              <p className="text-gray-400">
                We are always ready to help and answer any of your questions with a fast and professional response.
              </p>
            </div>
            <div>
              <h3 className="flex items-center text-xl font-medium mb-4">
                <span className="mr-2">🛡️</span> Warranty & Support
              </h3>
              <p className="text-gray-400">
                We offer a full warranty at no additional cost in the event of product failure, as well as ongoing
                technical support.
              </p>
            </div>
            <div>
              <h3 className="flex items-center text-xl font-medium mb-4">
                <span className="mr-2">💛</span> Commitment to Clients
              </h3>
              <p className="text-gray-400">
                We are committed to maintaining a good relationship with each client, ensuring that each project meets
                your expectations and needs.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 mt-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-sm text-gray-500 mb-4">
                Mekanikace delivers innovative and reliable tech solutions tailored to your business. We’re here to empower your growth and drive real progress in the digital era.
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-gray-500 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-white">
                  <span className="sr-only">WhatsApp</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Website Development</li>
                <li>Mobile Development</li>
                <li>Machine Learning Solutions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Whatsapp Gateway</li>
                <li>Chatbot</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Large Logo */}
      <div className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <h1 className="text-7xl md:text-8xl font-bold">Mekanikace</h1>
        </div>
      </div>
    </div>
  )
}