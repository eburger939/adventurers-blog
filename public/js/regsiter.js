const signupEvent = async (event) => {
    event.preventDefault();
    console.log('hello')

    const user_name = document.querySelector('#user_name').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#pw-signup').value.trim();
    

    if (user_name && email && password) {
      const response = await fetch('/api/users/register', {
        method: 'POST',
        body: JSON.stringify({ user_name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
  
  
  document.querySelector('.signup-form').addEventListener('submit', signupEvent);