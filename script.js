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
  