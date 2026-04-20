'use client';

import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowUpRight, ChevronRight, Globe, Layers, Mail, MapPin, MonitorPlay, Phone, Play, Sparkles, Sun, Moon, Languages, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect, createContext, useContext } from 'react';
import { dict } from '@/lib/dictionaries';

// --- Contexts ---
type Lang = keyof typeof dict;
type Theme = 'light' | 'dark';

const AppContext = createContext<{
  lang: Lang; toggleLang: () => void;
  theme: Theme; toggleTheme: () => void;
  t: typeof dict.en;
} | null>(null);

const useAppContext = () => useContext(AppContext)!;

// --- Brand Logo Component ---
const BrandIcon = ({ className = '' }: { className?: string }) => (
  <div className={`relative flex flex-col justify-between ${className}`} style={{ width: '2.5rem', height: '2.8rem' }}>
    <div className="w-[85%] h-[58%] bg-[#DE6B63] rounded-r-3xl rounded-tl-lg relative overflow-hidden flex flex-col justify-center gap-1 pl-2">
      <div className="w-4 h-4 rounded-full bg-white/20 -ml-1" />
      <div className="w-4 h-4 rounded-full bg-white/20 ml-2" />
    </div>
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
    <span className="font-sans font-bold leading-tight tracking-tight text-xl text-[#0f172a] dark:text-white">BEAUTIFUL</span>
    <span className="font-sans font-bold leading-tight tracking-tight text-xl text-[#0f172a] dark:text-white">RANGPUR</span>
    <span className="font-sans font-bold leading-loose tracking-[0.2em] text-[10px] text-slate-400 uppercase">Solutions</span>
  </div>
);

