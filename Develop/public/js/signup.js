const signupFormHandler = async function(event) {
  event.preventDefault();

  const username = document.querySelector('#username-input-signup').value;
  const password = document.querySelector('#password-input-signup').value;

  if (username && password) {
    
    const response = await fetch('/api/user/', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to sign up');
    }
  } else {
    alert('Please input a valid username and password');
  }
};

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);
