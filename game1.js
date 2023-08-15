const randomToo = Math.floor(Math.random() * 100) + 1;

const shalgah = () => {
  const taasanToo = document.getElementById("taasanToo").value;
  const hint = document.getElementById("hint");
  if (taasanToo == randomToo) {
    hint.textContent = "congrats";
  } else if (taasanToo < randomToo) {
    hint.textContent = "baga";
  } else if (taasanToo > randomToo) {
    hint.textContent = "ih";
  }
};
