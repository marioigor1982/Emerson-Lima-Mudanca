/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Truck, 
  Package, 
  Wrench, 
  Globe, 
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  Star,
  Quote,
  User
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

const ICON_URLS = {
  whatsapp: "https://cdn-icons-png.flaticon.com/512/3670/3670051.png",
  facebook: "https://cdn-icons-png.flaticon.com/512/2335/2335286.png",
  instagram: "https://cdn-icons-png.flaticon.com/512/2111/2111421.png", // Header Instagram
  instagramFooter: "https://cdn-icons-png.flaticon.com/512/1384/1384089.png",
  facebookFooter: "https://cdn-icons-png.flaticon.com/512/2168/2168281.png",
  youtubeFooter: "https://cdn-icons-png.flaticon.com/512/1384/1384012.png",
  tiktok: "https://cdn-icons-png.flaticon.com/512/3046/3046121.png",
  youtube: "https://cdn-icons-png.flaticon.com/512/1383/1383260.png"
};

const HERO_ITEMS = [
  {
    type: 'video',
    url: 'https://ik.imagekit.io/marioigor82/Propaganda%20Emerson%20Lima%20-%20Video.mp4',
    showText: true,
    overlay: 'whitish'
  },
  {
    type: 'image',
    url: 'https://i.postimg.cc/m2jbX2gf/Propaganda_1.png',
    showText: false,
    overlay: 'none'
  },
  {
    type: 'image',
    url: 'https://i.postimg.cc/VLmfWb1K/Propaganda_2.png',
    showText: false,
    overlay: 'none'
  },
  {
    type: 'image',
    url: 'https://i.postimg.cc/BQpqYQQx/Propaganda_3.png',
    showText: false,
    overlay: 'none'
  },
  {
    type: 'video',
    url: 'https://ik.imagekit.io/marioigor82/Propaganda%20Emerson%20Lima%20-%20Video.mp4',
    showText: false,
    overlay: 'none'
  }
];

const GALLERY_IMAGES = [
  "https://i.postimg.cc/Vs7hzdGf/FLYER-EMERSON2.png",
  "https://i.postimg.cc/PqhyWjVG/FLYER-EMERSON3.webp",
  "https://i.postimg.cc/m2HyKDK3/FLYER-EMERSON4.webp",
  "https://i.postimg.cc/8c8mCg6n/FLYER-EMERSON6.webp",
  "https://i.postimg.cc/jS8677f0/FLYER-EMERSON7.webp",
  "https://i.postimg.cc/7LGzJQDc/FLYER-EMERSON10.webp",
  "https://i.postimg.cc/ZqBNvDZf/FLYER-EMERSON9.jpg",
  "https://i.postimg.cc/Kvj8Y3mC/FLYER-EMERSON11.webp"
];

