function grade(){
    let marks=parseInt(prompt("enter marks"))
    if(marks>=0 && marks <=100){
        if(marks>79 && marks<=100){
            document.writeln("A <br>")
        }else if(marks>=60 && marks<=79){
            document.writeln("B <br>")
        }else if(marks>= 50 && marks<=59){
            document.writeln("C <br>");
        }
        else if(marks>= 40 && marks<=49){
            document.writeln("D <br>");
        }else{
            document.writeln("E <br>");
        }

        
        

    }else{
        return
    }
}
//grade()