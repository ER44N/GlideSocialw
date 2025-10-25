// script.js — demo-only. No network calls. Passwords are never sent.
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const loginBtn = document.getElementById('loginBtn');

  function showTempState(text){
    loginBtn.textContent = text;
    loginBtn.disabled = true;
  }
  function resetBtn(){
    loginBtn.textContent = 'Log in';
    loginBtn.disabled = false;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    // Basic front-end validation for demo
    if(!username){
      usernameInput.focus();
      alert('Please enter a username (demo).');
      return;
    }
    if(password.length < 4){
      passwordInput.focus();
      alert('Password must be at least 4 characters for this demo UI.');
      return;
    }

    // show "logging in" animation state
    showTempState('Logging in…');

    // IMPORTANT: This demo does NOT send password anywhere.
    // We only redirect to anamenu.html and pass username in query (safe for demo).
    setTimeout(() => {
      // encode username but NOT password
      const safeUser = encodeURIComponent(username);
      window.location.href = `anamenu.html?user=${safeUser}`;
    }, 900);
  });
});
