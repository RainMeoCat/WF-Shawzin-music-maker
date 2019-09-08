function importOK(){
    
    console.log("import start")
    SongClear()
    
    const data = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    
        String = document.getElementById("comment").value

    ScaleChange(String.substr(0,1))
        for(j=1;j<=String.length-1;j=j+3){
 
            c1=data.indexOf(String.substr(j+1,1))
            c2=data.indexOf(String.substr(j+2,1))
            c3=c1*64+c2
            
            if (tab.rows[0].cells.length>c3){
                
                tab.rows[1].cells[c3].innerHTML=String.substr(j,1)
            }else{
                
                
                while(tab.rows[0].cells.length<=c3){

                    NewSongQuery()
                }
                    
                
                tab.rows[1].cells[c3].innerHTML=String.substr(j,1)
                
            }
            
    }
    


    OutputString()
    $("#dimScreen").fadeOut() 
}
function importC(){
    $("#dimScreen").fadeOut() 
}
function importSong(){
    $("#dimScreen").fadeIn("")  
        
    }