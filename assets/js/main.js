console.log("Hello");

document.getElementById("ticket-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const userFullName = document.getElementById("userFullName").value.trim();
  const userKm = Number(document.getElementById("userKm").value);
  const userAge = document.getElementById("userAge").value;
  const errorDiv = document.getElementById("error");
  const output = document.getElementById("output");
  const ticketBox = document.getElementById("ticket-box");

  // Reset messaggi
  errorDiv.style.display = "none";
  errorDiv.innerText = "";
  output.innerText = "";
  ticketBox.style.display = "none";

  // Avviso dati corretti 
  if (!userFullName || isNaN(userKm) || userKm <= 0 || !userAge) {
    errorDiv.innerText = "⚠️ Inserisci tutti i dati corretti.";
    errorDiv.style.display = "block";
    return;
  }
