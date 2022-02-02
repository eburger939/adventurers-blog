const newEntryHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#new-title').value.trim();
    const text = document.querySelector('#new-content').value.trim();

  
    if (title && text ) {
      const response = await fetch(`/api/dash`, {
        method: 'POST',
        body: JSON.stringify({ title, text }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
        //not sure what to reload?
      } else {
        alert('Failed to create entry');
      }
    }
  };
  

  
  document
    .querySelector('.new-entry')
    .addEventListener('submit', newEntryHandler);
  

  