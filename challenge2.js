function faster(){
    let drive=parseInt(prompt("enter speed"))
    if  (drive<=70){
        document.writeln("ok");
    }else{
      var points=(drive-70)*0.2;
      if(points>12){
        document.writeln("license suspended");
      }else{
        document.writeln(points)
      }
    }
}
//faster();