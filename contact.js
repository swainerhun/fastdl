document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const body =
    "Név: " + name +
    "%0D%0A%0D%0AÜzenet:%0D%0A" +
    message.replace(/\n/g, "%0D%0A");

  const mailto =
    "mailto:swainergame@gmail.com" +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + body;

  window.location.href = mailto;
});