const GOOGLE_REVIEWS = [
  {
    name: "Julia Bos",
    time: "8 meses atrás",
    rating: 5,
    text: "Pontualidade e organização, refletem o trabalho do Emerson e sua equipe. Cuidadosos, preparados. Organizam as caixas em cada ambiente, montam e desmontam móveis e organizam com maestria os móveis dentro do caminhão. Minha mudança foi grande, 50 caixas, móveis de 2,50 e no entanto coube tudo pela organização dele. O frete foi uma mudança de estado e ele chegou com 1 hora de antecedência na minha residência. Com certeza vou voltar a contratá-lo."
  },
  {
    name: "Laura Oliveira Aguiar",
    time: "8 meses atrás",
    rating: 5,
    text: "Emerson e Sandra são super atenciosos e profissionais. Realizaram minha mudança com segurança e eficiência. Podem contratar sem medo."
  },
  {
    name: "Caio Vinicius",
    time: "9 meses atrás",
    rating: 5,
    text: "Equipe muito profissional. Educados, prestativos, cuidadosos e simpáticos. Minha mudança foi muito bem organizada. Obrigado!"
  },
  {
    name: "Cliente",
    time: "1 ano atrás",
    rating: 5,
    text: "Emerson e Sandra são muito queridos e super profissionais. Já me ajudaram com 3 mudanças e sempre com o melhor preço."
  },
  {
    name: "Rafael Silva",
    time: "7 meses atrás",
    rating: 5,
    text: "Entrega super rápida, carro com bastante espaço e tudo chegou intacto! Muito obrigado pelo excelente trabalho!"
  },
  {
    name: "Cliente",
    time: "1 ano atrás",
    rating: 5,
    text: "Já mudei com eles 3x, quem dera fossem menos kkkkk mas sempre foi impecável e muito cuidado com nossas coisas. Recomendo."
  },
  {
    name: "Cliente",
    time: "1 ano atrás",
    rating: 5,
    text: "Parabéns pelo trabalho impecável! Muita organização, cuidado, eficiência e profissionalismo em cada detalhe durante a mudança! Obrigada!"
  },
  {
    name: "Cliente",
    time: "11 meses atrás",
    rating: 5,
    text: "Super recomendo esse rapaz; é de confiança e trabalha bem, 10/10, muito atencioso."
  },
  {
    name: "Cliente",
    time: "2 anos atrás",
    rating: 5,
    text: "Emerson Lima e sua esposa são muito atenciosos, simpáticos e prestativos. Com certeza irei indicar para outras pessoas."
  },
  {
    name: "Cliente",
    time: "2 anos atrás",
    rating: 5,
    text: "Mudança tranquila e agradável. Os dois são muito gente boa e o transporte dos móveis foi super seguro."
  },
  {
    name: "Cliente",
    time: "2 anos atrás",
    rating: 5,
    text: "Mudança tranquila e agradável. Os dois são muito gente boa e o transporte dos móveis foi super seguro."
  },
  {
    name: "Cliente",
    time: "1 ano atrás",
    rating: 5,
    text: "Emerson e Sandra são muito queridos e super profissionais. Já me ajudaram com 3 mudanças e sempre com o melhor preço."
  },
  {
    name: "Cliente",
    time: "1 ano atrás",
    rating: 5,
    text: "Emerson e Sandra são muito queridos e super profissionais. Já me ajudaram com 3 mudanças e sempre com o melhor preço."
  },
  {
    name: "Cliente",
    time: "1 ano atrás",
    rating: 5,
    text: "Emerson e Sandra são muito queridos e super profissionais. Já me ajudaram com 3 mudanças e sempre com o melhor preço."
  }
];

