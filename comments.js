const xmlhttp = new XMLHttpRequest()
let comments = document.getElementById('comments')
let amyComment 

xmlhttp.onload = function(){
    let myObj = JSON.parse(this.responseText)
    
    
    amyComment = myObj.comments[0].content
    amyPhoto =myObj.comments[0].user.image.png
    amyName = myObj.comments[0].user.username
    amyDate = myObj.comments[0].createdAt
    amyScore = myObj.comments[0].score
    
    maxComment = myObj.comments[1].content
    maxPhoto = myObj.comments[1].user.image.png
    maxName = myObj.comments[1].user.username
    maxDate = myObj.comments[1].createdAt
    maxScore = myObj.comments[1].score

    console.log(amyScore)

    
    //Amy Comment

    const divAmy = document.createElement('div') 
    divAmy.id='divComment'
    divAmy.className='divComment'
    comments.appendChild(divAmy)

    const divUserAmy =document.createElement('div')
    divUserAmy.className='divUser'
    divAmy.appendChild(divUserAmy)

    const imgAmy = document.createElement('img')
    imgAmy.src=amyPhoto
    imgAmy.alt='Amy photo'
    divUserAmy.appendChild(imgAmy)

    const h1NameAmy= document.createElement('h1')
    h1NameAmy.textContent=amyName
    divUserAmy.appendChild(h1NameAmy)

    const pAmy= document.createElement('p')
    pAmy.textContent=amyDate
    divUserAmy.appendChild(pAmy)

    const CommentAmy = document.createElement('p')
    CommentAmy.textContent=amyComment
    divAmy.appendChild(CommentAmy)

    const actionCommentAmy = document.createElement('div')
    actionCommentAmy.className='action'
    divAmy.appendChild(actionCommentAmy)

    const numberAmy =document.createElement('div')
    numberAmy.className='number'
    actionCommentAmy.appendChild(numberAmy)

    const plusAmy = document.createElement('img')
    plusAmy.src='./images/icon-plus.svg'
    plusAmy.alt='Plus Image'
    numberAmy.appendChild(plusAmy)

    const scoreAmy = document.createElement('span')
    scoreAmy.textContent=amyScore
    numberAmy.appendChild(scoreAmy)

    const lessAmy = document.createElement('img')
    lessAmy.src='./images/icon-minus.svg'
    lessAmy.alt='Less image'
    numberAmy.appendChild(lessAmy)

    const replyAmy =document.createElement('div')
    replyAmy.className='reply'
    actionCommentAmy.appendChild(replyAmy)

    const imgReplyAmy = document.createElement('img')
    imgReplyAmy.src='./images/icon-reply.svg'
    imgReplyAmy.alt='Reply image'
    replyAmy.appendChild(imgReplyAmy)

    const textReplyAmy = document.createElement('span')
    textReplyAmy.textContent='Reply'
    replyAmy.appendChild(textReplyAmy)

    /*const divCommentMax = document.createElement('div') 
    divCommentMax.id='divCommentMax'
    divCommentMax.className='divComment'

    const divUser = document.createElement('div')
    divUser.id='divUser'
    divUser.className='divUser'

    const divAmyrates =document.createElement('div')
    divAmyrates.id ='divAmyRates'
    divAmyrates.className='divAmyRates'

    const quantityAmy = document.createElement('div')
    quantityAmy.className='quantityAmy'

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

    
    


    console.log(amyPhoto)*/
}

xmlhttp.open('GET','./data.json')
xmlhttp.send()