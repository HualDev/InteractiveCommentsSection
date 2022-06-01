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


     //Max Comment

     const divMax = document.createElement('div') 
     divMax.id='divCommentMax'
     divMax.className='divComment'
     comments.appendChild(divMax)
 
     const divUserMax =document.createElement('div')
     divUserMax.className='divUser'
     divMax.appendChild(divUserMax)
 
     const imgMax = document.createElement('img')
     imgMax.src=maxPhoto
     imgMax.alt='Max photo'
     divUserMax.appendChild(imgMax)
 
     const h1NameMax= document.createElement('h1')
     h1NameMax.textContent=maxName
     divUserMax.appendChild(h1NameMax)
 
     const pMax= document.createElement('p')
     pMax.textContent=maxDate
     divUserMax.appendChild(pMax)
 
     const commentMax = document.createElement('p')
     commentMax.textContent=maxComment
     divMax.appendChild(commentMax)
 
     const actionCommentMax = document.createElement('div')
     actionCommentMax.className='action'
     divMax.appendChild(actionCommentMax)
 
     const numberMax =document.createElement('div')
     numberMax.className='number'
     actionCommentMax.appendChild(numberMax)
 
     const plusMax = document.createElement('img')
     plusMax.src='./images/icon-plus.svg'
     plusMax.alt='Plus Image'
     numberMax.appendChild(plusMax)
 
     const scoreMax = document.createElement('span')
     scoreMax.textContent=maxScore
     numberMax.appendChild(scoreMax)
 
     const lessMax = document.createElement('img')
     lessMax.src='./images/icon-minus.svg'
     lessMax.alt='Less image'
     numberMax.appendChild(lessMax)
 
     const replyMax =document.createElement('div')
     replyMax.className='reply'
     actionCommentMax.appendChild(replyMax)
 
     const imgReplyMax = document.createElement('img')
     imgReplyMax.src='./images/icon-reply.svg'
     imgReplyMax.alt='Reply image'
     replyMax.appendChild(imgReplyMax)
 
     const textReplyMax = document.createElement('span')
     textReplyMax.textContent='Reply'
     replyMax.appendChild(textReplyMax)

   
}

xmlhttp.open('GET','./data.json')
xmlhttp.send()