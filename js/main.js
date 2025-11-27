function loadGA() {
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-HC7GLM1633';
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-HC7GLM1633');
}

document.addEventListener('DOMContentLoaded', function() {
  const consent = localStorage.getItem('cookie_consent');
  
  if (consent === 'accepted') {
    loadGA();
  } else if (consent === null) {
    const banner = document.getElementById('cookie-banner');
    if (banner) banner.style.display = 'block';
  }

  const acceptBtn = document.getElementById('accept-cookies');
  if (acceptBtn) {
    acceptBtn.addEventListener('click', function() {
      localStorage.setItem('cookie_consent', 'accepted');
      const banner = document.getElementById('cookie-banner');
      if (banner) banner.style.display = 'none';
      loadGA();
    });
  }

  const declineBtn = document.getElementById('decline-cookies');
  if (declineBtn) {
    declineBtn.addEventListener('click', function() {
      localStorage.setItem('cookie_consent', 'declined');
      const banner = document.getElementById('cookie-banner');
      if (banner) banner.style.display = 'none';
    });
  }
});
