document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Mencegah reload halaman

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  if (!emailPattern.test(email)) {
    alert("Format email tidak valid. Contoh: nama@email.com");
    return;
  }

  // Tampilkan hasil ke samping
  document.getElementById("resultName").textContent = name;
  document.getElementById("resultEmail").textContent = email;
  document.getElementById("resultMessage").textContent = message;

  alert(`Hi ${name}! 👋\n\nWe’ve received your message:\n"${message}"\n\nWe’ll reach out to ${email} soon!`);

  this.reset(); // Kosongkan form
});
