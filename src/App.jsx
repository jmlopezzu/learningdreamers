import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.webp';
import testimonial1 from '@/assets/testimonial1.jpg';
import testimonial2 from '@/assets/testimonial2.jpg';
import testimonial3 from '@/assets/testimonial3.jpg';
import testimonial4 from '@/assets/testimonial4.jpg';
import blog1 from '@/assets/blog1.jpg';
import blog2 from '@/assets/blog2.jpg';
import blog3 from '@/assets/blog3.jpg';
import blog4 from '@/assets/blog4.jpg';
import blog5 from '@/assets/blog5.jpg';
import blog6 from '@/assets/blog6.jpg';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center shadow-md bg-purple-50">
        <Link className="flex items-center justify-center" to="#">
          <div className="bg-white rounded-full p-2 shadow-md">
            <img src={logo} alt="Learning Dreamers Logo" className="h-12" />
          </div>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium text-purple-800 hover:text-teal-500" to="#">
            Inicio
          </Link>
          <Link className="text-sm font-medium text-purple-800 hover:text-teal-500" to="#">
            Sobre Nosotras
          </Link>
          <Link className="text-sm font-medium text-purple-800 hover:text-teal-500" to="#">
            Programas
          </Link>
          <Link className="text-sm font-medium text-purple-800 hover:text-teal-500" to="#">
            Contacto
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 bg-gradient-to-r from-teal-400 to-purple-700 text-white text-center">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
             The first class with teacher Vane
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto">
              Una plataforma dedicada a mujeres que buscan aprender inglés y migrar a los EE.UU. como Au Pairs.
            </p>
            <div className="mt-8 space-x-4">
              <Button size="lg" className="bg-white text-purple-800 font-bold rounded-full shadow-lg hover:bg-purple-100">
                Únete a Nosotras
              </Button>
              <Button size="lg" className="bg-teal-300 text-white font-bold rounded-full shadow-lg hover:bg-teal-400">
                Más Información
              </Button>
            </div>
          </div>
        </section>

                {/* Blog Section */}
                <section className="w-full py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-purple-800 mb-12 text-center">Nuestro Blog</h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {[
                { image: blog1, title: "Consejos para mejorar tu inglés", link: "#" },
                { image: blog2, title: "Experiencias Au Pair inolvidables", link: "#" },
                { image: blog3, title: "Cómo prepararte para tu viaje", link: "#" },
                { image: blog4, title: "Estudia y trabaja en EE.UU.", link: "#" },
                { image: blog5, title: "Recursos gratuitos para aprender inglés", link: "#" },
                { image: blog6, title: "Historias de éxito", link: "#" }
              ].map((post, index) => (
                <div key={index} className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="rounded-lg shadow-lg w-full hover:shadow-xl transition-shadow"
                  />
                  <div className="absolute inset-0 bg-purple-800 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Link className="text-white text-lg font-bold" to={post.link}>
                      Leer Más
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Por qué elegirnos</h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {[
                { icon: '🌍', title: 'Inmersión Cultural', desc: 'Vive la experiencia de inmersión total en EE.UU. mientras trabajas como Au Pair.' },
                { icon: '🎓', title: 'Clases de Inglés', desc: 'Acceso a recursos y clases personalizadas para mejorar tu inglés.' },
                { icon: '👩‍👧', title: 'Cuidado de Niños', desc: 'Capacitación y apoyo para convertirte en una excelente Au Pair.' },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center space-y-4 text-center">
                  <div className="bg-teal-200 rounded-full p-4 shadow-md">
                    <span className="text-3xl text-white font-bold">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-purple-800">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-16 bg-gradient-to-r from-teal-100 to-purple-100 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-purple-800 mb-12">Testimonios</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { text: "Gracias a Learning Dreamers, pude mejorar mi inglés y tener una experiencia inolvidable como Au Pair en EE.UU.", name: "Ana García", photo: testimonial1 },
                { text: "Learning Dreamers me ayudó a alcanzar mis sueños y tener una carrera internacional.", name: "María López", photo: testimonial2 },
                { text: "El apoyo y la comunidad que ofrecen es simplemente fantástico.", name: "Lucía Fernández", photo: testimonial3 },
                { text: "Aprender inglés nunca fue tan divertido y efectivo.", name: "Carla Martínez", photo: testimonial4 }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <img src={testimonial.photo} alt={`Testimonio de ${testimonial.name}`} className="w-16 h-16 rounded-full mx-auto" />
                  <p className="mt-4 italic text-gray-700">{`"${testimonial.text}"`}</p>
                  <div className="mt-4 text-purple-800 font-semibold">- {testimonial.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full py-20 bg-gradient-to-r from-teal-200 to-purple-200 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-purple-800 mb-6">
              ¡Contáctanos!
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-8">
              ¿Lista para unirte a nuestra comunidad y comenzar tu aventura en EE.UU. como Au Pair? Contáctanos para más detalles.
            </p>
            <Button size="lg" className="bg-teal-300 text-white font-bold rounded-full shadow-lg hover:bg-teal-400">
              Agenda tu llamada
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-purple-800 text-white py-8">
        <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row justify-between">
          <p className="text-sm">&copy; 2025 Learning Dreamers. Todos los derechos reservados.</p>
          <nav className="flex space-x-6 mt-4 sm:mt-0">
            <Link className="text-sm hover:underline" to="#">
              Términos de Servicio
            </Link>
            <Link className="text-sm hover:underline" to="#">
              Política de Privacidad
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
