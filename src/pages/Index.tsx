import heroImage from "@/assets/hero-beauty.jpg";
import lipstickImg from "@/assets/product-lipstick.jpg";
import serumImg from "@/assets/product-serum.jpg";
import creamImg from "@/assets/product-cream.jpg";
import tryonImg from "@/assets/tryon-model.jpg";

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
    <nav className="container mx-auto flex items-center justify-between py-4 px-6">
      <a href="#home" className="font-display text-2xl font-bold text-foreground tracking-wider">
        BLOOM
      </a>
      <ul className="hidden md:flex gap-8 font-body text-sm tracking-widest uppercase text-muted-foreground">
        {["Home", "Products", "Reviews", "Try-On", "Contact"].map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase().replace("-", "")}`}
              className="hover:text-primary transition-colors duration-300"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img src={heroImage} alt="Luxury beauty products" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
    <div className="absolute inset-0 bg-foreground/20" />
    <div className="relative z-10 text-center px-6">
      <h1 className="font-display text-5xl md:text-7xl font-light text-primary-foreground mb-4 tracking-wide">
        Timeless Beauty
      </h1>
      <p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-md mx-auto">
        Discover luxury skincare & cosmetics crafted for you.
      </p>
      <a
        href="#products"
        className="inline-block bg-primary text-primary-foreground font-body text-sm uppercase tracking-widest px-10 py-4 rounded-sm hover:opacity-90 transition-opacity"
      >
        Shop Now
      </a>
    </div>
  </section>
);

const products = [
  { img: lipstickImg, name: "Velvet Rouge", desc: "Long-lasting matte lipstick in bold crimson." },
  { img: serumImg, name: "Glow Serum", desc: "Brightening vitamin C serum for radiant skin." },
  { img: creamImg, name: "Silk Cream", desc: "Hydrating moisturizer with hyaluronic acid." },
];

const Products = () => (
  <section id="products" className="py-24 bg-rose-light">
    <div className="container mx-auto px-6">
      <h2 className="font-display text-4xl md:text-5xl text-center mb-16 text-foreground">Our Collection</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {products.map((p) => (
          <div key={p.name} className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
            <div className="overflow-hidden">
              <img src={p.img} alt={p.name} loading="lazy" width={512} height={512}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 text-center">
              <h3 className="font-display text-2xl mb-2 text-foreground">{p.name}</h3>
              <p className="text-muted-foreground text-sm mb-5">{p.desc}</p>
              <button className="bg-primary text-primary-foreground text-xs uppercase tracking-widest px-8 py-3 rounded-sm hover:opacity-90 transition-opacity">
                Add to Bag
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const reviews = [
  { name: "Sophia L.", stars: 5, text: "The Glow Serum transformed my skin in just two weeks!" },
  { name: "Mia R.", stars: 4, text: "Velvet Rouge is the perfect everyday shade. So creamy." },
  { name: "Isabella K.", stars: 5, text: "Silk Cream keeps my skin hydrated all day. Absolutely love it." },
];

const Reviews = () => (
  <section id="reviews" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <h2 className="font-display text-4xl md:text-5xl text-center mb-16 text-foreground">What They Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((r) => (
          <div key={r.name} className="bg-muted rounded-lg p-8 text-center">
            <div className="text-gold text-xl mb-3">{"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)}</div>
            <p className="text-muted-foreground text-sm italic mb-4">"{r.text}"</p>
            <p className="font-display text-lg text-foreground">{r.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const shades = [
  { name: "Classic Red", color: "#c0392b" },
  { name: "Rosewood", color: "#b5495b" },
  { name: "Nude Pink", color: "#d4a5a5" },
  { name: "Berry", color: "#8e3a59" },
  { name: "Coral", color: "#e07c6e" },
];

const TryOn = () => (
  <section id="tryon" className="py-24 bg-rose-light">
    <div className="container mx-auto px-6">
      <h2 className="font-display text-4xl md:text-5xl text-center mb-16 text-foreground">Virtual Try-On</h2>
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <img src={tryonImg} alt="Try on lipstick shades" loading="lazy" width={800} height={800}
          className="w-72 h-72 object-cover rounded-xl shadow-md" />
        <div className="flex-1 text-center md:text-left">
          <p className="text-muted-foreground mb-6">Pick a shade and hover to preview the color.</p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {shades.map((s) => (
              <button key={s.name} title={s.name}
                style={{ backgroundColor: s.color }}
                className="w-12 h-12 rounded-full border-2 border-background shadow hover:scale-125 hover:shadow-lg transition-all duration-300"
              />
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
            {shades.map((s) => (
              <span key={s.name} className="text-xs text-muted-foreground">{s.name}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Chatbot = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <h2 className="font-display text-4xl md:text-5xl text-center mb-16 text-foreground">Ask Lara</h2>
      <div className="max-w-sm mx-auto bg-card border border-border rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-primary text-primary-foreground px-6 py-4 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center text-sm font-bold">L</div>
          <span className="font-body text-sm tracking-wide">Lara — Beauty Assistant</span>
        </div>
        <div className="p-5 space-y-3 min-h-[200px]">
          <div className="bg-muted rounded-xl rounded-tl-none px-4 py-3 text-sm text-foreground max-w-[80%]">
            Hi! I'm Lara 💕 How can I help you find the perfect product?
          </div>
          <div className="bg-primary/10 rounded-xl rounded-tr-none px-4 py-3 text-sm text-foreground max-w-[80%] ml-auto">
            I'm looking for a hydrating cream.
          </div>
          <div className="bg-muted rounded-xl rounded-tl-none px-4 py-3 text-sm text-foreground max-w-[80%]">
            Our Silk Cream is perfect! It has hyaluronic acid for all-day moisture.
          </div>
        </div>
        <div className="border-t border-border px-4 py-3 flex items-center gap-2">
          <input type="text" placeholder="Type a message..." disabled
            className="flex-1 bg-muted/50 rounded-full px-4 py-2 text-sm text-muted-foreground outline-none cursor-not-allowed" />
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs">→</div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 bg-rose-light">
    <div className="container mx-auto px-6">
      <h2 className="font-display text-4xl md:text-5xl text-center mb-16 text-foreground">Get In Touch</h2>
      <form action="/thankyou" className="max-w-lg mx-auto space-y-5">
        <input type="text" name="name" placeholder="Your Name" required
          className="w-full bg-card border border-border rounded-md px-5 py-3 text-sm text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/40" />
        <input type="email" name="email" placeholder="Your Email" required
          className="w-full bg-card border border-border rounded-md px-5 py-3 text-sm text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/40" />
        <textarea name="message" placeholder="Your Message" rows={5} required
          className="w-full bg-card border border-border rounded-md px-5 py-3 text-sm text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none" />
        <button type="submit"
          className="w-full bg-primary text-primary-foreground text-sm uppercase tracking-widest py-4 rounded-md hover:opacity-90 transition-opacity">
          Send Message
        </button>
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-foreground text-background/70 py-12">
    <div className="container mx-auto px-6 text-center">
      <p className="font-display text-2xl text-background mb-4">BLOOM</p>
      <div className="flex justify-center gap-6 mb-6 text-sm">
        {["Instagram", "Pinterest", "Twitter"].map((s) => (
          <a key={s} href="#" className="hover:text-background transition-colors">{s}</a>
        ))}
      </div>
      <p className="text-xs text-background/50">© 2026 Bloom Beauty. All rights reserved.</p>
    </div>
  </footer>
);

const Index = () => (
  <div className="font-body">
    <Header />
    <Hero />
    <Products />
    <Reviews />
    <TryOn />
    <Chatbot />
    <Contact />
    <Footer />
  </div>
);

export default Index;
