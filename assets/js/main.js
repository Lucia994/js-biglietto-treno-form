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
    // Calcolo prezzo base
  const costForKm = 0.21;
  let totalPriceTicket = userKm * costForKm;
  console.log(totalPriceTicket);

  // Sconto in base alla fascia
  if (userAge === "minorenne") {
    totalPriceTicket = totalPriceTicket - (totalPriceTicket * 0.2);
    console.log("discount_minors: " + "€" + totalPriceTicket.toFixed(2));
  }
  else if (userAge === "over65") {
    totalPriceTicket = totalPriceTicket - (totalPriceTicket * 0.4);
    console.log("discount_senior: " + "€" + totalPriceTicket.toFixed(2));
  }
  else {
    console.log("full_price: " + totalPriceTicket + "€");
  }


  // Output visibile
  output.innerText = `Passeggero: ${userFullName}\nKm: ${userKm}\nFascia età: ${userAge}\nPrezzo biglietto: €${totalPriceTicket.toFixed(2)}`;
  document.getElementById("ticket-box").style.display = "block";
});

