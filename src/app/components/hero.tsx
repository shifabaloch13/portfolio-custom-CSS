export default function Hero() {
     return (
       <main
         style={{
           backgroundImage: "url(/girl-in-black.jpg)",
           backgroundSize: "cover",
           backgroundPosition: "center",
           display: "flex",
           alignItems: "center",
           justifyContent: "center",
           height: "100vh",
           color: "#fff",
           textAlign: "center",
           padding: "20px",
         }}
       >
         <div
           className="heading"
           style={{
             maxWidth: "600px",
             width: "90%",
             backgroundColor: "rgba(0, 0, 0, 0.6)",
             padding: "20px",
             borderRadius: "10px",
           }}
         >
           <h2 style={{ fontSize: "1.5em", margin: "10px 0" }}>Hello  I m</h2>
           <h1 style={{ fontSize: "2.5em", margin: "10px 0" }}>Shifa Muhammad Akram</h1>
           <p style={{ fontSize: "1.2em", margin: "10px 0" }}>AND THIS IS MY RESUME</p>
           
           <button
             style={{
               fontSize: "1em",
               padding: "10px 20px",
               marginTop: "15px",
               color: "#fff",
               backgroundColor: "#ff6600",
               border: "none",
               borderRadius: "5px",
               cursor: "pointer",
               transition: "background-color 0.3s ease, transform 0.3s ease",
             }}
           >
             Download CV
           </button>
         </div>
       </main>
     );
   }