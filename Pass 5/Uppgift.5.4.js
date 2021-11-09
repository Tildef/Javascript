let bokstav= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let platar= []; 
let plat= " ";


//Loopar fram 1000 olika plåtar.
for (let i=0; i<1000; i++){
    //Slumpar fram tre bokstäver
    for(let j=0; j<3; j++){
        plat= plat+bokstav[Math.floor(Math.random()*bokstav.length)];
    }
    //Slumpar fram tre siffror mellan 0-9
    for(let j=0; j<3; j++){
        plat= plat+Math.floor(Math.random()*10);
    }
    //Den kontrollerar att det inte blir fler av samma plåt, om den ska slängas eller läggas till i arrayen.
     //Om en plåt redan finns i arrayen så slängs den så att det inte blir dubbla likadana plåtar.
    if(platar.includes(plat)){
        i--;
    //Om en plåt inte finns redan så läggs den i arrayen "plåtar" och fortsätter.
    }else{
        platar.push(plat);
    }
    plat=" "; 
}
console.log(platar.join(" "));











