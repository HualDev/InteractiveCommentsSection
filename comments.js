const xmlhttp = new XMLHttpRequest()
let comments = document.getElementById('comments')
let amyComment 

xmlhttp.onload = function(){
    let myObj = JSON.parse(this.responseText)
    
    
    amyComment = myObj.comments[0].content
    amyPhoto =myObj.comments[0].user.image.png
    amyName = myObj.comments[0].user.username
    amyDate = myObj.comments[0].createdAt
    
    maxComment = myObj.comments[1].content
    maxPhoto = myObj.comments[1].user.image.png
    maxName = myObj.comments[1].user.username
    maxDate = myObj.comments[1].createdAt

    console.log(maxPhoto)

    const divComment = document.createElement('div') 
    divComment.id='divComment'
    divComment.className='divComment'

    const divCommentMax = document.createElement('div') 
    divCommentMax.id='divCommentMax'
    divCommentMax.className='divComment'

    const divUser = document.createElement('div')
    divUser.id='divUser'
    divUser.className='divUser'

    const pAmy = document.createElement('p')
    pAmy.textContent=amyComment

    const imgAmy = document.createElement('img')
    imgAmy.src= amyPhoto
    imgAmy.alt='Amy photo'

    const h1Amy = document.createElement('h1')
    h1Amy.textContent = amyName

    const dateAmy = document.createElement('p')
    dateAmy.textContent=amyDate

    const divMax = document.createElement('div')
    divMax.id='divMax'
    divMax.className='divUser'

    const pMax = document.createElement('p')
    pMax.textContent=maxComment

    const imgMax = document.createElement('img')
    imgMax.src= maxPhoto
    imgMax.alt='Max photo'

    const h1Max = document.createElement('h1')
    h1Max.textContent = maxName
    
    const dateMax = document.createElement('p')
    dateMax.textContent=maxDate
   
    
    

    


    comments.appendChild(divComment)
    divComment.appendChild(divUser)    
    divUser.appendChild(imgAmy)
    divUser.appendChild(h1Amy)
    divUser.appendChild(dateAmy)
    divComment.appendChild(pAmy)

    comments.appendChild(divCommentMax)
    divCommentMax.appendChild(divMax)    
    divMax.appendChild(imgMax)
    divMax.appendChild(h1Max)
    divMax.appendChild(dateMax)
    divCommentMax.appendChild(pMax)

    
    


    console.log(amyPhoto)
}

xmlhttp.open('GET','./data.json')
xmlhttp.send()