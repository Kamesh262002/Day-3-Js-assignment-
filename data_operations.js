//-------------assignment day-3----------------

//part-1
let users = [
    {name:"kamesh",age:20,gender:"male",location:"vadapalani"},
    {name:"selva",age:17,gender:"male",location:"iyyapathangal"},
    {name:"subash",age:23,gender:"male",location:"madhuravayal"},
    {name:"vinothini",age:36,gender:"female",location:"kundrathur"},
    {name:"sangeetha",age:24,gender:"female",location:"theni"},
    {name:"tamilselvan",age:16,gender:"male",location:"madurai"},
    {name:"sunil",age:20,gender:"male",location:"dindugal"},
    {name:"parthipan",age:25,gender:"male",location:"salem"},
    {name:"uma",age:15,gender:"female",location:"kovai"},
    {name:"nithiyanadham",age:24,gender:"male",location:"porur"},
    {name:"priya",age:17,gender:"female",location:"gingee"},
    {name:"dharshini",age:20,gender:"female",location:"gerugabakkam"},
    {name:"akash",age:16,gender:"male",location:"thanjaur"},
    {name:"lokesh",age:32,gender:"male",location:"delhi"},
    {name:"ajay",age:19,gender:"male",location:"mumbai"}
]

isAdult = (age) =>{
    if(age>=18){
        return true;
    }else{
        return false
    }
}

let adultUsers = users.filter((adult) =>{
    let getAdult = isAdult(adult.age)==true;
    return getAdult
})


getFullName = (fname) =>{
    let fullName = fname.name +" "+ fname.location;
    return fullName;
}

let userNames = users.map((uName) =>{
    return getFullName(uName);
})


//part-2

filterByGender = (user) =>{
    if(user.gender=="female"){
        return true;
    }else{
        return false;
    }
}

let femaleUsers = users.filter((gender)=>{
   let getGender = filterByGender(gender)==true;
   return getGender;
}).map((name)=>{
   return getFullName(name);
})
//part-3

let movies = [
    {title:"remo",genre:"comedy",year:2016,rating:9},
    {title:"leo",genre:"action",year:2023,rating:10},
    {title:"master",genre:"action",year:2021,rating:9},
    {title:"vikram",genre:"action",year:2022,rating:10},
    {title:"dd returns",genre:"comedy",year:2021,rating:9},
    {title:"asuran",genre:"action",year:2021,rating:9},
    {title:"varisu",genre:"comedy",year:2022,rating:8},
    {title:"ok ok",genre:"comedy",year:2021,rating:9},
    {title:"kgf",genre:"action",year:2018,rating:10},
    {title:"kgf-2",genre:"action",year:2021,rating:10},
]

//part-4

filterByGenre = (get) =>{
    if(get.genre == "action"){
        return true;
    }else{
        return false;
    }
}



let actionMovies = movies.filter((genre)=>{
    return filterByGenre(genre)== true;
}).map((movieTiles)=>{
    return movieTiles.title;
})



//part-5

let part1 = [adultUsers , userNames];
let part2 = femaleUsers;
let part3 = actionMovies;

let combinedResults = [part1,part2,part3];

console.log(combinedResults);