
document.querySelectorAll('.deleteBtn').forEach(function(el){
    el.addEventListener('click', async function() {
      alert(this.id);
  
    if ( this.id ) {
      const response = await fetch(`/api/dash/${this.id}`, {
        method: 'DELETE',
      });

      

       console.log(response)
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to delete post.');
      }
    }



    });
  });