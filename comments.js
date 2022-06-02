const xmlhttp = new XMLHttpRequest()
let comments = document.getElementById('comments')

xmlhttp.onload = function(){
    let myObj = JSON.parse(this.responseText)
    
    
    let amyComment = myObj.comments[0].content
    let amyPhoto =myObj.comments[0].user.image.png
    let amyName = myObj.comments[0].user.username
    let amyDate = myObj.comments[0].createdAt
    let amyScore = myObj.comments[0].score
        
    let maxComment = myObj.comments[1].content
    let maxPhoto = myObj.comments[1].user.image.png
    let maxName = myObj.comments[1].user.username
    let maxDate = myObj.comments[1].createdAt
    let maxScore = myObj.comments[1].score

    let ransesComment = myObj.comments[1].replies[0].content
    let ransesPhoto = myObj.comments[1].replies[0].user.image.png
    let ransesName = myObj.comments[1].replies[0].user.username
    let ransesDate = myObj.comments[1].replies[0].createdAt
    let ransesScore = myObj.comments[1].replies[0].score

    let juliusComment = myObj.comments[1].replies[1].content
    let juliusPhoto = myObj.comments[1].replies[1].user.image.png
    let juliusName = myObj.comments[1].replies[1].user.username
    let juliusDate = myObj.comments[1].replies[1].createdAt
    let juliusScore = myObj.comments[1].replies[1].score

    console.log(ransesScore)

    //Amy Comment
    document.getElementById('amyPhoto').src=amyPhoto
    document.getElementById('amyName').textContent=amyName
    document.getElementById('amyTime').textContent=amyDate
    document.getElementById('amyComment').textContent=amyComment
    document.getElementById('amyNumber').textContent=amyScore

    //Max Comment
    document.getElementById('maxPhoto').src=maxPhoto
    document.getElementById('maxName').textContent=maxName
    document.getElementById('maxTime').textContent=maxDate
    document.getElementById('maxComment').textContent=maxComment
    document.getElementById('maxNumber').textContent=maxScore

    //Ranses Comment
    document.getElementById('ransesPhoto').src=ransesPhoto
    document.getElementById('ransesName').textContent=ransesName
    document.getElementById('ransesTime').textContent=ransesDate
    document.getElementById('ransesComment').textContent='@maxblagun '+ ransesComment
    document.getElementById('ransesNumber').textContent=ransesScore

    //Julius Comment
    document.getElementById('juliusPhoto').src=juliusPhoto
    document.getElementById('juliusName').textContent=juliusName
    document.getElementById('juliusTime').textContent=juliusDate
    document.getElementById('juliusComment').textContent='@ransesmiron '+juliusComment
    document.getElementById('juliusNumber').textContent=juliusScore
    document.getElementById('juliusPhotoR').src=juliusPhoto

    //Plus and Minus Function
    let amyPlus = document.getElementById('amyPlus')
    let amyMinus = document.getElementById('amyMinus')
    let maxPlus = document.getElementById('maxPlus')
    let maxminus = document.getElementById('maxMinus')
    let ransesPlus = document.getElementById('ransesPlus')
    let ransesMinus = document.getElementById('ransesMinus')
    let juliusPlus = document.getElementById('juliusPlus')
    let juliusMinus = document.getElementById('juliusMinus')
    let amyNumber = document.getElementById('amyNumber').textContent
    let maxNumber = document.getElementById('maxNumber').textContent
    let ransesNumber = document .getElementById('ransesNumber').textContent

    amyPlus.addEventListener('click',()=>{
       amyNumber=parseInt(amyNumber)+1
       document.getElementById('amyNumber').textContent=amyNumber
       amyPlus.style.pointerEvents='none'       
    })

    amyMinus.addEventListener('click',()=>{
        amyNumber=parseInt(amyNumber)-1
        document.getElementById('amyNumber').textContent=amyNumber 
        amyMinus.style.pointerEvents='none'       
     })

     maxPlus.addEventListener('click',()=>{
        maxNumber=parseInt(maxNumber)+1
        document.getElementById('maxNumber').textContent=maxNumber
        maxPlus.style.pointerEvents='none'       
     })

     maxMinus.addEventListener('click',()=>{
        maxNumber=parseInt(maxNumber)-1
        document.getElementById('maxNumber').textContent=maxNumber 
        maxMinus.style.pointerEvents='none'       
     })

     //Reply Function
     let amyReply = document.getElementById('amyReply')
     console.log(amyReply)
     let number=0
     amyReply.addEventListener('click',()=>{
         number+=1
         
         let div = document.createElement('div')
         div.className='commentReply'
         div.id='amyCommentReply'
         document.getElementById('amyComments').appendChild(div)

         let textArea = document.createElement('textarea')
         textArea.className='textArea'
         textArea.textContent=`@${amyName}, `
         document.getElementById('amyCommentReply').appendChild(textArea)    

         let divAddMessage = document.createElement('div')
         divAddMessage.className='add'
         divAddMessage.id=`divAddMessage${number}`
         document.getElementById('amyCommentReply').appendChild(divAddMessage)
         console.log(divAddMessage)
         let image =document.createElement('img')
         image.src='./images/avatars/image-juliusomo.png'
         console.log(image)
         document.getElementById(`divAddMessage${number}`).appendChild(image)

         let button = document.createElement('button')
         button.textContent='send'
         document.getElementById(`divAddMessage${number}`).appendChild(button)
         
     })

    
}

xmlhttp.open('GET','./data.json')
xmlhttp.send()