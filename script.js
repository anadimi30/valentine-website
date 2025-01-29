// Fix Yes/No button functionality
document.getElementById('yes-btn').addEventListener('click', () => {
    const response = document.getElementById('response');
    response.textContent = "Yay! ❤️ I can't wait to spend Valentine's Day with you!";
    response.classList.remove('hidden');
  });
  
  document.getElementById('no-btn').addEventListener('click', () => {
    const response = document.getElementById('response');
    response.textContent = "Oh no! 😢 But I'll still cherish you!";
    response.classList.remove('hidden');
  });
  
  // Fix timeline hover effect
  const yearButtons = document.querySelectorAll(".year-btn");
  const yearImage = document.getElementById("year-image");
  const yearText = document.getElementById("year-text");
  
  const images = {
    "2018": "2018.jpeg",
    "2019": "2019.jpeg",
    "2020": "2020.jpeg",
    "2021": "2021.jpeg",
    "2022": "2022.jpeg",
    "2023": "2023.jpeg",
    "2024": "2024.jpeg",
    "2025": null, // No image for 2025, show text instead
  };
  
  yearButtons.forEach((button) => {
    button.addEventListener("mouseover", () => {
      const year = button.getAttribute("data-year");
      
      if (images[year]) {
        yearImage.src = images[year];
        yearImage.style.display = "block";
        yearText.style.display = "none";
      } else {
        yearImage.style.display = "none";
        yearText.textContent = "Let's add this memory on February 14th, 2025. 💖";
        yearText.style.display = "block";
      }
    });
  
    button.addEventListener("mouseout", () => {
      yearImage.style.display = "none";
      yearText.style.display = "none";
    });
  });
  