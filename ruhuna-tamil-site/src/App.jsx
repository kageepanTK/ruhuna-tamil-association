import React, { useState } from "react";
import "./App.css";

const copy = {
  en: {
    nav: ["Home", "About", "Events", "Gallery", "Committee", "Contact"],
    welcome: "Welcome to the",
    name: "Tamil Students’ Association",
    intro:
      "A home for Tamil students at the University of Ruhuna — celebrating our language, culture, and unity, and building a stronger community for today and tomorrow.",
    learn: "Learn More",
    ourEvents: "Our Events",
    motto: "Language · Culture · Community",
    cards: [
      {
        icon: "people",
        title: "About Us",
        eyebrow: "OUR PURPOSE, OUR PEOPLE",
        text: "Learn about our journey, vision, and the role we play in supporting Tamil students at the University of Ruhuna.",
        link: "Discover More",
        href: "#about",
      },
      {
        icon: "calendar",
        title: "Upcoming Events",
        eyebrow: "STAY CONNECTED",
        text: "From cultural celebrations to academic and community initiatives — explore our events and be part of what’s next.",
        link: "View Events",
        href: "#events",
      },
      {
        icon: "community",
        title: "Our Community",
        eyebrow: "PEOPLE · CULTURE · PROGRESS",
        text: "A diverse and vibrant community united by shared heritage, friendships, and a commitment to make a meaningful impact.",
        link: "Meet Our Community",
        href: "#committee",
      },
    ],
    footer: "Tamil Students’ Association · University of Ruhuna",
  },
  ta: {
    nav: ["முகப்பு", "எங்களைப் பற்றி", "நிகழ்வுகள்", "படத்தொகுப்பு", "நிர்வாகம்", "தொடர்பு"],
    welcome: "வரவேற்கிறோம்",
    name: "தமிழ் மாணவர் சங்கம்",
    intro:
      "றுகுணு பல்கலைக்கழக தமிழ் மாணவர்களின் இல்லம் — எமது மொழி, பண்பாடு, ஒற்றுமையைக் கொண்டாடி, வலுவான சமூகத்தை உருவாக்குவோம்.",
    learn: "மேலும் அறிக",
    ourEvents: "நிகழ்வுகள்",
    motto: "மொழி · பண்பாடு · சமூகம்",
    cards: [
      { icon: "people", title: "எங்களைப் பற்றி", eyebrow: "எமது நோக்கம் · எமது மக்கள்", text: "எமது பயணம், நோக்கம் மற்றும் றுகுணு பல்கலைக்கழக தமிழ் மாணவர்களுக்கான பங்களிப்பை அறியுங்கள்.", link: "மேலும் அறிக", href: "#about" },
      { icon: "calendar", title: "வரவிருக்கும் நிகழ்வுகள்", eyebrow: "எங்களுடன் இணைந்திருங்கள்", text: "பண்பாட்டு விழாக்கள் முதல் கல்வி மற்றும் சமூக முயற்சிகள் வரை — எமது நிகழ்வுகளில் பங்கேற்குங்கள்.", link: "நிகழ்வுகளைப் பாருங்கள்", href: "#events" },
      { icon: "community", title: "எமது சமூகம்", eyebrow: "மக்கள் · பண்பாடு · முன்னேற்றம்", text: "பகிரப்பட்ட மரபு, நட்பு மற்றும் சமூகப் பங்களிப்பால் ஒன்றிணைந்த மாணவர் சமூகம்.", link: "எமது சமூகத்தை அறியுங்கள்", href: "#committee" },
    ],
    footer: "தமிழ் மாணவர் சங்கம் · றுகுணு பல்கலைக்கழகம்",
  },
};

function Emblem() {
  return (
    <svg className="emblem" viewBox="0 0 72 72" role="img" aria-label="Decorative lotus emblem">
      <path d="M36 5 47 19 62 15 57 31 68 42 51 48 48 65 36 54 24 65 21 48 4 42 15 31 10 15 25 19Z" />
      <path d="M36 52c-10-8-12-16 0-28 12 12 10 20 0 28Zm0-3c-1-11-1-17 0-25m-1 14-9-8m11 8 9-8" />
      <circle cx="36" cy="53" r="3" />
    </svg>
  );
}

function FeatureIcon({ type }) {
  if (type === "calendar") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5" width="17" height="16" rx="2" /><path d="M7.5 3v4M16.5 3v4M4 9h16M8 13h3m-3 4h3m3-4h2m-2 4h2" /></svg>;
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20v-2.2A4.8 4.8 0 0 1 7.8 13h2.4a4.8 4.8 0 0 1 4.8 4.8V20Zm13-6.5a4 4 0 0 1 5 3.8V20h-4" /></svg>;
}

function Header({ language, setLanguage, menuOpen, setMenuOpen, t }) {
  const ids = ["home", "about", "events", "gallery", "committee", "contact"];
  return (
    <header className="site-header" id="home">
      <a className="brand" href="#home" aria-label="Tamil Students’ Association home">
        <Emblem />
        <span className="brand-copy">
          <strong>TAMIL STUDENTS’ ASSOCIATION</strong>
          <span>UNIVERSITY OF RUHUNA</span>
          <small>மொழி · மரபு · மாணவர் ஒற்றுமை</small>
        </span>
      </a>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
        <span /><span /><span />
      </button>

      <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
        {t.nav.map((label, index) => (
          <a key={ids[index]} href={`#${ids[index]}`} onClick={() => setMenuOpen(false)}>{label}</a>
        ))}
        <div className="language-switch" aria-label="Choose language">
          <button className={language === "ta" ? "active" : ""} onClick={() => setLanguage("ta")}>தமிழ்</button>
          <span aria-hidden="true">|</span>
          <button className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")}>EN</button>
        </div>
      </nav>
    </header>
  );
}

function App() {
  const [language, setLanguage] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[language];

  return (
    <div className="site-shell" lang={language === "ta" ? "ta" : "en"}>
      <Header language={language} setLanguage={setLanguage} menuOpen={menuOpen} setMenuOpen={setMenuOpen} t={t} />

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">UNIVERSITY OF RUHUNA</p>
            <h1 id="hero-title">{t.welcome}<br /><span>{t.name}</span></h1>
            <p className="hero-intro">{t.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#about">{t.learn}<span aria-hidden="true">→</span></a>
              <a className="button button-outline" href="#events">{t.ourEvents}<span aria-hidden="true">▦</span></a>
            </div>
            <p className="hero-motto"><span />{t.motto}</p>
          </div>
          <div className="hero-photo" id="gallery" role="img" aria-label="Students enjoying a cultural celebration" />
        </section>

        <section className="features" aria-label="Explore the association">
          {t.cards.map((card) => (
            <article className="feature-card" id={card.href.slice(1)} key={card.title}>
              <div className="card-heading">
                <span className="icon-circle"><FeatureIcon type={card.icon} /></span>
                <div><h2>{card.title}</h2><p className="card-eyebrow">{card.eyebrow}</p></div>
              </div>
              <p className="card-description">{card.text}</p>
              <a className="text-link" href={card.href}>{card.link}<span aria-hidden="true">→</span></a>
            </article>
          ))}
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <Emblem />
        <p>{t.footer}</p>
        <a href="mailto:your-association-email@example.com">Contact the Association</a>
      </footer>
    </div>
  );
}

export default App;
