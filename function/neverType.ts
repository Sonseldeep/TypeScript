 function makeError(msg: string): never{
    // if we retun any thig = error
    
    throw new Error(msg);
 };
 function gameLoop():never{
    while(true){
        console.log("game loop running");
         
    }
 }