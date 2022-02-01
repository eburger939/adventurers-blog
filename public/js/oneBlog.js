document.querySelectorAll('.custom-card').forEach(function(el){
    el.addEventListener('click', async function() {
      // alert(this.id);
  
    if ( this.id ) {
      const response = await fetch(`/api/entry/${this.id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      

       console.log(response)
      if (response.ok) {
        document.location.replace(`/api/entry/${this.id}`);
      } else {
        alert('Please select a blog entry.');
      }
    }



    });
  });