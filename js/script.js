// Toggle Tema Gelap/Terang
document.getElementById('themeToggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// Menangani formulir saat dikirim
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Mencegah reload halaman

//   Ambil nilai dari inputan form 
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

//   Pola validasi pada email
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

//   Validasi email
  if (!emailPattern.test(email)) {
    alert("Format email tidak valid. Contoh: nama@email.com");
    return;

  }

  // Tampilkan hasil input ke samping
  document.getElementById("resultName").textContent = name;
  document.getElementById("resultEmail").textContent = email;
  document.getElementById("resultMessage").textContent = message;

//   Tampilkan pesan konfirmasi
  alert(`Anyeong ${name}! 👋\n\nWe’ve received your message:\n"${message}"\n\nWe’ll reach out to ${email} soon!`);

  // Beri efek pada kotak hasil pesan
const formResult = document.getElementById("formResult");
formResult.style.border = "2px solid lightgreen";
formResult.style.boxShadow = "0 0 10px rgba(0,255,0,0.5)";
formResult.style.transition = "0.4s";


//   Reset atau kosongkan form setelah submit
  this.reset(); 
});

// Auto Slide Banner
let currentSlide = 0;
const slides = document.querySelectorAll('.banner-slider .slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Tampilkan slide pertama & jalankan interval
showSlide(currentSlide);
setInterval(nextSlide, 4000); // Ganti slide setiap 4 detik

const dots = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
}