function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_ITEMS.length);
    }, 8000); // 8 seconds per slide
    return () => clearInterval(interval);
  }, []);

  const currentItem = HERO_ITEMS[currentIndex];

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 w-full h-full"
        >
          {currentItem.type === 'video' ? (
            <video
              src={currentItem.url}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={currentItem.url}
              alt={`Propaganda ${currentIndex}`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          )}
        </motion.div>
      </AnimatePresence>
      
      {/* Dynamic Overlay */}
      {currentItem.overlay === 'whitish' ? (
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] z-[5]"></div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/40 via-transparent to-brand-navy/60 z-[5]"></div>
      )}

      {/* Hero Text Content */}
      <AnimatePresence>
        {currentItem.showText && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute inset-0 flex items-center justify-center z-10 px-4"
          >
            <div className="max-w-4xl text-center">
              <h1 className="text-5xl md:text-7xl font-black text-brand-navy leading-tight drop-shadow-sm font-bebas tracking-wider">
                Mudanças com <span className="text-brand-red underline decoration-brand-red/30">Segurança</span> e <span className="text-brand-red underline decoration-brand-red/30">Agilidade</span>
              </h1>
              <p className="mt-8 text-xl md:text-2xl text-brand-navy/90 font-bold max-w-2xl mx-auto leading-relaxed font-quicksand">
                Transportamos seus sonhos com o cuidado que eles merecem. Atendimento em Anápolis e todo o Brasil.
              </p>
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-brand-red text-white px-10 py-5 rounded-2xl text-lg font-black hover:bg-brand-dark-red transition-all shadow-2xl flex items-center justify-center gap-3 group"
                >
                  <img src={ICON_URLS.whatsapp} alt="WhatsApp" className="w-6 h-6 brightness-0 invert" referrerPolicy="no-referrer" />
                  Solicitar Orçamento
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#services"
                  className="w-full sm:w-auto bg-brand-navy text-white px-10 py-5 rounded-2xl text-lg font-black hover:bg-brand-navy/90 transition-all shadow-xl"
                >
                  Nossos Serviços
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Navigation Dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {HERO_ITEMS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'bg-brand-red w-8' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [isLoadingReviews, setIsLoadingReviews] = useState(true);

  useEffect(() => {
    // We use the static list provided by the user for an exact replica
    setReviews(GOOGLE_REVIEWS);
    setIsLoadingReviews(false);
  }, []);

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
        className="fixed bottom-6 right-6 z-50 p-2 flex items-center justify-center group"
        aria-label="Chamar no WhatsApp"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-brand-red/10 rounded-full"
        />
        <img src={ICON_URLS.whatsapp} alt="WhatsApp" className="w-14 h-14 relative z-10" referrerPolicy="no-referrer" />
        <span className="absolute right-full mr-4 bg-white text-brand-navy px-4 py-2 rounded-xl shadow-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
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
                  className="text-sm font-bold text-brand-navy/70 hover:text-brand-red transition-colors uppercase"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Socials & CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex space-x-2 mr-4">
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="p-2 hover:scale-110 transition-transform"><img src={ICON_URLS.facebook} alt="Facebook" className="w-5 h-5" referrerPolicy="no-referrer" /></a>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="p-2 hover:scale-110 transition-transform"><img src={ICON_URLS.instagram} alt="Instagram" className="w-5 h-5" referrerPolicy="no-referrer" /></a>
                <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="p-2 hover:scale-110 transition-transform"><img src={ICON_URLS.tiktok} alt="TikTok" className="w-5 h-5" referrerPolicy="no-referrer" /></a>
                <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="p-2 hover:scale-110 transition-transform"><img src={ICON_URLS.youtube} alt="YouTube" className="w-5 h-5" referrerPolicy="no-referrer" /></a>
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
                  <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="p-2 opacity-40"><img src={ICON_URLS.facebook} alt="Facebook" className="w-6 h-6" referrerPolicy="no-referrer" /></a>
                  <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="p-2 opacity-40"><img src={ICON_URLS.instagram} alt="Instagram" className="w-6 h-6" referrerPolicy="no-referrer" /></a>
                  <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="p-2 opacity-40"><img src={ICON_URLS.tiktok} alt="TikTok" className="w-6 h-6" referrerPolicy="no-referrer" /></a>
                  <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="p-2 opacity-40"><img src={ICON_URLS.youtube} alt="YouTube" className="w-6 h-6" referrerPolicy="no-referrer" /></a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero Section - Full Screen Slider */}
        <section id="home" className="relative h-[calc(100vh-80px)] w-full overflow-hidden">
          <HeroSlider />
          
          {/* Subtle bottom fade to transition to content */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-light to-transparent z-10"></div>
        </section>

        {/* About Us */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div className="relative">
                <img 
                  src="https://i.postimg.cc/CLShsfY7/Propaganda_5.png" 
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
                <h2 className="text-brand-red font-black tracking-widest uppercase text-xs font-russo">Sobre Nós</h2>
                <h3 className="mt-4 text-4xl font-black text-brand-navy sm:text-5xl leading-tight font-bebas tracking-wide">
                  Sua mudança em boas mãos
                </h3>
                <p className="mt-6 text-lg text-brand-navy/60 leading-relaxed font-figtree">
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
              <h2 className="text-brand-red font-black tracking-widest uppercase text-xs font-russo">Nossos Serviços</h2>
              <h3 className="mt-4 text-4xl font-black text-brand-navy sm:text-5xl leading-tight font-bebas tracking-wide">
                Soluções completas para seu transporte
              </h3>
              <p className="mt-6 text-lg text-brand-navy/60 font-figtree">
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
        <section id="reviews" className="py-24 bg-[#f9fafb] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-brand-red font-black tracking-widest uppercase text-xs font-russo">Depoimentos</h2>
              <h3 className="mt-4 text-4xl font-black text-brand-navy sm:text-5xl leading-tight font-bebas tracking-wide">
                Depoimentos Reais de Clientes no Google
              </h3>
              <div className="mt-6 flex justify-center items-center space-x-2">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-6 h-6 fill-brand-red text-brand-red" />)}
                <span className="ml-3 text-brand-navy font-bold">Excelente reputação no Google</span>
              </div>
            </div>

            {isLoadingReviews ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-red"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {reviews.map((review, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-white p-8 rounded-3xl border border-brand-navy/5 relative group hover:shadow-xl transition-all shadow-sm"
                  >
                    <Quote className="absolute top-6 right-8 w-12 h-12 text-brand-red/10 group-hover:text-brand-red/20 transition-colors" />
                    <div className="flex mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-brand-red text-brand-red" />
                      ))}
                    </div>
                    <p className="text-brand-navy/80 leading-relaxed mb-6 relative z-10 font-figtree text-lg">
                      "{review.text}"
                    </p>
                    <div className="flex items-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-lg shadow-inner ${
                        review.name === 'Cliente' ? 'bg-gray-100 text-gray-400' : 'bg-brand-red/10 text-brand-red'
                      }`}>
                        {review.name === 'Cliente' ? <User className="w-6 h-6" /> : review.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <p className="font-black text-brand-navy text-base">{review.name}</p>
                        <p className="text-xs font-bold text-brand-navy/40 uppercase tracking-wider">{review.time || 'Cliente Verificado'}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            <div className="mt-16 text-center">
              <a 
                href="https://www.google.com/maps/place/An%C3%A1polis+Fretes/@-16.3221578,-48.9589206,16z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-brand-navy/10 rounded-2xl text-brand-navy font-black hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-all shadow-lg"
              >
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-5" />
                Ver todas as avaliações no Maps
              </a>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="py-24 bg-brand-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-brand-red font-black tracking-widest uppercase text-xs font-russo">Galeria</h2>
              <h3 className="mt-4 text-4xl font-black text-brand-navy sm:text-5xl leading-tight font-bebas tracking-wide">
                Trabalhos Realizados
              </h3>
              <p className="mt-6 text-lg text-brand-navy/60 font-figtree">
                Confira alguns de nossos transportes e a dedicação da nossa equipe.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {GALLERY_IMAGES.map((url, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className="relative group aspect-square rounded-3xl overflow-hidden shadow-lg border-4 border-white"
                >
                  <img 
                    src={url} 
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
                <form className="space-y-6" onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get('name');
                  const phone = formData.get('phone');
                  const city = formData.get('city');
                  const message = formData.get('message');
                  const outsideGoias = formData.get('outsideGoias') === 'on' ? 'Sim' : 'Não';
                  const assembly = formData.get('assembly') === 'on' ? 'Sim' : 'Não';
                  
                  const text = `*Novo Orçamento via Site*\n\n*Nome:* ${name}\n*Telefone:* ${phone}\n*Cidade:* ${city}\n*Mudança fora de GO?* ${outsideGoias}\n*Precisa de montagem?* ${assembly}\n*Mensagem:* ${message}`;
                  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
                }}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-black text-brand-navy uppercase tracking-widest mb-2">Nome Completo</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required
                      className="block w-full px-6 py-4 rounded-2xl border-none bg-white shadow-sm focus:ring-4 focus:ring-brand-red/20 transition-all text-brand-navy font-bold placeholder:text-brand-navy/20"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-black text-brand-navy uppercase tracking-widest mb-2">Telefone</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        required
                        className="block w-full px-6 py-4 rounded-2xl border-none bg-white shadow-sm focus:ring-4 focus:ring-brand-red/20 transition-all text-brand-navy font-bold placeholder:text-brand-navy/20"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-black text-brand-navy uppercase tracking-widest mb-2">Cidade</label>
                      <input 
                        type="text" 
                        id="city" 
                        name="city"
                        required
                        className="block w-full px-6 py-4 rounded-2xl border-none bg-white shadow-sm focus:ring-4 focus:ring-brand-red/20 transition-all text-brand-navy font-bold placeholder:text-brand-navy/20"
                        placeholder="Ex: Anápolis"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4 py-2">
                    <label className="flex items-center cursor-pointer group">
                      <div className="relative">
                        <input type="checkbox" name="outsideGoias" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-red/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red"></div>
                      </div>
                      <span className="ml-3 text-sm font-bold text-brand-navy/80 group-hover:text-brand-navy transition-colors">Mudança para fora do estado de Goiás?</span>
                    </label>

                    <label className="flex items-center cursor-pointer group">
                      <div className="relative">
                        <input type="checkbox" name="assembly" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-red/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red"></div>
                      </div>
                      <span className="ml-3 text-sm font-bold text-brand-navy/80 group-hover:text-brand-navy transition-colors">Precisa de serviço de montagem e desmontagem de móveis?</span>
                    </label>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-black text-brand-navy uppercase tracking-widest mb-2">Mensagem</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows={3}
                      className="block w-full px-6 py-4 rounded-2xl border-none bg-white shadow-sm focus:ring-4 focus:ring-brand-red/20 transition-all text-brand-navy font-bold placeholder:text-brand-navy/20"
                      placeholder="Descreva sua mudança ou frete..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-brand-red text-white font-black py-5 rounded-2xl hover:bg-brand-dark-red transition-all shadow-xl shadow-brand-red/30 active:scale-95 text-lg uppercase tracking-widest"
                  >
                    Enviar para o WhatsApp
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
                className="h-24 w-auto brightness-0 invert"
                referrerPolicy="no-referrer"
              />
              <p className="mt-8 text-base leading-relaxed font-medium">
                Mudança segura, rápida e com todo cuidado que a sua família merece em Anápolis e região. Sua satisfação é nossa prioridade.
              </p>
              <div className="mt-10 flex space-x-4">
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="p-2 hover:scale-110 transition-transform"><img src={ICON_URLS.facebookFooter} alt="Facebook" className="w-8 h-8" referrerPolicy="no-referrer" /></a>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="p-2 hover:scale-110 transition-transform"><img src={ICON_URLS.instagramFooter} alt="Instagram" className="w-8 h-8" referrerPolicy="no-referrer" /></a>
                <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="p-2 hover:scale-110 transition-transform"><img src={ICON_URLS.tiktok} alt="TikTok" className="w-8 h-8" referrerPolicy="no-referrer" /></a>
                <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="p-2 hover:scale-110 transition-transform"><img src={ICON_URLS.youtubeFooter} alt="YouTube" className="w-8 h-8" referrerPolicy="no-referrer" /></a>
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
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 group"
        aria-label="Falar no WhatsApp"
      >
        <span className="absolute -top-14 right-0 bg-white text-brand-navy text-sm font-black px-4 py-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 whitespace-nowrap pointer-events-none border border-brand-navy/5">
          Como posso ajudar? 👋
        </span>
        
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white animate-bounce">
          1
        </div>

        <img src={ICON_URLS.whatsapp} alt="WhatsApp" className="w-8 h-8 relative z-10" referrerPolicy="no-referrer" />
      </a>
    </div>
  );
}
