
document.addEventListener('DOMContentLoaded', function () {

  const createBtn = document.querySelector('.createBtn') as HTMLButtonElement | undefined
  const editBtn = document.querySelector('.editBtn') as HTMLButtonElement | undefined

  editBtn?.addEventListener('click', async (e) => {
    e.preventDefault()
    const id = editBtn.dataset.id
    const data = getFormData()
    console.log('update')
    console.log(id)
    console.log(data)
    const res = await fetch(`/edit?id=${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (res.ok) {
      window.location.href = '/'
    } else {
      const err = await res.json()
      throw new Error(err.message)
    }
  })


  createBtn?.addEventListener('click', async (e) => {
    e.preventDefault()
    const data = getFormData()
    console.log('create')
    console.log(data)
    const res = await fetch('/create', {
      method: 'POST',
      body: JSON.stringify(data)
    })
    if (res.ok) {
      window.location.href = '/'
    } else {
      alert('create book failed')
    }
  })


  function getFormData() {
    const data = {
      title: (document.getElementById('title') as HTMLInputElement).value,
      author: (document.getElementById('author') as HTMLInputElement).value,
      genre: (document.getElementById('genre') as HTMLInputElement).value,
      image: (document.getElementById('image') as HTMLInputElement).value,
      link: (document.getElementById('link') as HTMLInputElement).value,
    }
    return data
  }


})