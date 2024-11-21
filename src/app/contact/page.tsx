'use client'
export default function Contact() {
    return (
        <main style={{
            color: "#333333",
            minHeight: "100vh",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f5f8fa"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "800px",
                width: "100%",
                margin: "0 auto",
                gap: "20px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                backgroundColor: "#ffffff",
                padding: "20px"
            }}>
                <div style={{ flex: 1, padding: "0 20px" }}>
                    <h2 style={{
                        textAlign: "center",
                        color: "#2c3e50",
                        fontSize: "32px",
                        fontWeight: "bold",
                        marginBottom: "20px"
                    }}>Get in Touch</h2>
                    <form style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px",
                        width: "100%"
                    }}>
                        <div>
                            <label htmlFor="Name" style={{ color: "#34495e", fontWeight: "bold" }}>Name</label>
                            <input type="text" id="Name" name="name" required style={{
                                width: "100%",
                                padding: "12px",
                                borderRadius: "5px",
                                border: "1px solid #bdc3c7",
                                backgroundColor: "#ecf0f1",
                                color: "#333",
                                outline: "none",
                                transition: "border 0.3s ease",
                            }} 
                            onFocus={(e) => e.target.style.border = "1px solid #3498db"}
                            onBlur={(e) => e.target.style.border = "1px solid #bdc3c7"}
                            />
                        </div>

                        <div>
                            <label htmlFor="Email" style={{ color: "#34495e", fontWeight: "bold" }}>Email</label>
                            <input type="email" id="Email" name="Email" required style={{
                                width: "100%",
                                padding: "12px",
                                borderRadius: "5px",
                                border: "1px solid #bdc3c7",
                                backgroundColor: "#ecf0f1",
                                color: "#333",
                                outline: "none",
                                transition: "border 0.3s ease",
                            }}
                            onFocus={(e) => e.target.style.border = "1px solid #3498db"}
                            onBlur={(e) => e.target.style.border = "1px solid #bdc3c7"}
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" style={{ color: "#34495e", fontWeight: "bold" }}>Phone</label>
                            <input type="tel" id="phone" name="phone" required style={{
                                width: "100%",
                                padding: "12px",
                                borderRadius: "5px",
                                border: "1px solid #bdc3c7",
                                backgroundColor: "#ecf0f1",
                                color: "#333",
                                outline: "none",
                                transition: "border 0.3s ease",
                            }}
                            onFocus={(e) => e.target.style.border = "1px solid #3498db"}
                            onBlur={(e) => e.target.style.border = "1px solid #bdc3c7"}
                            />
                        </div>

                        <div>
                            <label htmlFor="message" style={{ color: "#34495e", fontWeight: "bold" }}>Write a message</label>
                            <textarea id="message" name="message" required style={{
                                width: "100%",
                                padding: "12px",
                                borderRadius: "5px",
                                border: "1px solid #bdc3c7",
                                backgroundColor: "#ecf0f1",
                                color: "#333",
                                outline: "none",
                                minHeight: "100px",
                                transition: "border 0.3s ease",
                            }}
                            onFocus={(e) => e.target.style.border = "1px solid #3498db"}
                            onBlur={(e) => e.target.style.border = "1px solid #bdc3c7"}
                            ></textarea>
                        </div>

                        <button type="submit" style={{
                            padding: "12px",
                            borderRadius: "5px",
                            border: "none",
                            backgroundColor: "#808080",
                            color: "#ffffff",
                            cursor: "pointer",
                            fontWeight: "bold",
                            transition: "background-color 0.3s ease",
                        }}
                       
                        >Send Message</button>
                    </form>
                </div>

                <div style={{
                    flex: 1,
                    textAlign: "center",
                    padding: "20px",
                    marginTop: "20px",
                    backgroundColor: "#ecf0f1",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                }}>
                    <h3 style={{
                        color: "#2c3e50",
                        fontSize: "24px",
                        fontWeight: "bold",
                        marginBottom: "10px"
                    }}>My Contact Details</h3>
                    <h5 style={{ color: "#34495e", margin: "10px 0 5px" }}>Email</h5>
                    <a href="mailto:hongking@gmail.com" style={{
                        color: "#3498db",
                        textDecoration: "none"
                    }}>hongking@gmail.com</a>
                    <h5 style={{ color: "#34495e", margin: "10px 0 5px" }}>Phone</h5>
                    <p style={{ margin: "0", color: "#333" }}>0345-67598</p>
                    <h5 style={{ color: "#34495e", margin: "10px 0 5px" }}>Address</h5>
                    <p style={{ margin: "0", color: "#333" }}>Karachi, Pakistan</p>
                </div>
            </div>
        </main>
    )
};






















     

































  