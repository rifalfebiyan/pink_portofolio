import React, { useState } from 'react';
import { Home, User, Code, Mail, Briefcase, Star, Github, Linkedin, Twitter, Menu, X } from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

// Main App component
const HomePage = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dummy data for skills with pink/rose colors
  const skillsData = [
    { name: 'React', value: 90, color: '#F472B6' },
    { name: 'JavaScript', value: 85, color: '#EC4899' },
    { name: 'Tailwind CSS', value: 80, color: '#DB2777' },
    { name: 'Node.js', value: 70, color: '#BE185D' },
    { name: 'HTML/CSS', value: 95, color: '#A21CAF' },
  ];

  // Dummy data for projects
  const projects = [
    {
      id: 1,
      title: 'Aplikasi Manajemen Tugas',
      description: 'Aplikasi web untuk mengelola tugas harian, dengan fitur tambah, edit, dan hapus tugas.',
      tech: ['React', 'Tailwind CSS', 'Node.js'],
      link: '#',
      image: 'https://placehold.co/400x250/FBCFE8/881337?text=Proyek+1'
    },
    {
      id: 2,
      title: 'Situs E-commerce Sederhana',
      description: 'Prototipe situs e-commerce dengan daftar produk, keranjang belanja, dan halaman checkout.',
      tech: ['React', 'CSS Modul'],
      link: '#',
      image: ' https://placehold.co/400x250/FBCFE8/881337?text=Proyek+2'
    },
    {
      id: 3,
      title: 'Blog Pribadi',
      description: 'Platform blog responsif untuk berbagi artikel dan pemikiran, dengan sistem komentar.',
      tech: ['Next.js', 'Markdown'],
      link: '#',
      image: ' https://placehold.co/400x250/FBCFE8/881337?text=Proyek+3'
    },
  ];

  // Function to handle navigation
  const navigateTo = (section) => {
    setActiveSection(section);
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <div className="min-h-screen bg-pink-50 font-sans text-gray-800">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white shadow-lg z-50 p-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-lg sm:text-xl md:text-2xl font-bold text-rose-600">Portofolio Saya</div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600 hover:text-rose-600 focus:outline-none">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
          {/* Desktop navigation links */}
          <div className="hidden md:flex space-x-6">
            <NavItem icon={Home} label="Beranda" onClick={() => navigateTo('home')} active={activeSection === 'home'} />
            <NavItem icon={User} label="Tentang" onClick={() => navigateTo('about')} active={activeSection === 'about'} />
            <NavItem icon={Code} label="Keahlian" onClick={() => navigateTo('skills')} active={activeSection === 'skills'} />
            <NavItem icon={Briefcase} label="Proyek" onClick={() => navigateTo('projects')} active={activeSection === 'projects'} />
            <NavItem icon={Mail} label="Kontak" onClick={() => navigateTo('contact')} active={activeSection === 'contact'} />
          </div>
        </div>
        {/* Mobile navigation menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-2 items-center">
            <NavItem icon={Home} label="Beranda" onClick={() => navigateTo('home')} active={activeSection === 'home'} />Beranda
            <NavItem icon={User} label="Tentang" onClick={() => navigateTo('about')} active={activeSection === 'about'} />Tentang
            <NavItem icon={Code} label="Keahlian" onClick={() => navigateTo('skills')} active={activeSection === 'skills'} />Keahlian
            <NavItem icon={Briefcase} label="Proyek" onClick={() => navigateTo('projects')} active={activeSection === 'projects'} />Proyek
            <NavItem icon={Mail} label="Kontak" onClick={() => navigateTo('contact')} active={activeSection === 'contact'} />Kontak
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-24 pb-16 bg-gradient-to-r from-pink-400 to-rose-600 text-white flex items-center justify-center min-h-screen-75 rounded-b-3xl shadow-lg">
      <div className="container mx-auto text-center p-6">
        <img
          src="/profile.jpg"
          alt="Profile"
  className="w-36 h-36 rounded-full mx-auto mb-6 border-4 border-white shadow-xl object-cover object-position-top"
        />
        <h1 className="text-5xl font-extrabold mb-4 leading-tight">Halo, Saya Lifa</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Seorang pengembang web yang bersemangat dengan fokus pada pembuatan pengalaman digital yang indah dan fungsional.
        </p>
        <button
          onClick={() => navigateTo('projects')}
          className="bg-white text-rose-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-100 transition duration-300 transform hover:scale-105 shadow-xl"
        >
          Lihat Proyek Saya
        </button>
      </div>
    </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-white rounded-3xl shadow-md mx-6 my-10 p-8">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-rose-700 mb-12">Tentang Saya</h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="./kampus-uad.jpg"
                alt="Tentang Saya"
                className="rounded-3xl shadow-xl w-full h-auto"
                onError={(e) => { e.target.onerror = null; e.target.src=" https://placehold.co/500x350/FCE7F3/BE185D?text=Tentang+Saya"; }}
              />
            </div>
            <div className="md:w-1/2 text-lg leading-relaxed text-gray-700">
              <p className="mb-4">
                Lulusan S1 Informatika Universitas Ahmad Dahlan. Memiliki minat kuat di bidang UI/UX Design, Web Desain, Desain Grafis, Analisis Data dan Front end Development. Terampil menggunakan Figma, HTML, CSS dan berbagai tools desain. Berpengalaman dalam proyek riil yang melibatkan desain antarmuka pengguna, pengembangan website, serta pengelolaan konten digital.
              </p>
              <p className="mb-4">
                Saya pernah menjadi asisten laboratorium di Universitas Ahmad Dahlan. Sekarang saya bekerja part time sebagai koordinator desain grafis konten Instagram dan registrasi di Museum Muhammadiyah sehingga memiliki keterampilan dalam bidang komunikasi, design, kreatif digital, administrasi data, kepemimpinan dan kolaborasi tim. 
              </p>
              {/* <p>
                Saya percaya bahwa setiap proyek adalah kesempatan untuk belajar dan berkembang, dan saya selalu siap menghadapi tantangan baru.
              </p> */}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-pink-50 rounded-3xl shadow-md mx-6 my-10 p-8">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-rose-700 mb-12">Keahlian Saya</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-wrap justify-center gap-6">
              {skillsData.map((skill, index) => (
                <div key={index} className="flex flex-col items-center p-4 bg-white rounded-3xl shadow-lg transform hover:scale-105 transition duration-300">
                  <Star className="text-pink-500 w-10 h-10 mb-2" />
                  <span className="text-xl font-semibold text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
            <div className="w-full h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={skillsData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {skillsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white rounded-3xl shadow-md mx-6 my-10 p-8">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-rose-700 mb-12">Proyek Pilihan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-pink-50 rounded-3xl shadow-md mx-6 my-10 p-8">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-rose-700 mb-12">Hubungi Saya</h2>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-xl">
            <p className="text-lg text-center mb-8 text-gray-700">
              Tertarik untuk berkolaborasi atau hanya ingin menyapa? Jangan ragu untuk menghubungi saya!
            </p>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-4 py-2 border border-pink-200 rounded-lg shadow-sm focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                  placeholder="Nama Anda"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Alamat Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-4 py-2 border border-pink-200 rounded-lg shadow-sm focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                  placeholder="email@contoh.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Pesan Anda</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="mt-1 block w-full px-4 py-2 border border-pink-200 rounded-lg shadow-sm focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                  placeholder="Tulis pesan Anda di sini..."
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-8 border border-transparent shadow-lg text-base font-medium rounded-full text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition duration-300 transform hover:scale-105"
                >
                  Kirim Pesan
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rose-800 text-white py-8 rounded-t-3xl shadow-inner">
        <div className="container mx-auto text-center px-4">
          <p className="mb-4">&copy; {new Date().getFullYear()} Lifa. Semua Hak Dilindungi.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-pink-200 hover:text-white transition duration-300">
              <Github size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-pink-200 hover:text-white transition duration-300">
              <Linkedin size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-pink-200 hover:text-white transition duration-300">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// NavItem Component
const NavItem = ({ icon: Icon, label, onClick, active }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition duration-300
      ${active ? 'bg-pink-100 text-rose-700 font-semibold shadow-md' : 'text-gray-600 hover:bg-pink-50 hover:text-rose-600'}
      md:flex`}
  >
    <Icon size={20} />
    <span className="hidden md:inline">{label}</span>
  </button>
);

// ProjectCard Component
const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 flex flex-col">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover"
      onError={(e) => { e.target.onerror = null; e.target.src=" https://placehold.co/400x250/FBCFE8/881337?text=Gambar+Proyek"; }}
    />
    <div className="p-6 flex-grow flex flex-col">
      <h3 className="text-2xl font-bold text-rose-700 mb-3">{project.title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, index) => (
          <span key={index} className="bg-pink-100 text-rose-700 text-xs font-semibold px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-rose-600 text-white px-6 py-2 rounded-full text-center font-medium hover:bg-rose-700 transition duration-300 self-start"
      >
        Lihat Proyek
      </a>
    </div>
  </div>
);

export default HomePage;