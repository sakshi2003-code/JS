// immediately invoked function
(
    function chai(){
        console.log('chai is ready');
        
    }
)();


(
    ()=>{
        console.log('welcome to javascript');
        (
            ()=>{
                console.log('i am inside');
                
            }
        )();
    }
)()