const environment = {
  temperature: 24,
  humidity: 34
};

const spools = [
  { material: "PLA", status: "Pronta", qty: 12, min: 5 },
  { material: "PETG", status: "In essiccazione", qty: 4, min: 5 },
  { material: "ABS", status: "Da essiccare", qty: 1, min: 3 }
];

// KPI
document.getElementById("temp").textContent = environment.temperature + " °C";
document.getElementById("humidity").textContent = environment.humidity + " %";
document.getElementById("drying").textContent =
  spools.filter(s => s.status !== "Pronta").length;

// Tabelle
const table = document.getElementById("spool-table");
const purchaseList = document.getElementById("purchase-list");

let alerts = 0;

spools.forEach(spool => {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${spool.material}</td>
    <td>${spool.status}</td>
    <td class="${spool.qty < spool.min ? "bad" : ""}">
      ${spool.qty}
    </td>
  `;

  table.appendChild(row);

  if (spool.qty < spool.min) {
    alerts++;
    const li = document.createElement("li");
    li.textContent = `Scorta bassa: consigliato riordino ${spool.material}`;
    purchaseList.appendChild(li);
  }
});

document.getElementById("alerts").textContent = alerts;
