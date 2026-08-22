if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .catch(err => console.error('SW error:', err));
}
const container = document.getElementById("webcams");

SOURCES.forEach(src => {
  container.innerHTML += `
    <section class="card">
      <h2>${src.name}</h2>
      <div class="player">
        <iframe width="100%" height="300"
          src="https://www.youtube.com/embed/live_stream?channel=${src.id}"
          allowfullscreen>
        </iframe>
      </div>
    </section>
  `;
});
