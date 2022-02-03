
document.querySelectorAll('.deleteBtn').forEach(function(el){
    el.addEventListener('click', async function() {
  
    if ( this.id ) {
      console.log(this.id)
      const response = await fetch(`/api/dash/${this.id}`, {
        method: 'DELETE',
      });

      

       console.log(response)
      if (response.ok) {
        document.location.replace('/api/dash');
      } else {
        alert('Failed to delete post.');
      }
    }



    });
  });

  document.querySelectorAll('.editBtn').forEach(function(el){
    el.addEventListener('click', async function() {
      // alert(this.id);
  
    if ( this.id ) {
      const response = await fetch(`/api/dash/${this.id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      

       console.log(response)
      if (response.ok) {
        document.location.replace(`/api/dash/${this.id}`);
      } else {
        alert('Please select a blog entry.');
      }
    }



    });
  });

 