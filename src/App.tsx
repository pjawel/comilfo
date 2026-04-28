import { Facebook, Mail, MapPin, Clock, Coffee, Heart, Star, Navigation } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useRef } from 'react';

const IMAGES = [
  {
    url: "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/595660925_1815987552433399_623065307133707314_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=2a1932&_nc_ohc=6QjdVnp2tCwQ7kNvwHz3NtH&_nc_oc=Adrj3Q7NJzOjjrAoD0-eio6nl3FoNEqRJnDKBTWfDaF0DIztl88_waTldYe7E6HDbvE&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=zmjmr8HTIopsrvVN2N3f7Q&_nc_ss=7b2a8&oh=00_Af1Z6vTKSyohW6VHUwrLT-IT_gQg9KBTmFtVl5ivtq-YIw&oe=69F67EB2",
    description: "Nastrojowe wnętrze kawiarni."
  },
  {
    url: "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/621826331_122114220711154519_6668624486579988928_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=8ESUPhOzD4QQ7kNvwG3jWII&_nc_oc=AdoshwbzE1XMtNlCvlzaJ5y7ThkjqaypTBvCMiHZdBt_EF2eyMbotISUhweOdO_Zm0&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=yU2XGlsS2X4gkKdtbm5b2A&_nc_ss=7b2a8&oh=00_Af3xTDJXI0171zBoP9j0Dbu_j3vEljDjk89d90wKX3_ESA&oe=69F69233",
    description: "Świeżo parzona kawa."
  },
  {
    url: "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/622950046_122114220753154519_2308730454484299804_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=M6xolT6tC8UQ7kNvwH2ThVp&_nc_oc=Adq8ZKSsaM2BxNb3fkXKLajmadnMqR1dzIop2G-2Enfczy_aU60IvwTwpuKPWFE2TX4&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=ttH0MmOKVFIBvktZewBuyA&_nc_ss=7b2a8&oh=00_Af3oPJ4zmU_ulNqC7YqX1mAqDA-m5sSGR60W2oDhTW9fYA&oe=69F6827C",
    description: "Słodkie uniesienie w każdym kęsie."
  },
  {
    url: "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/653071663_122119780713154519_7533307576968518923_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=jPwYxbwN-cEQ7kNvwGs3Kkt&_nc_oc=AdoA3OIxm5IXYXVhmEZ7ctiZqcWIG2aj6DgE0DIcGGJNmJll5535J6PFZ5N9gEa244I&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=8pm3MLkI9LJ0aM7R2rNOig&_nc_ss=7b2a8&oh=00_Af2i9vfzt93v2k8tSOa6ycDlkSxDCJWGSI6eAoEiZBGOhg&oe=69F69072",
    description: "Irish-coffee: gorąca kawa, whisky i słodycz."
  },
  {
    url: "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/613417530_122111897673154519_5563676271051782607_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=MBYr95Vv7aAQ7kNvwFoBzgF&_nc_oc=AdoIYQG_Jz6-wGg3nfyqD3N4g0AWf2VhhyVgAJu9a5xv3wI2oR78HJg5FsxD-OzyZ7E&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=nUS3tjcewhH4y_htDk9qoQ&_nc_ss=7b2a8&oh=00_Af2K7_9SPGIN2AiaCOu9yEd-5SaRpnzif25DLI5UTV15sg&oe=69F68F3A",
    description: "Dopracowane cappuccino z sercem."
  },
  {
    url: "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/612995709_122111577771154519_298181264795037489_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=VocJwzA3es4Q7kNvwGYKa04&_nc_oc=AdrWV6fExrjA9wRGY-kUjdbESJ1t1FwAnhkIRvg1e5pLlxrvSVCzrJgFgAelEQ3Dae4&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=t5TYw_IH2Ij9cO5fMxvoCg&_nc_ss=7b2a8&oh=00_Af2vkDc-QIyKse-lvaNTJfkfEWTXG-3x3NBxyUgizuONMw&oe=69F6684A",
    description: "Gorąca czekolada z puszystą śmietaną."
  },
  {
    url: "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/651746429_122119779933154519_2179158937137492872_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=NdpvpmVA9yoQ7kNvwHe31fD&_nc_oc=AdqIzwlSfYK-99IGYuUv00XjyO2aDvAFoLm8p1gdlKwsKite_ZEHIo3FLBdhasr6TBU&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=0Jch2WowWyO0_dcQ_SjiSg&_nc_ss=7b2a8&oh=00_Af1V0iXtcI6dMUIRseFeSpgP-pwnj_GEu5o8udQBkTt4SQ&oe=69F67008",
    description: "Kawowe martini na poprawę humoru."
  },
  {
    url: "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/633551336_122116099299154519_8053368810437275614_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=xOtJ22PLf8AQ7kNvwGgCfws&_nc_oc=Adrxo-IlPHRg4Me0wUmDXQVzX3kEMs0pAcWFI4PaavshKXJ-xZfhJk67LuP031Qbnmg&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=gNOZ6ZMmuvJsuhwZi6bfFw&_nc_ss=7b2a8&oh=00_Af2QjbwiOvJI92H25NeyXKdSGs8RJclK3ExiU9UK47zOVQ&oe=69F67BA7",
    description: "Nasz słodki kącik."
  },
  {
    url: "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/611865386_122111425707154519_896487753875912127_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=UNl3RMPyEnkQ7kNvwGKDB_H&_nc_oc=AdpZkkkaNU5bSrBTgKhrDFkhFFsAl4Ohn627QVnFARs67w6EboyeoPh4MWEFOnuGLs8&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=nahMVwVuRDAXgK9_2Tuk7g&_nc_ss=7b2a8&oh=00_Af1E0X7GCcbmKCraSeF8AzKH3_SyXeDVFdi9Ssnc6GnE3g&oe=69F67E10",
    description: "Espresso z rana."
  },
  {
    url: "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/607485426_122110695747154519_9168522993845560622_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=FRfdvvFutFcQ7kNvwHJ3RyN&_nc_oc=AdorWceJNeLDo9sOTGhWL5V2VgP7UrccNymoUSslhDHu9panRTkozIrmqNDi1CCRKac&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=n_LPOMSmCzRGlYMEdct-rA&_nc_ss=7b2a8&oh=00_Af0PcHuom7frF-0QZWc38TkTYHlzBHsnpow7jm9SIHKxkA&oe=69F68DCD",
    description: "Kawa na wynos."
  },
  {
    url: "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/596560622_122100635583154519_1306330224914870115_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=PousgRIij-oQ7kNvwFKl5JT&_nc_oc=AdrrCczb5IgNzNHZX5fcuYJqh8FnHFcNyFwqYN1w9_Hz20-rHXTWPjfknUIBdOw6KY4&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=IinvMczufKV0QnTL-ljJiA&_nc_ss=7b2a8&oh=00_Af11N84mWU50vFXslujnM6bfI9vGOaMoebVi8TssuqjymQ&oe=69F67D8B",
    description: "Detale robią różnicę."
  },
  {
    url: "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/595610788_122099327235154519_855588795752230402_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=SwOT5punBf0Q7kNvwHlqVrw&_nc_oc=Adqqrf_d74IBhshN_zNDgZsijCyYKcNXho_f1iatquSQR8TmRefayBYlBzfKLPdomY4&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=CbK0YtMRnNfKQMaGZiFdOA&_nc_ss=7b2a8&oh=00_Af1tPvjCaPqXPybtcXTGDOu7mcahYv8q3szmIYpZ1h2Yqw&oe=69F692A9",
    description: "Nasza pasja w filiżance."
  },
  {
    url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1000",
    description: "Wyśmienita kawa ziarnista."
  },
  {
    url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1000",
    description: "Atmosfera sprzyjająca rozmowom."
  },
  {
    url: "https://images.unsplash.com/photo-1507133750040-4a8f5700817f?auto=format&fit=crop&q=80&w=1000",
    description: "Moment dla Ciebie."
  }
];

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroImageScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-x-hidden selection:bg-brand-gold selection:text-white">
      <div className="grain-overlay" />

      {/* Pływające elementy dekoracyjne */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%" }}
            animate={{ 
              y: ["-20px", "20px"], 
              rotate: [0, 15, -15, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ 
              duration: 10 + i * 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute text-brand-warm-accent/20"
          >
            <Coffee size={40 + i * 10} />
          </motion.div>
        ))}
      </div>

      {/* Nawigacja */}
      <nav className="fixed top-0 inset-x-0 z-[100] px-6 py-8">
        <motion.div 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="max-w-6xl mx-auto flex items-center justify-between bg-white/40 backdrop-blur-xl border border-white/40 px-6 py-4 rounded-full shadow-2xl shadow-brand-coffee/5"
        >
          <div className="flex items-center space-x-12">
            <img 
              src="https://kawiarniacomilfo-kielce.pl/images/design/logo.webp" 
              alt="Logo" 
              className="h-10 w-auto hover:scale-110 transition-transform"
            />
            <div className="hidden md:flex space-x-8">
              {['Galeria', 'Historia', 'Menu', 'Opinie', 'Zespół', 'Lokalizacja'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-coffee/80 hover:text-brand-gold transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-gold transition-all group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>
          <a 
            href="https://www.facebook.com/profile.php?id=61584635585327" 
            target="_blank" 
            rel="noreferrer"
            className="group flex items-center space-x-2 bg-brand-coffee text-white px-5 py-2.5 rounded-full hover:bg-brand-gold transition-all active:scale-95 shadow-lg shadow-brand-coffee/20"
          >
            <Facebook size={14} />
            <span className="text-[10px] font-black tracking-widest">OBSERWUJ NAS</span>
          </a>
        </motion.div>
      </nav>

      {/* Sekcja Powitalna */}
      <section className="relative h-screen flex items-center justify-center">
        <motion.div 
          style={{ scale: heroImageScale, opacity: heroOpacity }}
          className="absolute inset-0 bg-brand-coffee"
        >
          <img 
            src={IMAGES[2]?.url} 
            alt="Tło kawiarni" 
            className="w-full h-full object-cover opacity-60 mix-blend-soft-light"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-coffee/40 via-transparent to-brand-cream z-10" />
        </motion.div>

        <div className="relative z-20 text-center space-y-8 px-4">
          <motion.div
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "normal" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="text-brand-gold font-medium tracking-[0.4em] text-sm uppercase">Poczuj klimat Kielc</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-7xl md:text-9xl lg:text-[11rem] text-brand-cream leading-[0.85] tracking-tighter text-glow"
          >
            Comilfo
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="max-w-xl mx-auto text-brand-cream/80 text-xl md:text-2xl font-light italic font-serif leading-relaxed"
          >
            Cisza, aromat świeżych ziaren i chwila tylko dla Ciebie na Placu Wolności.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col items-center pt-8 space-y-4"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-cream/40 font-bold">Przewiń w dół</span>
            <div className="w-px h-24 bg-gradient-to-b from-brand-gold to-transparent animate-pulse" />
          </motion.div>
        </div>
      </section>

      {/* Atmosfera i Galeria */}
      <section id="galeria" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="space-y-4">
              <h2 className="text-6xl md:text-8xl text-brand-coffee leading-tight">Nasze <br/><span className="text-brand-gold italic">Chwile</span></h2>
              <p className="text-brand-warm-accent max-w-sm text-lg leading-relaxed">Złapane momenty, które tworzą magię Comilfo. Pyszna kawa i domowe rarytasy w sercu miasta.</p>
            </div>
            <div className="vertical-text hidden md:block text-brand-gold opacity-30 text-[10px] tracking-[1em] font-bold">ATMOSFERA // WYBÓR 01</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* Główny element */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7 group cursor-pointer"
            >
              <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl shadow-brand-coffee/20">
                <img src={IMAGES[4]?.url} alt="Cappuccino" className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-brand-coffee/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute bottom-12 left-12 right-12 text-white transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-4xl mb-4 italic serif">Mistrzowskie Cappuccino</h3>
                  <p className="text-sm font-light leading-relaxed">Każda filiżanka to małe dzieło sztuki, podane z uważnością i ogromnym sercem.</p>
                </div>
              </div>
            </motion.div>

            {/* Boczna siatka */}
            <div className="md:col-span-5 space-y-12">
              {[IMAGES[5], IMAGES[3]].map((img, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * i }}
                  className="relative group"
                >
                  <div className="mask-oval overflow-hidden aspect-[3/2] bg-brand-warm-accent/10">
                    <img src={img.url} alt="Słodkości" className="w-full h-full object-cover transition-transform duration-1000 group-hover:rotate-3 group-hover:scale-110" />
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-[10px] uppercase tracking-widest text-brand-gold font-black mb-2">PROPOZYCJA DNIA</p>
                    <p className="text-brand-coffee/70 italic font-serif text-lg leading-snug">{img.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Historia i Vibe */}
      <section id="historia" className="py-40 relative bg-white/50">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-3 px-6 py-2 bg-brand-warm-accent/5 rounded-full border border-brand-warm-accent/10"
          >
            <Star className="text-brand-gold fill-brand-gold" size={14} />
            <span className="text-[10px] uppercase tracking-widest font-black text-brand-warm-accent">O nas</span>
          </motion.div>

          <h2 className="text-5xl md:text-8xl leading-[1.1] tracking-tight">Z miłości do <span className="italic font-light text-brand-gold">dobrego smaku</span> i spotkań przy wspólnym stole.</h2>
          
          <p className="max-w-2xl mx-auto text-brand-coffee/60 text-xl font-light leading-relaxed font-serif italic">
            Kawiarnia Comilfo powstała z marzenia o miejscu, w którym czas płynie wolniej. 
            W sercu Kielc stworzyliśmy azyl dla tych, którzy cenią najwyższą jakość kawy i domowe ciepło.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12">
            {[
              { icon: <Coffee />, label: "Ziarna Premium", desc: "Starannie wyselekcjonowane mieszanki z najlepszych palarni świata." },
              { icon: <Heart />, label: "Domowy Klimat", desc: "Każdy kąt naszej kawiarni został zaprojektowany z myślą o Twoim komforcie." },
              { icon: <Star />, label: "Pasja i Serce", desc: "Nie jesteśmy tylko kawiarnią - jesteśmy ludźmi, którzy kochają to, co robią." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="space-y-4 p-8 rounded-[2rem] bg-white border border-brand-coffee/5 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 mx-auto flex items-center justify-center bg-brand-gold/10 text-brand-gold rounded-full">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold tracking-tighter uppercase">{feature.label}</h4>
                <p className="text-sm text-brand-coffee/60 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NOWA SEKCJA: Menu Inspiracje */}
      <section id="menu" className="py-40 bg-brand-cream/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs">Odkryj smak</span>
                <h2 className="text-6xl md:text-8xl">Nasza Karta</h2>
              </div>
              
              <div className="space-y-8">
                {[
                  { name: "Klasyka Espresso", desc: "Intensywne, pełne aromatu i czystej energii." },
                  { name: "Puszyste Desery", desc: "Domowe ciasta i rzemieślnicze łakocie." },
                  { name: "Zimowe Rozgrzewacze", desc: "Napary i kawy, które otulają ciepłem." },
                  { name: "Koktajle Kawowe", desc: "Wyjątkowe połączenia na wieczorny relaks." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-6 group cursor-pointer"
                  >
                    <span className="text-brand-gold font-serif italic text-3xl opacity-30 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                    <div>
                      <h4 className="text-2xl font-bold tracking-tight">{item.name}</h4>
                      <p className="text-brand-coffee/50 font-serif italic">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(44,30,20,0.3)]">
              <motion.img 
                animate={{ scale: [1, 1.05, 1] }} 
                transition={{ duration: 20, repeat: Infinity }}
                src={IMAGES[11]?.url} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-coffee/60 via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12 text-white">
                <p className="text-5xl font-serif italic">Codziennie świeże</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOWA SEKCJA: Opinie */}
      <section id="opinie" className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-5xl md:text-7xl">Wasze <span className="text-brand-gold italic">Słowa</span></h2>
            <p className="text-brand-coffee/40 uppercase tracking-[0.2em] text-xs font-bold">To dla Was tworzymy to miejsce</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Najlepsza kawa w Kielcach! Atmosfera jest tak przytulna, że ciężko wyjść. Cappuccino to po prostu poezja.", author: "Anna K." },
              { text: "Cudowne miejsce na popołudniowy relaks. Gorąca czekolada z puszystą śmietaną skradła moje serce.", author: "Marek P." },
              { text: "Przepyszne ciasta i bardzo miła obsługa. Idealne miejsce na spotkanie z przyjaciółmi w samym centrum miasta.", author: "Kasia S." }
            ].map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-12 rounded-[3rem] bg-brand-cream/30 border border-brand-coffee/5 space-y-6 flex flex-col justify-between"
              >
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-brand-gold text-brand-gold" />)}
                </div>
                <p className="text-xl font-serif italic leading-relaxed text-brand-coffee/80">"{review.text}"</p>
                <p className="text-[10px] uppercase tracking-widest font-black text-brand-gold">— {review.author}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <a 
              href="https://www.facebook.com/profile.php?id=61584635585327&sk=reviews" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center space-x-3 text-brand-gold hover:text-brand-coffee transition-colors group"
            >
              <Facebook size={20} />
              <span className="text-sm font-bold tracking-widest uppercase border-b border-brand-gold group-hover:border-brand-coffee pb-1">Zobacz więcej opinii na Facebooku</span>
            </a>
          </div>
        </div>
      </section>

      {/* NOWA SEKCJA: Domowe Wypieki */}
      <section className="py-40 bg-brand-cream/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-5xl md:text-7xl">Rzemieślnicze <span className="text-brand-gold italic">Wypieki</span></h2>
            <p className="text-brand-coffee/40 uppercase tracking-[0.2em] text-xs font-bold">Codziennie coś słodkiego prosto z pieca</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative aspect-square rounded-[5rem] overflow-hidden shadow-2xl"
            >
              <img src={IMAGES[0]?.url} alt="Wypieki" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-brand-coffee/10" />
            </motion.div>

            <div className="space-y-10">
              <div className="space-y-6">
                <h3 className="text-4xl md:text-5xl italic font-serif">Słodka Strona Comilfo</h3>
                <p className="text-brand-coffee/70 text-lg leading-relaxed">
                  Nasze ciasta i desery to nie tylko smak, to wspomnienie niedzielnych poranków. 
                  Wybieramy tylko naturalne składniki: prawdziwe masło, wiejskie jaja i sezonowe owoce od lokalnych dostawców.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h4 className="font-bold uppercase tracking-widest text-brand-gold text-xs">Bezy Comilfo</h4>
                  <p className="text-sm text-brand-coffee/60">Lekkie jak chmurka, z musem owocowym i świeżymi owocami.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold uppercase tracking-widest text-brand-gold text-xs">Sernik Domowy</h4>
                  <p className="text-sm text-brand-coffee/60">Aksamitna konsystencja na kruchym spodzie, wedle sekretnej receptury.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold uppercase tracking-widest text-brand-gold text-xs">Szarlotka na Ciepło</h4>
                  <p className="text-sm text-brand-coffee/60">Z cynamonem i gałką lodów waniliowych — klasyka, która nie nudzi.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold uppercase tracking-widest text-brand-gold text-xs">Tarty Sezonowe</h4>
                  <p className="text-sm text-brand-coffee/60">Zawsze to, co najlepsze w danej porze roku, zamknięte w kruchym cieście.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOWA SEKCJA: Nasz Zespół */}
      <section id="zespół" className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="space-y-4">
              <h2 className="text-6xl md:text-8xl text-brand-coffee leading-tight">Ludzie <br/><span className="text-brand-gold italic">z Pasją</span></h2>
              <p className="text-brand-warm-accent max-w-sm text-lg leading-relaxed">Poznaj osoby, które każdego dnia dbają o to, by każda wizyta w Comilfo była wyjątkowa.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Kasia", role: "Właścicielka & Serce", img: IMAGES[1]?.url },
              { name: "Ania", role: "Mistrzyni Kawy", img: IMAGES[14]?.url },
              { name: "Piotr", role: "Cukiernik", img: IMAGES[13]?.url }
            ].map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden mb-8 shadow-xl">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-brand-gold/10 group-hover:bg-transparent transition-colors" />
                </div>
                <h4 className="text-2xl font-bold tracking-tight">{member.name}</h4>
                <p className="text-brand-gold font-serif italic">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NOWA SEKCJA: Najczęstsze Pytania */}
      <section className="py-40 bg-brand-cream/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl mb-6">Warto <span className="text-brand-gold italic">Wiedzieć</span></h2>
            <p className="text-brand-coffee/40 uppercase tracking-[0.2em] text-xs font-bold">Najczęściej zadawane pytania</p>
          </div>

          <div className="space-y-6">
            {[
              { q: "Czy kawiarnia jest przyjazna zwierzętom?", a: "Oczywiście! Uwielbiamy czworonożnych gości. Zawsze czeka na nich miska ze świeżą wodą." },
              { q: "Czy oferujecie opcje wegańskie i bezglutenowe?", a: "Tak, w naszej ofercie znajdziesz mleka roślinne oraz wybór ciast przygotowanych z myślą o różnych potrzebach dietetycznych." },
              { q: "Czy można zarezerwować stolik?", a: "Tak, przyjmujemy rezerwacje telefoniczne oraz przez nasze media społecznościowe." },
              { q: "Czy posiadacie ofertę śniadaniową?", a: "Zapraszamy na pyszne, świeże wypieki i kanapki, które idealnie smakują z poranną kawą." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-brand-coffee/5 shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="text-xl font-bold mb-4 tracking-tight text-brand-coffee">{item.q}</h4>
                <p className="text-brand-coffee/60 leading-relaxed font-serif italic">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lokalizacja i Kontakt */}
      <section id="lokalizacja" className="py-40 bg-brand-coffee text-brand-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={IMAGES[0]?.url} alt="Nastrojowe tło" className="w-full h-full object-cover blur-md" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-12"
            >
              <div className="space-y-4">
                <h2 className="text-7xl font-light leading-tight tracking-tighter">Odwiedź naszą <br/><span className="text-brand-gold italic">przestrzeń</span></h2>
                <div className="flex items-center space-x-3 text-brand-gold">
                  <MapPin size={24} />
                  <span className="text-2xl font-serif">Pl. Wolności 1, Kielce 25 - 367</span>
                </div>
              </div>

              <div className="space-y-8">
                <p className="text-brand-cream/60 uppercase tracking-widest text-[10px] font-black">Zapraszamy w godzinach</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-4">
                  {[
                    ['Poniedziałek', '14:00 - 20:00'],
                    ['Wtorek', '10:00 - 20:00'],
                    ['Środa', '10:00 - 20:00'],
                    ['Czwartek', '10:00 - 20:00'],
                    ['Piątek', '10:00 - 20:00'],
                    ['Sobota', '10:00 - 20:00'],
                    ['Niedziela', '10:00 - 20:00'],
                  ].map(([day, time]) => (
                    <div key={day} className="flex justify-between border-b border-white/10 pb-3">
                      <span className="text-sm font-bold tracking-tight opacity-80">{day}</span>
                      <span className="text-sm italic font-serif text-brand-gold">{time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-12">
                 <a 
                  href="mailto:kmnkawiarnia@gmail.com" 
                  className="group flex flex-col space-y-2 no-underline"
                >
                  <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-black group-hover:text-brand-gold transition-colors">Masz pytania? Napisz</span>
                  <span className="text-3xl md:text-5xl font-serif italic text-brand-gold group-hover:text-white transition-colors">kmnkawiarnia@gmail.com</span>
                </a>
              </div>
            </motion.div>

            {/* Kontener Mapy */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative group h-[600px]"
            >
              <div className="absolute inset-0 bg-brand-gold rounded-[5rem] rotate-3 group-hover:rotate-0 transition-transform duration-700" />
              <div className="absolute inset-0 bg-white rounded-[5rem] -rotate-3 group-hover:rotate-0 transition-transform duration-700 overflow-hidden shadow-2xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2517.994460438809!2d20.634014099999998!3d50.868302299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4718273d4ba92799%3A0xd98195c9aacb3e05!2sKawiarnia%20Kielce%20-%20COMILFO!5e0!3m2!1spl!2spl!4v1777378138287!5m2!1spl!2spl" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(1) contrast(1.2) brightness(0.9) invert(0.1)' }} 
                  allowFullScreen 
                  loading="lazy" 
                  title="Mapa Lokalizacji Comilfo"
                />
                <div className="absolute top-10 right-10">
                  <a 
                    href="https://www.google.com/maps/dir//Pl.+Wolności+1,+25-367+Kielce" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex h-14 w-14 items-center justify-center bg-brand-coffee text-white rounded-full hover:bg-brand-gold shadow-2xl transition-all hover:scale-110 active:scale-90"
                  >
                    <Navigation size={22} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stopka */}
      <footer className="py-24 text-center bg-white border-t border-brand-coffee/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center space-y-12">
            <motion.img 
              whileHover={{ scale: 1.05 }}
              src="https://kawiarniacomilfo-kielce.pl/images/design/logo.webp" 
              alt="Logo" 
              className="h-20 w-auto opacity-30 grayscale filter"
            />
            
            <div className="flex space-x-12">
              <a 
                href="https://www.facebook.com/profile.php?id=61584635585327" 
                target="_blank"
                rel="noreferrer"
                className="p-4 bg-brand-coffee/5 text-brand-coffee/40 rounded-full hover:bg-brand-gold hover:text-white transition-all transform hover:-translate-y-1"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="mailto:kmnkawiarnia@gmail.com"
                className="p-4 bg-brand-coffee/5 text-brand-coffee/40 rounded-full hover:bg-brand-gold hover:text-white transition-all transform hover:-translate-y-1"
              >
                <Mail size={24} />
              </a>
            </div>

            <div className="w-full pt-16 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.3em] font-black text-brand-coffee/30">
              <p>&copy; {new Date().getFullYear()} KAWIARNIA COMILFO KIELCE</p>
              <div className="flex space-x-12">
                <a href="#galeria" className="hover:text-brand-gold transition-colors">Galeria</a>
                <a href="#historia" className="hover:text-brand-gold transition-colors">Nasza Historia</a>
                <a href="https://www.facebook.com/profile.php?id=61584635585327&sk=reviews" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors">Wszystkie Opinie</a>
              </div>
              <p>PLAC WOLNOŚCI 1, KIELCE</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
