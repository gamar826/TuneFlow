const searchInput = document.getElementById('search');

searchInput.addEventListener('input', (e) => {
  const query = e.target.value.trim().toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach((card) => {
    const text = (card.dataset.search || card.textContent).toLowerCase();
    if (!query || text.includes(query)) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
});