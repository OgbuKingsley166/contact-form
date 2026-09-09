document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent actual form submission

  // Collect form data
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const query = document.querySelector('input[name="query"]:checked').value;
  const message = document.getElementById("message").value;
  const consent = document.getElementById("consent").checked;

  // Simple validation
  if (!consent) {
    alert("Please give consent before submitting.");
    return;
  }

  // Display confirmation
  alert(`Thank you, ${firstName}! Your ${query.toLowerCase()} has been received.`);
  
  // Reset form
  document.getElementById("contactForm").reset();
});