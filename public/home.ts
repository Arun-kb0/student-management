document.addEventListener('DOMContentLoaded', function () {

  const deleteBtnList = document.querySelectorAll('.deleteBtn') as NodeListOf<HTMLButtonElement>

  deleteBtnList.forEach(deleteBtn => {
    deleteBtn.addEventListener('click', async (e) => {
      try {
        e.preventDefault()
        const id = deleteBtn.dataset.id
        const res = await fetch(`/?id=${id}`, {
          method: 'DELETE',
        })
        if (res.ok) {
          window.location.reload()
        } else {
          alert('delete failed')
        }
      } catch (error) {
        console.error(error)
        alert('delete failed')
      }
    })
  });



})