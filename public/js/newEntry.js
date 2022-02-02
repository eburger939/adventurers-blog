const newEntry = async (event) => {
    event.preventDefault();
    console.log('click')


    const title = document.querySelector('#new-username').value.trim();
    const text = document.querySelector('#comment-text').value.trim();
    const userID = document.querySelector('.create-new-blog');
    const user_id = userID.getAttribute('data-id')
    console.log(title)
    console.log(text)

    console.log(user_id)
        

    if ( title && text ) {
      const response = await fetch('/api/dash', {
        method: 'POST',
        body: JSON.stringify({ title, text }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to add comment');
      }
    }
  };
  
  
  document.querySelector('.button-custom').addEventListener('click', newEntry);