document.addEventListener("DOMContentLoaded", function() {
  const starCount = 100;
  const starryNight = document.querySelector('.starry-night');

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    star.style.width = `${Math.random() * 2}px`;
    star.style.height = star.style.width;
    starryNight.appendChild(star);
  }

  const menuButton = document.querySelector('.menu-button');
  const drawer = document.querySelector('.drawer');
  const overlay = document.querySelector('.overlay');

  // Function to open the drawer
  function openDrawer() {
    drawer.style.right = '0';
    overlay.style.display = 'block';
  }

  // Function to close the drawer
  function closeDrawer() {
    drawer.style.right = '-100%'; // Updated from -300px to -100%
    overlay.style.display = 'none';
  }

  menuButton.addEventListener('click', function(event) {
    event.stopPropagation();
    openDrawer();
  });

  overlay.addEventListener('click', function() {
    closeDrawer();
  });

  // Close the drawer when clicking anywhere on the document
  document.addEventListener('click', function(event) {
    if (drawer.style.right === '0' && event.target !== drawer && event.target !== menuButton) {
      closeDrawer();
    }
  });

  // Prevent clicks inside the drawer from closing it
  drawer.addEventListener('click', function(event) {
    event.stopPropagation();
  });
});
