const addComment = async (event) => {
    event.preventDefault();
    console.log('click')


    const comment_text = document.querySelector('#comment-text').value.trim();
    const newComment = document.querySelector('.comm-label');
    const entry_id = newComment.getAttribute('data-id')
    console.log(entry_id)

    console.log(comment_text)
        

    if ( comment_text && entry_id ) {
      const response = await fetch('/api/entry/comment', {
        method: 'POST',
        body: JSON.stringify({ comment_text, entry_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to add comment');
      }
    }
  };
  
  
  document.querySelector('.button-custom').addEventListener('click', addComment);