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
  
//   const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
  
//       const response = await fetch(`/api/projects/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to delete project');
//       }
//     }
//   };
  
  document
    .querySelector('.new-entry')
    .addEventListener('submit', newEntryHandler);
  
//   document
//     .querySelector('.project-list')
//     .addEventListener('click', delButtonHandler);
  