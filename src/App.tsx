/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Truck, 
  Package, 
  Wrench, 
  Globe, 
  Facebook, 
  Instagram, 
  Youtube, 
  MessageCircle,
  Menu,
  X,
  ChevronRight,
  Star,
  Music2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const WHATSAPP_NUMBER = "5562992321590";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const LOGO_URL = "https://i.postimg.cc/T1HpDgQZ/Logo-Emerson-Lima-Mudanca-2-Copia.png";

const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/Emersonlimamudanca",
  instagram: "https://www.instagram.com/emersonlimamudança",
  youtube: "https://www.youtube.com/@Emersonlimamudança",
  tiktok: "https://www.tiktok.com/@emersonlima98?is_from_webapp=1&sender_device=pc"
};

const HERO_VIDEOS = [
  "aZz4Gl2hiAE",
  "oejPJpW2UcM"
];

function VideoBackground() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
    }, 15000); // Switch every 15 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={HERO_VIDEOS[currentVideoIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 w-full h-full"
        >
          <iframe
            className="absolute top-1/2 left-1/2 w-[115vw] h-[115vh] -translate-x-1/2 -translate-y-1/2 object-cover"
            src={`https://www.youtube.com/embed/${HERO_VIDEOS[currentVideoIndex]}?autoplay=1&mute=1&controls=0&loop=1&playlist=${HERO_VIDEOS[currentVideoIndex]}&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1`}
            allow="autoplay; encrypted-media"
            frameBorder="0"
          ></iframe>
        </motion.div>
      </AnimatePresence>
      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/95 via-brand-navy/60 to-brand-navy/95"></div>
      <div className="absolute inset-0 bg-brand-red/10 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,26,0.8)_100%)]"></div>
      
      {/* Scanline Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] z-[5] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20"></div>
    </div>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // @ts-ignore
      if (window.instgrm) {
        // @ts-ignore
        window.instgrm.Embeds.process();
      }
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Avaliações', href: '#reviews' },
    { name: 'Galeria', href: '#gallery' },
    { name: 'Contato', href: '#contact' },
  ];

  const services = [
    {
      title: 'Mudanças Residenciais',
      description: 'Cuidado total com o seu lar. Embalamos e transportamos seus bens com segurança e agilidade.',
      icon: <Package className="w-8 h-8" />
    },
    {
      title: 'Mudanças Comerciais',
      description: 'Logística eficiente para sua empresa. Transportamos equipamentos e mobiliário com o mínimo de interrupção.',
      icon: <Truck className="w-8 h-8" />
    },
    {
      title: 'Fretes em Anápolis e Região',
      description: 'Transportes rápidos e pontuais para pequenas e médias cargas em toda a região.',
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: 'Viagens Interestaduais',
      description: 'Levamos sua mudança para qualquer lugar do Brasil com monitoramento e segurança.',
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: 'Carregamento e Descarregamento',
      description: 'Equipe treinada para manusear seus pertences com o máximo de cuidado e técnica.',
      icon: <ShieldCheck className="w-8 h-8" />
    },
    {
      title: 'Montagem e Desmontagem',
      description: 'Serviço básico de montagem e desmontagem de móveis para facilitar sua vida.',
      icon: <Wrench className="w-8 h-8" />
    },
  ];

  const highlights = [
    { icon: <Clock className="text-brand-red" />, text: "Pontualidade" },
    { icon: <ShieldCheck className="text-brand-red" />, text: "Cuidado com seus bens" },
    { icon: <MapPin className="text-brand-red" />, text: "Atendimento em Anápolis e região" },
  ];

  return (
    <div className="min-h-screen bg-brand-light font-sans text-brand-navy selection:bg-brand-red/10 selection:text-brand-red">
      
      {/* Floating WhatsApp Button */}
      <motion.a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group overflow-hidden"
        aria-label="Chamar no WhatsApp"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-white/20 rounded-full"
        />
        <MessageCircle className="w-6 h-6 relative z-10" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 whitespace-nowrap font-bold relative z-10">
          Fale Conosco
        </span>
      </motion.a>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-brand-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#home">
                <img 
                  src={LOGO_URL} 
                  alt="Emerson Lima Mudança" 
                  className="h-20 w-auto"
                  referrerPolicy="no-referrer"
                />
              </a>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-sm font-bold text-brand-navy/70 hover:text-brand-red transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Socials & CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex space-x-2 mr-4">
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="p-2 text-brand-navy/40 hover:text-brand-blue transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="p-2 text-brand-navy/40 hover:text-brand-red transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="p-2 text-brand-navy/40 hover:text-black transition-colors"><Music2 className="w-5 h-5" /></a>
                <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="p-2 text-brand-navy/40 hover:text-brand-red transition-colors"><Youtube className="w-5 h-5" /></a>
              </div>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-red text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-brand-dark-red transition-all shadow-lg shadow-brand-red/20 active:scale-95"
              >
                Orçamento Grátis
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-brand-navy"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-brand-navy/5 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-4 text-base font-bold text-brand-navy/70 hover:text-brand-red hover:bg-brand-light rounded-md"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 flex justify-around border-t border-brand-navy/5">
                  <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="p-2 text-brand-navy/40"><Facebook className="w-6 h-6" /></a>
                  <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="p-2 text-brand-navy/40"><Instagram className="w-6 h-6" /></a>
                  <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="p-2 text-brand-navy/40"><Music2 className="w-6 h-6" /></a>
                  <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="p-2 text-brand-navy/40"><Youtube className="w-6 h-6" /></a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
          <VideoBackground />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-8 lg:text-left"
              >
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-red/20 border border-brand-red/30 text-brand-red mb-6">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-xs font-black uppercase tracking-widest">Líder em Anápolis</span>
                </div>
                <motion.h1 
                  initial={{ opacity: 0, scale: 1.5, filter: 'blur(20px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="text-5xl tracking-tighter font-black text-white sm:text-7xl md:text-8xl lg:text-9xl leading-[0.85] uppercase italic"
                >
                  <span className="block">Emerson Lima</span>
                  <span className="block text-brand-red">Mudança</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="mt-8 text-lg text-white/80 sm:text-2xl lg:text-xl xl:text-2xl leading-relaxed max-w-2xl font-medium tracking-wide"
                >
                  O cuidado que a sua família merece. Especialistas em mudanças residenciais e comerciais em Anápolis e região com o máximo de segurança.
                </motion.p>
                <div className="mt-10 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex flex-col sm:flex-row gap-4">
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-8 py-4 border border-transparent text-base font-black rounded-2xl text-white bg-brand-red hover:bg-brand-dark-red md:text-lg shadow-xl shadow-brand-red/30 transition-all hover:-translate-y-1 active:translate-y-0"
                  >
                    Chamar no WhatsApp
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </a>
                  <a 
                    href="#services"
                    className="flex items-center justify-center px-8 py-4 border-2 border-white/20 text-base font-bold rounded-2xl text-white bg-white/10 backdrop-blur-md hover:bg-white/20 md:text-lg transition-all"
                  >
                    Ver Serviços
                  </a>
                </div>
                
                {/* Highlights */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {highlights.map((h, i) => (
                    <div key={i} className="flex items-center space-x-3 text-sm font-bold text-white/70">
                      <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/10">
                        {h.icon}
                      </div>
                      <span>{h.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
          >
            <span className="text-white/40 text-[10px] uppercase tracking-[0.4em] mb-4 font-bold">Descubra</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-brand-red to-transparent">
              <motion.div 
                animate={{ y: [0, 48, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-4 bg-white"
              />
            </div>
          </motion.div>
        </section>

        {/* About Us */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div className="relative">
                <img 
                  src="https://picsum.photos/seed/team/600/800" 
                  alt="Nossa Equipe" 
                  className="rounded-[2.5rem] shadow-2xl w-full aspect-[3/4] object-cover border-8 border-brand-light"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 bg-brand-red text-white p-8 rounded-3xl shadow-2xl hidden sm:block">
                  <p className="text-5xl font-black">10+</p>
                  <p className="text-sm font-bold uppercase tracking-wider opacity-80">Anos de Experiência</p>
                </div>
              </div>
              <div className="mt-12 lg:mt-0">
                <h2 className="text-brand-red font-black tracking-widest uppercase text-xs">Sobre Nós</h2>
                <h3 className="mt-4 text-4xl font-black text-brand-navy sm:text-5xl leading-tight">
                  Sua mudança em boas mãos
                </h3>
                <p className="mt-6 text-lg text-brand-navy/60 leading-relaxed">
                  A <strong className="text-brand-navy">Emerson Lima Mudança</strong> nasceu do compromisso em oferecer um serviço de transporte humanizado e extremamente cuidadoso. Sabemos que uma mudança não é apenas o transporte de objetos, mas a transição de uma vida para um novo lar ou negócio.
                </p>
                <p className="mt-4 text-lg text-brand-navy/60 leading-relaxed">
                  Com anos de atuação em Anápolis e região, nos consolidamos como uma empresa séria e confiável. Focamos na organização impecável, transparência total nos valores e um compromisso inegociável com os prazos estabelecidos.
                </p>
                <div className="mt-10 space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-brand-red/10 p-3 rounded-2xl">
                      <ShieldCheck className="w-6 h-6 text-brand-red" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-black text-brand-navy">Segurança Total</h4>
                      <p className="text-brand-navy/60">Utilizamos técnicas de embalagem e amarração para garantir a integridade de cada item.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-brand-blue/10 p-3 rounded-2xl">
                      <Clock className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-black text-brand-navy">Compromisso com o Prazo</h4>
                      <p className="text-brand-navy/60">Respeitamos seu tempo. Chegamos no horário e entregamos conforme o planejado.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-24 bg-brand-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-brand-red font-black tracking-widest uppercase text-xs">Nossos Serviços</h2>
              <h3 className="mt-4 text-4xl font-black text-brand-navy sm:text-5xl leading-tight">
                Soluções completas para seu transporte
              </h3>
              <p className="mt-6 text-lg text-brand-navy/60">
                Oferecemos uma gama completa de serviços para atender desde pequenos fretes até grandes mudanças interestaduais.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-10 rounded-[2rem] shadow-sm border border-brand-navy/5 hover:shadow-xl hover:-translate-y-1 transition-all group"
                >
                  <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center text-brand-red mb-8 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-black text-brand-navy mb-4">{service.title}</h4>
                  <p className="text-brand-navy/60 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-10 py-5 rounded-2xl bg-brand-red text-white font-black hover:bg-brand-dark-red transition-all shadow-xl shadow-brand-red/20"
              >
                Peça seu orçamento agora pelo WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-brand-red font-black tracking-widest uppercase text-xs">Depoimentos</h2>
              <h3 className="mt-4 text-4xl font-black text-brand-navy sm:text-5xl leading-tight">
                O que nossos clientes dizem
              </h3>
              <div className="mt-6 flex justify-center items-center space-x-2">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-6 h-6 fill-brand-red text-brand-red" />)}
                <span className="ml-3 text-brand-navy font-bold">Excelente reputação no Google</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-1 gap-8">
              {/* Google Maps Reviews Iframe */}
              <div className="w-full h-[600px] rounded-[2.5rem] overflow-hidden shadow-inner border-8 border-brand-light bg-brand-light relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.969137025219!2d-48.9589206!3d-16.3221578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ea47596000001%3A0x7d0e3a5a5a5a5a5a!2sAn%C3%A1polis+Fretes!5e0!3m2!1spt-BR!2sbr!4v1710190000000!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Avaliações do Google Maps"
                ></iframe>
                {/* Overlay to encourage clicking the link if iframe doesn't show reviews directly */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-3xl border border-brand-navy/5 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
                  <p className="text-sm text-brand-navy/70 font-bold text-center sm:text-left leading-relaxed">
                    Confira todas as nossas avaliações reais e fotos de clientes satisfeitos diretamente no Google Maps.
                  </p>
                  <a 
                    href="https://www.google.com/maps/place/An%C3%A1polis+Fretes/@-16.3221578,-48.9589206,16z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whitespace-nowrap bg-brand-navy text-white px-8 py-3 rounded-xl text-sm font-black hover:bg-brand-blue transition-colors shadow-lg"
                  >
                    Ver no Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="py-24 bg-brand-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-brand-red font-black tracking-widest uppercase text-xs">Galeria</h2>
              <h3 className="mt-4 text-4xl font-black text-brand-navy sm:text-5xl leading-tight">
                Trabalhos Realizados
              </h3>
              <p className="mt-6 text-lg text-brand-navy/60">
                Confira alguns de nossos transportes e a dedicação da nossa equipe.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Instagram Embed */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative group aspect-square rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-white flex items-center justify-center"
              >
                <div 
                  className="w-full h-full overflow-auto scrollbar-hide"
                  dangerouslySetInnerHTML={{ __html: `
                    <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/DQ7AIm6DjIy/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/DQ7AIm6DjIy/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">Ver essa foto no Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/DQ7AIm6DjIy/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Um post compartilhado por Emerson Lima mudança (@emersonlimamudanca)</a></p></div></blockquote>
                  ` }}
                />
              </motion.div>

              {[2, 3, 4, 5, 6, 7, 8].map((i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className="relative group aspect-square rounded-3xl overflow-hidden shadow-lg border-4 border-white"
                >
                  <img 
                    src={`https://picsum.photos/seed/move-${i}/500/500`} 
                    alt={`Trabalho ${i}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                      <ChevronRight className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-24">
              <div>
                <h2 className="text-brand-red font-black tracking-widest uppercase text-xs">Contato</h2>
                <h3 className="mt-4 text-4xl font-black text-brand-navy sm:text-5xl leading-tight">
                  Fale conosco hoje mesmo
                </h3>
                <p className="mt-6 text-lg text-brand-navy/60 leading-relaxed">
                  Estamos prontos para planejar sua mudança. Preencha o formulário ou nos chame diretamente no WhatsApp.
                </p>

                <div className="mt-12 space-y-8">
                  <div className="flex items-center group">
                    <div className="flex-shrink-0 bg-brand-red/10 p-4 rounded-2xl text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                      <Phone className="w-7 h-7" />
                    </div>
                    <div className="ml-5">
                      <p className="text-sm font-bold text-brand-navy/40 uppercase tracking-widest">Telefone / WhatsApp</p>
                      <p className="text-2xl font-black text-brand-navy">(62) 99232-1590</p>
                    </div>
                  </div>
                  <div className="flex items-center group">
                    <div className="flex-shrink-0 bg-brand-blue/10 p-4 rounded-2xl text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                      <MapPin className="w-7 h-7" />
                    </div>
                    <div className="ml-5">
                      <p className="text-sm font-bold text-brand-navy/40 uppercase tracking-widest">Endereço</p>
                      <p className="text-2xl font-black text-brand-navy">R. Quintino Bocaiúva, 473 - Anápolis - GO</p>
                    </div>
                  </div>
                </div>

                {/* Map Iframe */}
                <div className="mt-12 rounded-[2rem] overflow-hidden h-80 shadow-2xl border-8 border-brand-light">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.969137025219!2d-48.9589206!3d-16.3221578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ea47596000001%3A0x7d0e3a5a5a5a5a5a!2sAn%C3%A1polis+Fretes!5e0!3m2!1spt-BR!2sbr!4v1710190000000!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização"
                  ></iframe>
                </div>
              </div>

              <div className="mt-16 lg:mt-0 bg-brand-light p-10 sm:p-12 rounded-[3rem] border border-brand-navy/5 shadow-inner">
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-black text-brand-navy uppercase tracking-widest mb-2">Nome Completo</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="block w-full px-6 py-4 rounded-2xl border-none bg-white shadow-sm focus:ring-4 focus:ring-brand-red/20 transition-all text-brand-navy font-bold placeholder:text-brand-navy/20"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-black text-brand-navy uppercase tracking-widest mb-2">Telefone</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="block w-full px-6 py-4 rounded-2xl border-none bg-white shadow-sm focus:ring-4 focus:ring-brand-red/20 transition-all text-brand-navy font-bold placeholder:text-brand-navy/20"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-black text-brand-navy uppercase tracking-widest mb-2">Cidade</label>
                      <input 
                        type="text" 
                        id="city" 
                        className="block w-full px-6 py-4 rounded-2xl border-none bg-white shadow-sm focus:ring-4 focus:ring-brand-red/20 transition-all text-brand-navy font-bold placeholder:text-brand-navy/20"
                        placeholder="Ex: Anápolis"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-black text-brand-navy uppercase tracking-widest mb-2">Mensagem</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="block w-full px-6 py-4 rounded-2xl border-none bg-white shadow-sm focus:ring-4 focus:ring-brand-red/20 transition-all text-brand-navy font-bold placeholder:text-brand-navy/20"
                      placeholder="Descreva sua mudança ou frete..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-brand-red text-white font-black py-5 rounded-2xl hover:bg-brand-dark-red transition-all shadow-xl shadow-brand-red/30 active:scale-95 text-lg"
                  >
                    Enviar Mensagem
                  </button>
                  <p className="text-xs text-center text-brand-navy/30 font-bold uppercase tracking-widest">
                    Ao enviar, você concorda com nossa política de privacidade.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-navy text-white/60 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {/* Brand */}
            <div className="col-span-1 lg:col-span-1">
              <img 
                src={LOGO_URL} 
                alt="Emerson Lima Mudança" 
                className="h-16 w-auto brightness-0 invert"
                referrerPolicy="no-referrer"
              />
              <p className="mt-8 text-base leading-relaxed font-medium">
                Mudança segura, rápida e com todo cuidado que a sua família merece em Anápolis e região. Sua satisfação é nossa prioridade.
              </p>
              <div className="mt-10 flex space-x-4">
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-xl hover:bg-brand-red hover:text-white transition-all duration-300"><Facebook className="w-6 h-6" /></a>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-xl hover:bg-brand-red hover:text-white transition-all duration-300"><Instagram className="w-6 h-6" /></a>
                <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-xl hover:bg-brand-red hover:text-white transition-all duration-300"><Music2 className="w-6 h-6" /></a>
                <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-xl hover:bg-brand-red hover:text-white transition-all duration-300"><Youtube className="w-6 h-6" /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Links Rápidos</h4>
              <ul className="space-y-5 text-sm font-bold">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-brand-red transition-colors">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Serviços</h4>
              <ul className="space-y-5 text-sm font-bold opacity-60">
                <li>Mudanças Residenciais</li>
                <li>Mudanças Comerciais</li>
                <li>Fretes e Carretos</li>
                <li>Viagens Interestaduais</li>
                <li>Montagem de Móveis</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Onde Estamos</h4>
              <ul className="space-y-6 text-sm font-bold">
                <li className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 text-brand-red flex-shrink-0" />
                  <span className="leading-relaxed">R. Quintino Bocaiúva, 473 - ap03 - St. Central, Anápolis - GO, 75043-030, Brasil.</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-6 h-6 mr-4 text-brand-red flex-shrink-0" />
                  <span>(62) 99232-1590</span>
                </li>
                <li className="flex items-center">
                  <Clock className="w-6 h-6 mr-4 text-brand-red flex-shrink-0" />
                  <span>Segunda a Sábado: 08h às 18h</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-white/5 text-center text-xs font-bold uppercase tracking-[0.2em] opacity-30">
            <p>&copy; {new Date().getFullYear()} Emerson Lima Mudança. Todos os direitos reservados. Desenvolvido para Anápolis-GO.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
        aria-label="Falar no WhatsApp"
      >
        <span className="absolute -top-12 right-0 bg-white text-brand-navy text-xs font-black px-3 py-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-brand-navy/5">
          Fale Conosco agora!
        </span>
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
        <MessageCircle className="w-8 h-8 fill-current" />
      </a>
    </div>
  );
}
