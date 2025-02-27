onload = () => {
  document.body.classList.remove("container");
};


const lyrics = [
  "Ini adalah teks karaoke",
  "Teks kedua berjalan",
  "Lanjut ke teks berikutnya",
];

let index = 0;
const karaokeText = document.querySelector(".karaoke .highlight");

function updateLyrics() {
  karaokeText.setAttribute("data-text", lyrics[index]);
  karaokeText.textContent = lyrics[index];
  karaokeText.style.animation = "none";
  void karaokeText.offsetWidth; // Reset animasi
  karaokeText.style.animation = "karaokeEffect 5s linear forwards";
  
  index = (index + 1) % lyrics.length;
}

setInterval(updateLyrics, 6000); // Ganti lirik setiap 6 detik
