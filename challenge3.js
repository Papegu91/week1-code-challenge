function ushuru(){
    var Totalincome=parseInt(prompt("Enter your source income"));
    var benefits=parseInt(prompt("Enter your benefits"));
    var Totalincome=Totalincome+benefits;
    let paye;
      if(Totalincome<=24000){
        paye= Totalincome*0.1
        document.writeln(paye, '<br>')
      }else if(Totalincome>=24001 && Totalincome<=32333){
        paye =Totalincome*0.25
        document.writeln(paye, '<br>')
      }else if(Totalincome>32333){
        paye=Totalincome*0.3
        document.writeln(paye, '<br>')
      }


var NHIF
if(Totalincome<=5999){//if statement used to calculate NHIF deductions
    NHIF=150;
    document.writeln(NHIF, 'deduction is NHIF <br>');
}else if(Totalincome>=6000 && Totalincome <= 7999){
    NHIF=300;
    document.writeln(NHIF, 'deduction is NHIF <br>');
}else if(Totalincome >= 8000 && Totalincome<=11999){
    NHIF=400;
    document.writeln(NHIF, 'deduction is NHIF <br>');
}else if(Totalincome >= 12000 && Totalincome <= 14999){
    NHIF=500;
    document.writeln(NHIF, 'deduction is NHIF <br>');
}else if(Totalincome >= 15000 && Totalincome<= 19999){
    NHIF=600;
    document.writeln(NHIF, 'deduction is NHIF <br>');
}else if(Totalincome >= 20000 && Totalincome <= 24999){
    NHIF=750;
    document.writeln(NHIF, 'deduction is NHIF <br>');
}else if(Totalincome>=25000 && Totalincome<= 29999){
    NHIF=850;
    document.writeln(NHIF, 'deduction is NHIF <br>');
}else if(Totalincome >= 30000 && Totalincome <= 34999){
    NHIF=900
    document.writeln(NHIF, 'deduction is NHIF <br>');
}else if(Totalincome >= 35000 && Totalincome <= 39999){
    NHIF=950
    document.writeln(NHIF, 'deduction is NHIF <br>');
}else if(Totalincome >= 40000 && Totalincome <= 44999){
    NHIF=1000
    document.writeln(NHIF, 'deduction is NHIF <br>');
}else if(Totalincome >=45000 && Totalincome <= 49999){
    NHIF=1100
    document.writeln(NHIF, 'deduction is NHIF <br>');
}else if(Totalincome >=50000 && Totalincome<=59999){
    NHIF=1200
    document.writeln(NHIF, 'deduction is NHIF <br>');
}else if(Totalincome >= 60000 && Totalincome<= 69999){
    NHIF=1300
    document.writeln(NHIF, 'deduction is NHIF <br>');
}else if(Totalincome >=70000 && Totalincome <=79999){
    NHIF=1400
    document.writeln(NHIF, 'deduction is NHIF <br>');
}else if(Totalincome >= 80000 && Totalincome <= 89999){
    NHIF=1500
    document.writeln(NHIF, 'deduction is NHIF <br>');
}else if(Totalincome >= 90000 && Totalincome <= 99999){
    NHIF=1600
    document.writeln(NHIF, 'deduction is NHIF <br>');
}else if(Totalincome >=100000){
    NHIF=1700
    document.writeln(NHIF, 'deduction is NHIF <br>');
}

var NSSF
var Tier = parseInt(prompt("Choose your NSSF tier group\n 1:Tier 1\n 2:Tier 2"));// prompt used to allow user to choose which tier group He or she belongs
if(Tier===1){
    NSSF=Totalincome*0.06
    if(NSSF<=360){// if statement used to calculate NSSF deductions
        document.writeln(NSSF,' contributions is NSSF <br>')
    }else{
        NSSF=360
        document.writeln(NSSF,' contributions is NSSF <br>');
    }
}else if(Tier===2){
    NSSF=Totalincome*0.06
    if(NSSF<=1080){
        document.writeln(NSSF,' contributions is NSSF <br>')
    }else{
        NSSF=1080
        document.writeln(NSSF,' contributions is NSSF <br>')
    }
  }
  
  var fringeTax = parseInt(prompt("Enter \n 1: January to March\n 2: April to June\n 3: July to September\n 4 October to December "))
     if(fringeTax ===1 ){
      var Tax = Totalincome *0.07;
        document.writeln(Tax)

     }
     else if(fringeTax===2){
         var Tax = Totalincome *0.07;
         document.writeln(Tax)
     }
     
     else if(fringeTax===3){
        var Tax = Totalincome *0.08;
        document.writeln(Tax)
     }

     else if (fringeTax===4){
        var Tax = Totalincome *0.09;
        document.writeln(Tax)
     }
    }ushuru()