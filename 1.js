
    function calculate(grade){
        if(grade >= 79 && grade <100){
            return 'A';
        }else if(grade >= 60 && grade < 79){
            return 'B';
        }else if(grade >= 59 && grade <49 ){
            return 'C';
        }else if(grade >= 49 && grade <40){
            return 'D';
        }else if (grade >= 40 && grade <30){
    
            return 'E';
    }
    }
    let grade = 60;
    
    let result = calculate(grade);
    
    console.log(`the grade for ${grade} is: ${result}`);

  





