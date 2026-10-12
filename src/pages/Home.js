const heroImage = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2200&q=90';
const featuredIds = ['maletsunyane-falls', 'thaba-bosiu', 'katse-dam'];
const experiences = [
  { number: '01', title: 'Ride the highlands', detail: 'Follow ancient trails on horseback with a local Basotho guide.', icon: '↗' },
  { number: '02', title: 'Take the long road', detail: 'Cross remote mountain passes and villages on a 4x4 journey.', icon: '⌁' },
  { number: '03', title: 'Stay for the stories', detail: 'Share food, music and everyday life in a highland village.', icon: '✳' },
];

function Home({ attractions, onSelectAttraction }) {
  const featured = featuredIds.map((id) => attractions.find((attraction) => attraction.id === id));
  return (
    <>
      <section className="hero" id="home" style={{ backgroundImage: `linear-gradient(90deg, rgba(13, 36, 31, .78) 0%, rgba(13, 36, 31, .3) 55%, rgba(13, 36, 31, .08) 100%), linear-gradient(0deg, rgba(13, 36, 31, .36), transparent 45%), url(${heroImage})` }}>
        <div className="hero-content">
          <p className="hero-kicker"><span /> A small kingdom with a high point of view</p>
          <h1>Discover the<br /><em>Mountain</em><br />Kingdom.</h1>
          <div className="hero-bottomline"><p>Find your way to open skies, living culture and the quiet wonder of Lesotho.</p><a className="button button-light" href="#attractions">Find your somewhere <span aria-hidden="true">↘</span></a></div>
        </div>
        <div className="hero-coordinate"><span>29° 36&apos; S</span><span>28° 14&apos; E</span></div>
        <a className="hero-scroll" href="#about"><span /> Scroll to discover</a>
        <span className="hero-caption">MALUTI MOUNTAINS · LESOTHO</span>
      </section>

      <section className="intro-section" id="about" aria-labelledby="intro-title">
        <div className="intro-aside"><span className="section-index">01 / 03</span><span className="intro-sun" aria-hidden="true">✳</span></div>
        <div className="intro-copy">
          <p className="eyebrow">A country above the clouds</p>
          <h2 id="intro-title">One kingdom.<br />A <em>thousand</em><br />ways to feel it.</h2>
          <div className="intro-detail">
            <p>Surrounded by South Africa and lifted high into the Maluti Mountains, Lesotho is a place shaped by altitude and held together by its people. Come for the big views. Stay for the warmth, the stories, and the unhurried welcome.</p>
            <div className="intro-facts"><div><strong>3,482 m</strong><span>Thabana Ntlenyana,<br />southern Africa&apos;s highest point</span></div><div><strong>1,400 m+</strong><span>the whole country sits<br />above this altitude</span></div></div>
          </div>
        </div>
      </section>

      <section className="featured-section" aria-labelledby="featured-title">
        <div className="section-topline"><p className="eyebrow">A first taste of the highlands</p><a href="#attractions">All destinations <span aria-hidden="true">↗</span></a></div>
        <div className="featured-heading"><h2 id="featured-title">Start <em>somewhere.</em></h2><p>Three good reasons to take the scenic route.</p></div>
        <div className="featured-grid">
          {featured.map((attraction, index) => (
            <button className={`featured-card featured-card--${index + 1}`} type="button" onClick={() => onSelectAttraction(attraction)} key={attraction.id}>
              <img src={attraction.image} alt={attraction.imageAlt} loading="lazy" />
              <span className="featured-card-shade" />
              <span className="featured-card-number">0{index + 1} / {attraction.category}</span>
              <span className="featured-card-title">{attraction.name}<span aria-hidden="true">↗</span></span>
              <span className="featured-card-location">{attraction.location}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="experiences-section" aria-labelledby="experiences-title">
        <div className="experiences-heading"><p className="eyebrow">Not just a place to see</p><h2 id="experiences-title">Come for the view.<br /><em>Leave with a story.</em></h2></div>
        <div className="experience-list">
          {experiences.map((experience) => <article className="experience-row" key={experience.number}><span className="experience-number">{experience.number}</span><div><h3>{experience.title}</h3><p>{experience.detail}</p></div><span className="experience-icon" aria-hidden="true">{experience.icon}</span></article>)}
        </div>
      </section>
    </>
  );
}

export default Home;