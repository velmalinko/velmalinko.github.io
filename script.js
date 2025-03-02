function startCountdown(targetDate) {
  function updateTimer() {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) {
          document.getElementById('timer').innerHTML = "Adventure Starts Now!";
          return;
      }
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      document.getElementById('timer').innerHTML = `${days} pv ${hours} t ${minutes} m ${seconds} s`;
  }
  updateTimer();
  setInterval(updateTimer, 1000);
}
startCountdown(new Date("March 7, 2025 18:30:00").getTime());

function createSnowflakes() {
  for (let i = 0; i < 30; i++) {
      let snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.innerHTML = '❄';
      document.body.appendChild(snowflake);
      snowflake.style.left = Math.random() * window.innerWidth + 'px';
      snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
      snowflake.style.fontSize = (Math.random() * 1.5 + 0.5) + 'rem';
      setTimeout(() => snowflake.remove(), 5000);
  }
}
setInterval(createSnowflakes, 500);