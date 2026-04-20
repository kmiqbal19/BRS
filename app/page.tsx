'use client';

import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, BarChart3, ChevronRight, Globe, Layers, Mail, MapPin, MonitorPlay, Phone, Play, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// --- Brand Logo Component ---
const BrandIcon = ({ className = '' }: { className?: string }) => (
  <div className={`relative flex flex-col justify-between ${className}`} style={{ width: '2.5rem', height: '2.8rem' }}>
    {/* Red Top D Shape */}
    <div className="w-[85%] h-[58%] bg-[#DE6B63] rounded-r-3xl rounded-tl-lg relative overflow-hidden flex flex-col justify-center gap-1 pl-2">
      <div className="w-4 h-4 rounded-full bg-white/20 -ml-1" />
      <div className="w-4 h-4 rounded-full bg-white/20 ml-2" />
    </div>
    {/* Bottom shapes */}
    <div className="flex w-full h-[35%] justify-between items-end">
      <div className="w-[36%] aspect-square bg-[#3B71CA] rounded-[0.35rem] flex items-center justify-center pl-0.5 shadow-sm">
        <Play fill="white" className="w-[0.6rem] h-[0.6rem] text-white" />
      </div>
      <div className="w-[56%] h-full bg-[#22A659] rounded-tl-[1rem] rounded-br-[0.35rem] rounded-tr-[0.35rem] shadow-sm" />
    </div>
  </div>
);

const BrandTextLogo = () => (
  <div className="flex flex-col select-none">
    <span className="font-sans font-bold leading-tight tracking-tight text-xl text-[#0f172a]">BEAUTIFUL</span>
    <span className="font-sans font-bold leading-tight tracking-tight text-xl text-[#0f172a]">RANGPUR</span>
    <span className="font-sans font-bold leading-loose tracking-[0.2em] text-[10px] text-slate-400 uppercase">Solutions</span>
  </div>
);

