// google api=bab664c3af4e45a6b18fb1a0c6cadf61

fetch('https://saurav.tech/NewsAPI/everything/cnn.json')
.then((res)=>res.json())
.then((res)=>{
    // let sports=res.results[2]
    console.log(res);
    // console.log(sports.title);
    // console.log(sports.link);
    
    

    
})