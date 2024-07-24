const submit = async() =>{
    var score = []
    var subject = ["chinese","english","mathA","mathB","nature","society"]
    for(let i = 0; i < subject.length ;i++){
        if(document.getElementById(subject[i]).value == ""){
            score.push(0);
        }
        else if(Number(document.getElementById(subject[i]).value) > 15){
            alert("輸入之級分超過15\n請重新輸入")
            return
        }else if(Number(document.getElementById(subject[i]).value) <= -1){
            alert("輸入之級分必須大於等於0\n請重新輸入")
            return
        }
        else{
            score.push(Number(document.getElementById(subject[i]).value));
        }
    }
    var large = 0;
    for(let i = 0; i < score.length ;i++){
        large = Math.max(large,score[i])
    }
    if(large == 0){
        alert("您未填寫任何成績\n請重新輸入")
        return
    }
    console.log(score)

    var apcs = []
    apcs.push(Number(document.getElementById("concept").value))
    apcs.push(Number(document.getElementById("implement").value))
    for(let i = 0;i<apcs.length;i++){
        if(apcs[i]>5){
            alert("輸入之APCS級分超過5\n請重新輸入")
            return
        }
        if(apcs[i]<=-1){
            alert("輸入之APCS級分必須大於等於0\n請重新輸入")
            return
        }
    }
    console.log(apcs)

    var year = []
    for (let i = parseInt(113), cnt = 0; i >= 111; cnt++, i--) {
        if(document.getElementById(i.toString()).checked == true){
            year.push(i);
        }
    }
    if(year.length == 0){
        alert("未選取參考年度\n請重新輸入")
        return
    }
    console.log(year)

    var dan = []
    dan.push(document.getElementById("red").value)
    dan.push(document.getElementById("yellow").value)
    dan.push(document.getElementById("green").value)
    console.log(dan)
    
    var school = []
    let cnt=document.getElementById("choose_school")
    for(const i of cnt.children ){
        school.push(i.textContent);
        console.log(i.textContent);
    }
    if(cnt.children.length == 0){
        alert("未選取任一校系\n請重新輸入")
        return
    }

    const data = {score : score,apcs:apcs,year:year,dan:dan}
    const response = await fetch('api/search',{method:'POST',body:data})


    const test = await response.json()
    console.log(test)

}

export {submit}