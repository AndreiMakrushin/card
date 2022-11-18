
document.addEventListener('mouseover', (e)=>{
    const img = document.querySelector('.img')
    if (e.target.closest('.card')) {
        img.classList.add('active')
    }else{
        img.classList.remove('active')
    }
})
document.addEventListener('click', (e)=>{
    if (e.target.closest('.follow')) {
        const follow = document.querySelector('.follow')
        if (follow.textContent === 'Follow') {
            follow.textContent = 'Following'
            follow.style.background = '#999'
        }else{
            follow.textContent = 'Follow'
            follow.style.background = '#f7797d'
            
        }
 
    } 
})