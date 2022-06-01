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
    document.getElementById('ransesComment').textContent=ransesComment
    document.getElementById('ransesNumber').textContent=ransesScore

    //Julius Comment
    document.getElementById('juliusPhoto').src=juliusPhoto
    document.getElementById('juliusName').textContent=juliusName
    document.getElementById('juliusTime').textContent=juliusDate
    document.getElementById('juliusComment').textContent=juliusComment
    document.getElementById('juliusNumber').textContent=juliusScore
    document.getElementById('juliusPhotoR').src=juliusPhoto

    
}

xmlhttp.open('GET','./data.json')
xmlhttp.send()