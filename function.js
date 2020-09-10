$(document).ready(function(){
// all custom jquery will go here 
//$("jumbotron.button").click(function(){
    // $(".test").html("<b>Hello world</b>");
//})

//CREATING VARIABLES

    // does not change
    const a;

    var b;
    // the difference between var and let is scope, let has a smaller scope than var
    let c;

//IF STATEMENTS
    if(b == 2){//falsy

    }else if( c === 3){// check for same type 

    }else{

    }

    //the difference between == and === is checking for type, === is similar, but not the same == but it checks to see if the statement is of the same type

    var d = b ==2?"yes":"no"
    //shorthand for an if statement used for assigning things: ternary condition ? true:false return(ternary)
    // translation: does b =2 if true return "yes", if false return "no"
    // has to be assigned to something though cant get rid of initialization statement "var d"
    // can double and stack it like if statements like "var d = b == 2 && c===1?"yes":a!= null? "yes":"no""

    //basic arithmatic functions + - x /, modulus, 1+1 = 11 (have to specify string or number)

    //string, number , array [], json{}

    //created a Json called xkcdJson, gave it a title (which is a key)
    // key is a loose term 
    var xkcdJson = {title: "Standard Model Changes", 
                    day: "26"}
    // access and assign from key "day" to a new var
    var xkcdDay = xkcdJson.day 

//CRUD
    //GET, PUT, POST, DELETE | CREATE, RETRIEVE, UPDATE, DELETE (the first 4 are interchangeable to the second 4)
                             //shorthand is CRUD ^^

//FOR STATEMENTS
    for(var i = 0;i < something; i++){

    }
    something.forEach()

//FUNCTIONS
    function firstfunction( variables){
     // process input
        return variables + 1;
       
        // return something 
    }


    //=> // arrow function declaration

//ARRAYS
   array;
    // array functions : sort, forEach , push , pop, shift, promise or wait
    // a promis works with asynchronus 
   // all documentation can be found in the developer mozilla website developer.mozilla.org
   // it important to see if something is depricated because that means it is outdated 


    Promise (function(){
    setTimeout(x);
    //whatever you wanting to wait on
    });

//DEBUGGING
    console.log(variablename);
    //see video 1 from collab ultra at 42 min for more debugging information




});