// --- Sections ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
            <BrandIcon />
          </motion.div>
          <BrandTextLogo />
        </Link>
        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
          <Link href="#services" className="hover:text-[#0f172a] transition-colors">Services</Link>
          <Link href="#about" className="hover:text-[#0f172a] transition-colors">About Us</Link>
          <Link href="#contact" className="hover:text-[#0f172a] transition-colors">Contact</Link>
        </div>
        <div className="hidden md:block">
          <Link href="#contact" className="bg-[#0f172a] text-white px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors flex items-center gap-2">
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden z-10">
      {/* Abstract Background Shapes */}
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-slate-50 rounded-full blur-3xl opacity-50 z-[-1]" />
      <div className="absolute bottom-[5%] left-[-5%] w-[300px] h-[300px] bg-slate-100 rounded-full blur-2xl opacity-40 z-[-1]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full mb-6 w-fit"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">Digital Solutions Agency in Rangpur</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05] text-slate-900 mb-8"
          >
            Discover new <br/> <span className="text-slate-400">opportunities.</span><br />
            Grow your <span className="text-slate-400">venture.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed mb-10 font-light"
          >
            We help individuals and businesses across Bangladesh improve productivity and market their products with a wide range of tailored digital solutions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="#services" className="bg-[#0f172a] text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 group">
              Explore Our Services 
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#contact" className="bg-white border border-slate-200 text-[#0f172a] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
              Contact Us <Phone className="w-4 h-4 opacity-50" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, description, color, delay }: any) => {
  const isDark = color === 'blue';
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className={`p-8 rounded-2xl border ${isDark ? 'bg-[#0f172a] text-white border-transparent' : 'bg-slate-50 border-slate-100'} transition-all flex flex-col items-start group`}
    >
      <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-6 border ${isDark ? 'bg-slate-800 border-transparent text-white' : 'bg-indigo-50 border-indigo-100 text-indigo-600'}`}>
        <Icon className="w-5 h-5" />
      </div>
      <h3 className={`text-xl font-bold mb-3 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
      <p className={`leading-relaxed font-light text-sm ${isDark ? 'text-slate-300' : 'text-slate-400'}`}>{description}</p>
      <div className={`mt-8 pt-6 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'} w-full flex items-center text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-slate-300 group-hover:text-white' : 'text-slate-500 group-hover:text-slate-900'} transition-colors cursor-pointer`}>
        Learn more <ArrowUpRight className="w-4 h-4 ml-1 opacity-50 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-slate-900 mb-4 tracking-tighter">Tailored Digital Solutions</h2>
            <p className="text-slate-500 text-lg font-light">We provide specialized services designed to elevate your brand both online and offline across Bangladesh.</p>
          </div>
          <Link href="#contact" className="text-[10px] font-bold uppercase tracking-widest border-b border-[#0f172a] pb-1 self-start md:self-auto hover:text-slate-500 hover:border-slate-500 transition-colors">
            See all services
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard 
            icon={MonitorPlay}
            title="Digital Marketing"
            description="Boost your online presence with targeted campaigns. We help you reach the right audience, increase engagement, and drive conversions."
            color="red"
            delay={0.1}
          />
          <ServiceCard 
            icon={Globe}
            title="IT Solutions"
            description="Robust development and technical solutions. From web platforms to custom software, we build the infrastructure you need to scale."
            color="blue"
            delay={0.2}
          />
          <ServiceCard 
            icon={Layers}
            title="Offline Marketing"
            description="Bridge the gap between digital and physical. Creative offline strategies that resonate with your local market and build brand loyalty."
            color="green"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50 text-[#0f172a] z-10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-sans font-bold tracking-tighter text-4xl md:text-5xl mb-6">Built for Bangladesh.<br/><span className="text-slate-400">Ready for the World.</span></h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8 font-light">
              Based in Rangpur City, we understand the local market nuances while applying global best practices. Our multi-lingual team acts as your dedicated growth partner, transforming ideas into remarkable digital experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase text-slate-500">
                <Globe className="w-4 h-4 text-slate-400" /> Bengali, English, German
              </div>
              <div className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase text-slate-500">
                <MapPin className="w-4 h-4 text-slate-400" /> Rangpur Sadar
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0f172a] border border-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden text-white shadow-2xl"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <BrandIcon className="scale-150 origin-top-right grayscale" />
            </div>
            
            <div className="grid gap-8">
              <div>
                <div className="text-white font-sans text-5xl font-bold tracking-tighter mb-2">100+</div>
                <div className="text-[10px] tracking-[0.2em] uppercase font-bold text-slate-400">Projects Delivered</div>
              </div>
              <div className="h-px bg-slate-800 w-full" />
              <div>
                <div className="text-white font-sans text-5xl font-bold tracking-tighter mb-2">360°</div>
                <div className="text-[10px] tracking-[0.2em] uppercase font-bold text-slate-400">Approach</div>
              </div>
              <div className="h-px bg-slate-800 w-full" />
              <div>
                <div className="text-white font-sans text-5xl font-bold tracking-tighter mb-2">24/7</div>
                <div className="text-[10px] tracking-[0.2em] uppercase font-bold text-slate-400">Dedicated Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-50 rounded-[2rem] p-8 md:p-16 border border-slate-100 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="font-sans font-bold text-4xl md:text-5xl text-slate-900 mb-6 tracking-tighter">Let&apos;s grow your business together.</h2>
              <p className="text-slate-500 mb-10 text-lg font-light">Reach out to us for a free consultation. We&apos;re ready to discuss your goals and formulate the perfect digital strategy.</p>
              
              <div className="space-y-6">
                <a href="tel:+8801835255434" className="flex items-center gap-4 text-slate-700 hover:text-[#0f172a] transition-colors p-4 rounded-2xl hover:bg-white border border-transparent hover:border-slate-200 shadow-sm hover:shadow">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 border border-slate-100">
                     <Phone className="w-5 h-5 text-slate-900" />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.2em] uppercase font-bold text-slate-400 mb-0.5">Call Us</div>
                    <div className="font-semibold text-slate-900">+880 1835-255434</div>
                  </div>
                </a>
                
                <a href="mailto:beautifulrangpursolutions@gmail.com" className="flex items-center gap-4 text-slate-700 hover:text-[#0f172a] transition-colors p-4 rounded-2xl hover:bg-white border border-transparent hover:border-slate-200 shadow-sm hover:shadow">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 border border-slate-100">
                     <Mail className="w-5 h-5 text-slate-900" />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.2em] uppercase font-bold text-slate-400 mb-0.5">Email Us</div>
                    <div className="font-semibold text-slate-900 break-all">beautifulrangpursolutions@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-slate-700 p-4 rounded-2xl border border-transparent">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 border border-slate-100">
                     <MapPin className="w-5 h-5 text-slate-900" />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.2em] uppercase font-bold text-slate-400 mb-0.5">Visit Us</div>
                    <div className="font-semibold text-slate-900">Rangpur Sadar, Rangpur,<br/>Bangladesh, 5402</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-slate-200">
              <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] tracking-[0.2em] uppercase font-bold text-slate-500 ml-1">First Name</label>
                    <input type="text" placeholder="John" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all font-light placeholder:text-slate-400" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] tracking-[0.2em] uppercase font-bold text-slate-500 ml-1">Last Name</label>
                    <input type="text" placeholder="Doe" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all font-light placeholder:text-slate-400" />
                  </div>
                </div>
                <div className="space-y-1.5 mt-2">
                  <label className="text-[10px] tracking-[0.2em] uppercase font-bold text-slate-500 ml-1">Email</label>
                  <input type="email" placeholder="john@company.com" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all font-light placeholder:text-slate-400" />
                </div>
                <div className="space-y-1.5 mt-2">
                  <label className="text-[10px] tracking-[0.2em] uppercase font-bold text-slate-500 ml-1">How can we help?</label>
                  <textarea rows={4} placeholder="Tell us about your project..." className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all resize-none font-light placeholder:text-slate-400"></textarea>
                </div>
                <button className="mt-4 w-full bg-[#0f172a] text-white text-[11px] font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                   Send Message <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Footer = () => (
  <footer className="bg-white border-t border-slate-100 py-12">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 flex items-center justify-center shrink-0">
          <BrandIcon className="scale-75" />
        </div>
        <span className="font-sans font-bold tracking-tight text-slate-900">Beautiful Rangpur Solutions</span>
      </div>
      <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-slate-400">
        &copy; {new Date().getFullYear()} Beautiful Rangpur Solutions. All rights reserved.
      </div>
    </div>
  </footer>
);


export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#0f172a] selection:bg-slate-200 font-sans relative">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
