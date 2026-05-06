import { useEffect } from "react";

const Success = () => {
  useEffect(() => {

    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get("session_id");

    console.log("SESSION:", sessionId);

    if (!sessionId) {
      alert("Missing session_id (Stripe issue)");
      return;
    }

    const generate = async () => {
      const res = await fetch(
        "https://novel-backend-1-93dx.onrender.com/generate-pdf",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            idea: localStorage.getItem("idea") || "test",
            tone: "dark psychological",
            character: "Elena",
            setting: "apartment",
            length: "medium",
            session_id: sessionId   // 👉 THIS is the important line
          })
        }
      );

      if (!res.ok) {
        alert("Backend error");
        console.log(await res.text());
        return;
      }

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "story.pdf";
      a.click();
    };

    generate();

  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Payment successful 🎉</h1>
      <p>Generating your book...</p>
    </div>
  );
};

export default Success;
