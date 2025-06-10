document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Mencegah form reload

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  alert(`Hi ${name}! 👋\n\nWe’ve received your message:\n"${message}"\n\nWe’ll reach out to ${email} soon!`);

  this.reset(); // Reset form setelah dikirim
});