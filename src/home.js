import React from "react";

const styles = {
  // Reset and base
  body: {
    background: "#f5f7fa",
    color: "#333",
    lineHeight: 1.6,
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
  },
  container: {
    width: "90%",
    maxWidth: 1200,
    margin: "auto",
    padding: "2rem 0",
  },
  header: {
    background: "#005f73",
    color: "#fff",
    padding: "1.5rem 0",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
  },
  headerH1: {
    fontSize: "2.5rem",
    letterSpacing: "1.2px",
    marginBottom: "0.2rem",
  },
  headerP: {
    fontSize: "1.1rem",
    opacity: 0.85,
  },
  hero: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "3rem 0",
  },
  heroText: {
    flex: "1 1 450px",
    paddingRight: "2rem",
  },
  heroTextH2: {
    fontSize: "2rem",
    color: "#0a9396",
    marginBottom: "1rem",
  },
  heroTextP: {
    fontSize: "1.2rem",
    marginBottom: "1.5rem",
    color: "#333",
  },
  heroButton: {
    background: "#ee6c4d",
    border: "none",
    color: "white",
    padding: "0.75rem 1.5rem",
    fontSize: "1.1rem",
    borderRadius: "30px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
  heroButtonHover: {
    background: "#d35400",
  },
  heroImage: {
    flex: "1 1 450px",
    textAlign: "center",
  },
  heroImageImg: {
    maxWidth: "100%",
    borderRadius: 12,
    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
  },
  destinations: {
    background: "#94d2bd",
    borderRadius: 12,
    padding: "2rem",
    marginBottom: "3rem",
  },
  destinationsH3: {
    textAlign: "center",
    color: "#005f73",
    marginBottom: "1.5rem",
    fontSize: "1.8rem",
  },
  destinationsList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1.5rem",
    justifyContent: "center",
  },
  destinationCard: {
    background: "white",
    borderRadius: 10,
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    width: 220,
    overflow: "hidden",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  destinationCardHover: {
    transform: "translateY(-6px)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
  },
  destinationImg: {
    width: "100%",
    height: 140,
    objectFit: "cover",
  },
  destinationH4: {
    padding: "0.8rem 1rem",
    color: "#0a9396",
    fontSize: "1.1rem",
    textAlign: "center",
  },
  guideSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    background: "#ee6c4d",
    color: "white",
    padding: "3rem 2rem",
    borderRadius: 12,
    flexWrap: "wrap",
  },
  guideText: {
    flex: "1 1 400px",
    maxWidth: 600,
  },
  guideTextH3: {
    fontSize: "2rem",
    marginBottom: "1rem",
    letterSpacing: "0.7px",
  },
  guideTextP: {
    fontSize: "1.2rem",
    lineHeight: 1.5,
  },
  guideImage: {
    flex: "1 1 300px",
    textAlign: "center",
  },
  guideImageImg: {
    maxWidth: "100%",
    borderRadius: 12,
    boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
  },
  footer: {
    background: "#005f73",
    color: "#fff",
    textAlign: "center",
    padding: "1rem 0",
    fontSize: "0.9rem",
    marginTop: "auto",
  },
};

const destinations = [
  {
    name: "Lalbagh Botanical Garden",
    img: "https://images.unsplash.com/photo-1562774056-48a3bdbb414b?auto=format&fit=crop&w=400&q=70",
    alt: "Lalbagh Botanical Garden",
  },
  {
    name: "Bangalore Palace",
    img: "https://images.unsplash.com/photo-1533616688412-65a6633dd0ea?auto=format&fit=crop&w=400&q=70",
    alt: "Bangalore Palace",
  },
  {
    name: "Cubbon Park",
    img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=400&q=70",
    alt: "Cubbon Park",
  },
  {
    name: "ISKCON Temple",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=70",
    alt: "ISKCON Temple",
  },
];

export default function ExploreBangalore() {
  // To handle hover states on cards and button, we can use React state or CSS-in-JS libraries
  // Here for simplicity, I'll keep it static (no hover effect implemented).
  // You can extend with useState and event handlers if needed.

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <div style={styles.container}>
          <h1 style={styles.headerH1}>Explore Bangalore in 1 Day</h1>
          <p style={styles.headerP}>
            Your one-stop platform for guided 1-day travel packages around Bangalore's top
            destinations and events.
          </p>
        </div>
      </header>

      <section style={{ ...styles.hero, ...styles.container }}>
        <div style={styles.heroText}>
          <h2 style={styles.heroTextH2}>Discover Popular Destinations & Events</h2>
          <p style={styles.heroTextP}>
            Spend your day exploring Bangalore's most loved spots and exciting events. We connect
            you with expert local guides who make your trip unforgettable.
          </p>
          <button
            style={styles.heroButton}
            onMouseEnter={e => (e.currentTarget.style.background = "#d35400")}
            onMouseLeave={e => (e.currentTarget.style.background = "#ee6c4d")}
          >
            Book Your Package
          </button>
        </div>
        <div style={styles.heroImage}>
          <img
            style={styles.heroImageImg}
            src="https://images.unsplash.com/photo-1549887536-9ee870c7eeba?auto=format&fit=crop&w=600&q=80"
            alt="Bangalore city view"
          />
        </div>
      </section>

      <section style={{ ...styles.destinations, ...styles.container }}>
        <h3 style={styles.destinationsH3}>Popular Destinations</h3>
        <div style={styles.destinationsList}>
          {destinations.map(({ name, img, alt }) => (
            <div
              key={name}
              style={styles.destinationCard}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
              }}
            >
              <img style={styles.destinationImg} src={img} alt={alt} />
              <h4 style={styles.destinationH4}>{name}</h4>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.guideSection}>
        <div style={styles.guideText}>
          <h3 style={styles.guideTextH3}>Are You a Local Guide?</h3>
          <p style={styles.guideTextP}>
            Join our platform to connect with travelers, share your knowledge, and earn money by
            guiding visitors through Bangalore's iconic locations and events.
          </p>
        </div>
        <div style={styles.guideImage}>
          <img
            style={styles.guideImageImg}
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
            alt="Local guide helping tourists"
          />
        </div>
      </section>

      <footer style={styles.footer}>&copy; 2025 Explore Bangalore. All Rights Reserved.</footer>
    </div>
  );
}
