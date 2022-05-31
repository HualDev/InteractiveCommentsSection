const xmlhttp = new XMLHttpRequest()
let comments = document.getElementById('comments')
let amyComment 

xmlhttp.onload = function(){
    let myObj = JSON.parse(this.responseText)
    
    
    amyComment = myObj.comments[0].content
    amyPhoto =myObj.comments[0].user.image.png
    amyName = myObj.comments[0].user.username
    amyDate = myObj.comments[0].createdAt  

    const divComment = document.createElement('div')    
    const divUser = document.createElement('div')
    const p = document.createElement('p')
    const img = document.createElement('img')
    const h1 = document.createElement('h1')
    const date = document.createElement('p')
   
    
    
    p.textContent=amyComment

    img.src= amyPhoto
    img.alt='Amy photo'

    h1.textContent = amyName

    date.textContent=amyDate

    divComment.id='divComment'
    divComment.className='divComment'

    divUser.id='divUser'
    divUser.className='divUser'


    comments.appendChild(divComment)
    divComment.appendChild(divUser)
    divUser.appendChild(img)
    divUser.appendChild(h1)
    divUser.appendChild(date)
    divComment.appendChild(p)

    
    


    console.log(amyPhoto)
}

xmlhttp.open('GET','./data.json')
xmlhttp.send()