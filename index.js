const img = document.querySelector('.img')
const message = document.querySelector('.messages');

document.addEventListener('mouseover', (e)=>{
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
    if (e.target.closest('.Message')) {
        message.classList.add('open')
    }
    if (e.target.closest('.message-button')) {
        const clearMessage = document.querySelector('.message')
        clearMessage.textContent = ''
        message.classList.remove('open')
    }
})