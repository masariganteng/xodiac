const eventDate = new Date("2026-11-28T19:00:00+07:00"); // Event date; time can be adjusted when confirmed.
const ticketDate = new Date("2026-10-15T13:00:00+07:00");

const $ = (id) => document.getElementById(id);

function pad(n){ return String(Math.max(0, n)).padStart(2, "0"); }

function updateCountdown(){
  const diff = ticketDate.getTime() - Date.now();
  if(diff <= 0){
    $("days").textContent = "00";
    $("hours").textContent = "00";
    $("minutes").textContent = "00";
    $("seconds").textContent = "00";
    return;
  }
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  $("days").textContent = String(days);
  $("hours").textContent = pad(hours);
  $("minutes").textContent = pad(minutes);
  $("seconds").textContent = pad(seconds);
}


updateCountdown();
setInterval(updateCountdown, 1000);
setInterval(updateTicketState, 30000);
