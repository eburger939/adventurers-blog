document.querySelectorAll('.submit-edit').forEach(function(el){
    el.addEventListener('click', async function(event) {
      event.preventDefault();


      const title = document.querySelector('#new-title').value.trim();
      const text = document.querySelector('#new-text').value.trim();

      if (!title || !text) {
        alert('Please update both the title and the text')
      }  
  
    if ( this.id && title && text) {
      const response = await fetch(`/api/dash/${this.id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, text }),
        headers: { 'Content-Type': 'application/json' },
      });

      

       console.log(response)
      if (response.ok) {
        document.location.replace(`/api/dash/`);
      } else {
        alert('Please select a blog entry.');
      }
    }

    });
  })
