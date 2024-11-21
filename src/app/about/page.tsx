export default function About() {
  return (
    <main
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "2rem",
          padding: "1rem",
          maxWidth: "900px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >

        <div style={{ width: "100%", maxWidth: "400px", textAlign: "center", marginBottom: "2rem" }}>
          <img
            src="./pageA.jpg"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "1rem",
            }}
            alt="profile picture of Shifa"
          />
        </div>

        <div style={{ textAlign: "center", padding: "0 1rem" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>About Me</h2>
          <p style={{ fontSize: "1rem", lineHeight: "1.6", textAlign: "justify" }}>
            Welcome to my portfolio! I m a passionate frontend developer with a love for building intuitive dynamic
            and visually compelling websites and applications With expertise in HTML CSS JavaScript and modern
            frameworks like Next.js I focus on creating seamless user-centered experiences that balance functionality
            with aesthetics Every project I undertake is driven by a commitment to clean efficient code and attention
            to detail, ensuring that each digital experience not only meets but exceeds expectations Explore my projects
            to see how I bring ideas to life through innovative design and thoughtful development
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "2rem",
          }}
        >
          <button
            style={{
              border: "2px solid grey",
              width: "130px",
              height: "3rem",
              borderRadius: "2rem",
              backgroundColor: "rgba(135, 161, 149)",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            HIRE ME
          </button>
          <button
            style={{
              border: "2px solid grey",
              width: "130px",
              height: "3rem",
              borderRadius: "2rem",
              backgroundColor: "rgba(167, 184, 136)",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            DOWNLOAD CV
          </button>
        </div>
      </div>
    </main>
  );
}