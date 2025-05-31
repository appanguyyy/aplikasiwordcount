const inputText = document.getElementById('inputText');
const countBtn = document.getElementById('countBtn');
const resetBtn = document.getElementById('resetBtn');
const resultDiv = document.getElementById('wordFrequencyResult');

/**
 * Fungsi untuk menghitung frekuensi kata
 * @param {string} text - Teks input
 * @returns {Object} - Objek kata dan jumlah kemunculannya
 */
function hitungFrekuensiKata(text) {
  const wordMap = {};
  const cleanText = text
    .toLowerCase()
    .replace(/[.,!?()"]/g, '') // hapus tanda baca
    .split(/\s+/)
    .filter(Boolean); // hilangkan string kosong

  cleanText.forEach(kata => {
    wordMap[kata] = (wordMap[kata] || 0) + 1;
  });

  return wordMap;
}

/**
 * Tampilkan hasil ke DOM
 */
function tampilkanHasil() {
  const teks = inputText.value;
  const hasil = hitungFrekuensiKata(teks);

  resultDiv.innerHTML = '';

  if (Object.keys(hasil).length === 0) {
    resultDiv.innerHTML = '<p>Tidak ada kata yang dihitung.</p>';
    return;
  }

  for (const [kata, jumlah] of Object.entries(hasil)) {
    const el = document.createElement('div');
    el.classList.add('word-item');
    el.innerHTML = `<span>${kata}</span><span>${jumlah}</span>`;
    resultDiv.appendChild(el);
  }
}

// Event listener
countBtn.addEventListener('click', tampilkanHasil);

resetBtn.addEventListener('click', () => {
  inputText.value = '';
  resultDiv.innerHTML = '';
  inputText.focus();
});