// --- Sections ---
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggleLang, theme, toggleTheme, t } = useAppContext();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-[#020617]/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
            <BrandIcon />
          </motion.div>
          <BrandTextLogo />
        </Link>
        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
          <Link href="#services" className="hover:text-[#0f172a] dark:hover:text-white transition-colors">{t.nav.services}</Link>
          <Link href="#about" className="hover:text-[#0f172a] dark:hover:text-white transition-colors">{t.nav.about}</Link>
          <Link href="#contact" className="hover:text-[#0f172a] dark:hover:text-white transition-colors">{t.nav.contact}</Link>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2">
            <button onClick={toggleLang} className="p-2 text-slate-500 hover:text-[#0f172a] dark:text-slate-400 dark:hover:text-white transition-colors flex items-center gap-1">
              <Languages className="w-4 h-4" /> <span className="text-[10px] font-bold">{lang.toUpperCase()}</span>
            </button>
            <button onClick={toggleTheme} className="p-2 text-slate-500 hover:text-[#0f172a] dark:text-slate-400 dark:hover:text-white transition-colors max-w-[32px] overflow-hidden align-middle">
               {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
          <Link href="#contact" className="bg-[#0f172a] dark:bg-white text-white dark:text-[#0f172a] px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors flex items-center gap-2">
            {t.nav.getStarted} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Toggles */}
        <div className="md:hidden flex items-center gap-2">
           <button onClick={toggleLang} className="p-2 text-slate-500 dark:text-slate-400">
             <span className="text-[10px] font-bold">{lang.toUpperCase()}</span>
           </button>
           <button onClick={toggleTheme} className="p-2 text-slate-500 dark:text-slate-400 w-8 h-8 flex items-center justify-center">
             {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
           </button>
           <button onClick={() => setMobileMenuOpen(true)} className="p-2 ml-2 text-slate-900 dark:text-white w-8 h-8 flex items-center justify-center">
             <Menu className="w-6 h-6" />
           </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 z-50 bg-white dark:bg-[#020617] h-screen w-full flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-12">
              <BrandTextLogo />
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-slate-900 dark:text-white rounded-full bg-slate-100 dark:bg-slate-800">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col gap-6 text-xl font-bold tracking-tight text-slate-900 dark:text-white mb-auto">
              <Link href="#services" onClick={() => setMobileMenuOpen(false)}>{t.nav.services}</Link>
              <Link href="#about" onClick={() => setMobileMenuOpen(false)}>{t.nav.about}</Link>
              <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>{t.nav.contact}</Link>
            </div>
            <div className="pt-8 border-t border-slate-100 dark:border-slate-800">
               <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="w-full bg-[#0f172a] dark:bg-white text-white dark:text-[#0f172a] px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-widest text-center flex items-center justify-center gap-2">
                 {t.nav.getStarted} <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { t } = useAppContext();
  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden z-10">
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-slate-50 dark:bg-slate-900 rounded-full blur-3xl opacity-50 dark:opacity-20 z-[-1]" />
      <div className="absolute bottom-[5%] left-[-5%] w-[300px] h-[300px] bg-slate-100 dark:bg-slate-800 rounded-full blur-2xl opacity-40 dark:opacity-20 z-[-1]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full mb-6 w-fit"
          >
             <Sparkles className="w-3 h-3 text-[#DE6B63]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300">{t.hero.badge}</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05] text-slate-900 dark:text-white mb-8"
          >
            {t.hero.title1} <br/> <span className="text-slate-400">{t.hero.title2}</span><br />
            {t.hero.title3} <span className="text-slate-400">{t.hero.title4}</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed mb-10 font-light"
          >
            {t.hero.desc}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="#services" className="bg-[#0f172a] dark:bg-white text-white dark:text-[#0f172a] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 group">
              {t.hero.explore} 
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#contact" className="bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-800 text-[#0f172a] dark:text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-900 transition-all flex items-center justify-center gap-2">
              {t.hero.contact} <Phone className="w-4 h-4 opacity-50" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, description, color, delay }: any) => {
  const isDarkAccent = color === 'blue';
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className={`p-8 rounded-2xl border ${isDarkAccent ? 'bg-[#0f172a] dark:bg-white text-white dark:text-[#0f172a] border-transparent' : 'bg-slate-50 dark:bg-slate-900 border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white'} transition-all flex flex-col items-start group`}
    >
      <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-6 border ${isDarkAccent ? 'bg-slate-800 dark:bg-slate-100 border-transparent text-white dark:text-[#0f172a]' : 'bg-indigo-50 dark:bg-[#080c14] border-indigo-100 dark:border-indigo-900 text-indigo-600 dark:text-indigo-400'}`}>
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-xl font-bold mb-3 tracking-tight">{title}</h3>
      <p className={`leading-relaxed font-light text-sm ${isDarkAccent ? 'text-slate-300 dark:text-slate-600' : 'text-slate-500 dark:text-slate-400'}`}>{description}</p>
      <div className={`mt-8 pt-6 border-t ${isDarkAccent ? 'border-slate-800 dark:border-slate-200 text-slate-300 dark:text-slate-500 group-hover:text-white dark:group-hover:text-[#0f172a]' : 'border-slate-200 dark:border-slate-800 text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white'} w-full flex items-center text-[10px] font-bold uppercase tracking-widest transition-colors cursor-pointer`}>
        {Icon.displayName || 'Learn more'} <ArrowUpRight className="w-4 h-4 ml-1 opacity-50 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
};

const Services = () => {
  const { t } = useAppContext();
  return (
    <section id="services" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-slate-900 dark:text-white mb-4 tracking-tighter">{t.services.title}</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg font-light">{t.services.desc}</p>
          </div>
          <Link href="#contact" className="text-[10px] font-bold uppercase tracking-widest border-b border-[#0f172a] dark:border-white pb-1 self-start md:self-auto text-slate-900 dark:text-white hover:text-slate-500 dark:hover:text-slate-300 hover:border-slate-500 transition-colors">
            {t.services.seeAll}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard 
            icon={MonitorPlay}
            title={t.services.items[0].title}
            description={t.services.items[0].desc}
            color="red"
            delay={0.1}
          />
          <ServiceCard 
            icon={Globe}
            title={t.services.items[1].title}
            description={t.services.items[1].desc}
            color="blue"
            delay={0.2}
          />
          <ServiceCard 
            icon={Layers}
            title={t.services.items[2].title}
            description={t.services.items[2].desc}
            color="green"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const { t } = useAppContext();
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#080c14] text-[#0f172a] z-10 rounded-[3rem] mx-2 md:mx-6">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-sans font-bold tracking-tighter text-4xl md:text-5xl mb-6 dark:text-white">{t.about.title1}<br/><span className="text-slate-400">{t.about.title2}</span></h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-8 font-light">
              {t.about.desc}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-800 px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400">
                <Globe className="w-4 h-4 text-slate-400" /> {t.about.tags[0]}
              </div>
              <div className="flex items-center gap-2 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-800 px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400">
                <MapPin className="w-4 h-4 text-slate-400" /> {t.about.tags[1]}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0f172a] dark:bg-white border border-slate-800 dark:border-slate-200 rounded-3xl p-8 md:p-12 relative overflow-hidden text-white dark:text-[#0f172a] shadow-2xl"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 pointer-events-none">
              <BrandIcon className="scale-150 origin-top-right grayscale" />
            </div>
            
            <div className="grid gap-8">
              <div>
                <div className="text-white dark:text-[#0f172a] font-sans text-5xl font-bold tracking-tighter mb-2">{t.about.stats[0].value}</div>
                <div className="text-[10px] tracking-[0.2em] uppercase font-bold text-slate-400 dark:text-slate-500">{t.about.stats[0].label}</div>
              </div>
              <div className="h-px bg-slate-800 dark:bg-slate-200 w-full" />
              <div>
                <div className="text-white dark:text-[#0f172a] font-sans text-5xl font-bold tracking-tighter mb-2">{t.about.stats[1].value}</div>
                <div className="text-[10px] tracking-[0.2em] uppercase font-bold text-slate-400 dark:text-slate-500">{t.about.stats[1].label}</div>
              </div>
              <div className="h-px bg-slate-800 dark:bg-slate-200 w-full" />
              <div>
                <div className="text-white dark:text-[#0f172a] font-sans text-5xl font-bold tracking-tighter mb-2">{t.about.stats[2].value}</div>
                <div className="text-[10px] tracking-[0.2em] uppercase font-bold text-slate-400 dark:text-slate-500">{t.about.stats[2].label}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const Contact = () => {
  const { t } = useAppContext();
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-50 dark:bg-[#080c14] rounded-[2rem] p-8 md:p-16 border border-slate-100 dark:border-slate-800 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="font-sans font-bold text-4xl md:text-5xl text-slate-900 dark:text-white mb-6 tracking-tighter">{t.contact.title}</h2>
              <p className="text-slate-500 dark:text-slate-400 mb-10 text-lg font-light">{t.contact.desc}</p>
              
              <div className="space-y-6">
                <a href="tel:+8801835255434" className="flex items-center gap-4 text-slate-700 dark:text-slate-300 hover:text-[#0f172a] dark:hover:text-white transition-colors p-4 rounded-2xl hover:bg-white dark:hover:bg-[#020617] border border-transparent hover:border-slate-200 dark:hover:border-slate-800 shadow-sm hover:shadow">
                  <div className="w-12 h-12 bg-white dark:bg-[#020617] rounded-full flex items-center justify-center shrink-0 border border-slate-100 dark:border-slate-800">
                     <Phone className="w-5 h-5 text-slate-900 dark:text-slate-100" />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.2em] uppercase font-bold text-slate-400 mb-0.5">{t.contact.call}</div>
                    <div className="font-semibold text-slate-900 dark:text-white">+880 1835-255434</div>
                  </div>
                </a>
                
                <a href="mailto:beautifulrangpursolutions@gmail.com" className="flex items-center gap-4 text-slate-700 dark:text-slate-300 hover:text-[#0f172a] dark:hover:text-white transition-colors p-4 rounded-2xl hover:bg-white dark:hover:bg-[#020617] border border-transparent hover:border-slate-200 dark:hover:border-slate-800 shadow-sm hover:shadow">
                  <div className="w-12 h-12 bg-white dark:bg-[#020617] rounded-full flex items-center justify-center shrink-0 border border-slate-100 dark:border-slate-800">
                     <Mail className="w-5 h-5 text-slate-900 dark:text-slate-100" />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.2em] uppercase font-bold text-slate-400 mb-0.5">{t.contact.email}</div>
                    <div className="font-semibold text-slate-900 dark:text-white break-all">beautifulrangpursolutions@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300 p-4 rounded-2xl border border-transparent">
                  <div className="w-12 h-12 bg-white dark:bg-[#020617] rounded-full flex items-center justify-center shrink-0 border border-slate-100 dark:border-slate-800">
                     <MapPin className="w-5 h-5 text-slate-900 dark:text-slate-100" />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.2em] uppercase font-bold text-slate-400 mb-0.5">{t.contact.visit}</div>
                    <div className="font-semibold text-slate-900 dark:text-white max-w-[200px]">{t.contact.address}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#020617] rounded-[2rem] p-8 border border-slate-200 dark:border-slate-800">
              <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] tracking-[0.2em] uppercase font-bold text-slate-500 dark:text-slate-400 ml-1">{t.contact.formConfig.fname}</label>
                    <input type="text" placeholder={t.contact.formConfig.john} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-900 dark:focus:ring-white focus:border-slate-900 dark:focus:border-white transition-all font-light placeholder:text-slate-400 dark:placeholder:text-slate-600 dark:text-white" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] tracking-[0.2em] uppercase font-bold text-slate-500 dark:text-slate-400 ml-1">{t.contact.formConfig.lname}</label>
                    <input type="text" placeholder={t.contact.formConfig.doe} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-900 dark:focus:ring-white focus:border-slate-900 dark:focus:border-white transition-all font-light placeholder:text-slate-400 dark:placeholder:text-slate-600 dark:text-white" />
                  </div>
                </div>
                <div className="space-y-1.5 mt-2">
                  <label className="text-[10px] tracking-[0.2em] uppercase font-bold text-slate-500 dark:text-slate-400 ml-1">{t.contact.formConfig.email}</label>
                  <input type="email" placeholder="john@company.com" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-900 dark:focus:ring-white focus:border-slate-900 dark:focus:border-white transition-all font-light placeholder:text-slate-400 dark:placeholder:text-slate-600 dark:text-white" />
                </div>
                <div className="space-y-1.5 mt-2">
                  <label className="text-[10px] tracking-[0.2em] uppercase font-bold text-slate-500 dark:text-slate-400 ml-1">{t.contact.formConfig.help}</label>
                  <textarea rows={4} placeholder={t.contact.formConfig.helpPlaceholder} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-900 dark:focus:ring-white focus:border-slate-900 dark:focus:border-white transition-all resize-none font-light placeholder:text-slate-400 dark:placeholder:text-slate-600 dark:text-white"></textarea>
                </div>
                <button className="mt-4 w-full bg-[#0f172a] dark:bg-white text-white dark:text-[#0f172a] text-[11px] font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                   {t.contact.formConfig.send} <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Footer = () => {
  const { t } = useAppContext();
  return (
    <footer className="bg-white dark:bg-[#020617] border-t border-slate-100 dark:border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center shrink-0">
            <BrandIcon className="scale-75" />
          </div>
          <span className="font-sans font-bold tracking-tight text-slate-900 dark:text-white">Beautiful Rangpur Solutions</span>
        </div>
        <div className="text-[10px] text-center uppercase font-bold tracking-[0.3em] text-slate-400 dark:text-slate-600">
          &copy; {new Date().getFullYear()} {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  const [lang, setLang] = useState<Lang>('en');
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as Theme;
    const savedLang = localStorage.getItem('lang') as Lang;

    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }

    if (savedLang && (savedLang === 'en' || savedLang === 'bn')) {
      setLang(savedLang);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  const toggleLang = () => {
    const nextLang = lang === 'en' ? 'bn' : 'en';
    setLang(nextLang);
    localStorage.setItem('lang', nextLang);
  };

  if (!mounted) {
    return <div className="min-h-screen bg-white" />; // Prevent hydration mismatch flash
  }

  const t = dict[lang];

  return (
    <AppContext.Provider value={{ lang, toggleLang, theme, toggleTheme, t }}>
      <main className="min-h-screen bg-white dark:bg-[#020617] text-[#0f172a] dark:text-white selection:bg-slate-200 dark:selection:bg-slate-800 font-sans relative transition-colors duration-300">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
      </main>
    </AppContext.Provider>
  );
}
