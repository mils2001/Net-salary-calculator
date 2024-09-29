function checkSpeed(speed){
    const speedlimit = 70;
    const demiritpointhold = 12

    if (speed<speedlimit){
        return 'ok';
    }else{
        let demiritpoint =((speed - speedlimit)/5);{
            return(`points${demiritpoint}`);
        }if(deniritpoint>deniritpointhold){
            return 'licence suspended';
        }
    }
}

const speed = 80;
const point = checkSpeed(speed);

console.log(`results is ${speed} is : ${point}`);