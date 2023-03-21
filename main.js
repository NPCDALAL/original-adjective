// Ordinal Adjective by Azer

// Button Event Listener
document.getElementById("search-btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Search Input
  let ordinal = document.getElementById("search-in").value;

  // Test the Search Ordinal - Chained
  if (ordinal === "1") {
    document.getElementById("ordinal-look").innerHTML = `
    <p class="ordinal">1st</p>`;
  } else if (ordinal === "2") {
    document.getElementById("ordinal-look").innerHTML = `
    <p class="ordinal">2nd</p>`;
  } else if (ordinal === "3") {
    document.getElementById("ordinal-look").innerHTML = `
    <p class="ordinal">3rd</p>`;
  } else if (ordinal === "4") {
    document.getElementById("ordinal-look").innerHTML = `
    <p class="ordinal">4th</p>`;
  } else if (ordinal === "5") {
    document.getElementById("ordinal-look").innerHTML = `
    <p class="ordinal">5th</p>`;
  } else if (ordinal === "6") {
    document.getElementById("ordinal-look").innerHTML = `
    <p class="ordinal">6th</p>`;
  } else if (ordinal === "7") {
    document.getElementById("ordinal-look").innerHTML = `
        <p class="ordinal">7th</p>`;
  } else if (ordinal === "8") {
    document.getElementById("ordinal-look").innerHTML = `
    <p class="ordinal">8th</p>`;
  } else if (ordinal === "9") {
    document.getElementById("ordinal-look").innerHTML = `
    <p class="ordinal">9th</p>`;
  } else {
    document.getElementById("ordinal-look").innerHTML = `
      <p class="ordinal">Please enter a # between 1 and 9.</p>`;
  }
}
