var $ = require("jquery");
$("document").ready(function() {
  //   var nodes = document.getElementsByTagName('button');
  //         console.log(nodes);
  //       for (var i = 0; i < nodes.length; i++) {
  // (function(index){
  //   nodes[i].addEventListener('click', function(){
  //
  //     console.log('You clicked element #' + index);
  //
  //        })
  //     })(i)
  //
  //   }
  //
  // console.log(typeof undefined);
  // function printing() {
  //    console.log(1);
  //    setTimeout(function() { console.log(2); }, 1000);
  //    setTimeout(function() { console.log(3); }, 0);
  //    console.log(4);
  // }
  //
  // printing();
  // function isPrime(i){
  // if(i===1){
  //   console.log(i, 'is not a prime numberxxxxx') ;
  // }
  //  else if(i===2){
  //   console.log(i, 'is a prime numbera') ;
  // }
  //   else if(i%2===0){
  //     console.log(i,'is not a prime numberbbbb') ;
  // }else{
  //   var k = false;
  //   for(var x=2; x<i; x++){
  //     if(i%x===0){
  //       k=true;
  //       // console.log(i,'is not a prime numberccccc ') ;
  //     }
  //   }
  //     if(k){
  //       console.log(i,'is not a prime number');
  //     }else{
  //       console.log(i,'IS a prime number');
  //
  //     }
  //   }
  // };
  // isPrime(25);
  //
  //
  //
  // //  Merge cu return pentru ca ajuns la return iese din fuunctie si nu mai citeste ce vine dupa return.
  // // cu console log trebuie sa faci o variabila K care ia valoare false initial si cand intra in for devine true, odata intrata in for va deveni true
  // function test_prime(n)
  // {
  //
  //   if (n===1)
  //   {
  //     return false;
  //   }
  //   else if(n === 2)
  //   {
  //     return true;
  //   }else
  //   {
  //     for(var x = 2; x < n; x++)
  //     {
  //       if(n % x === 0)
  //       {
  //         return false;
  //       }
  //     }
  //     return true;
  //   }
  // }
  //
  // console.log(test_prime(37));
  // function repetify(str, i){
  //   var z = '';
  //     for (var y = 1; y <= i; y++) {
  //       z+=str;
  //       // console.log(z);
  //     }
  //       return z;
  //   }
  //   console.log( repetify("hello",4));

  // function test() {
  //    console.log(a);
  //    console.log(foo());
  //
  //    var a = 1;
  //    function foo() {
  //       return 2;
  //    }
  // }
  // test();
  // var newobj = {
  //   xc: 0,
  //   recursF: function(w) {
  //     var ww = (w * 5) + w - 1;
  //     console.log(ww);
  //
  //     var str = "abcdefgfijklmnopqrstuvwxyz";
  //     var strArr = str.split("");
  //     // console.log(strArr);
  //     var k = this.getRandomInt(0, strArr.length);
  //     // console.log(strArr.length, "strArr.lenght");
  //
  //     var character = strArr[k];
  //     // console.log(character, "character");
  //
  //     if (this.xc < ww) {
  //       this.xc++
  //         this.maxChar--;
  //       var spacebug = "";
  //       if (this.maxChar < 1) {
  //         console.log(this.xc, "this.xc");
  //         this.maxChar = this.getRandomInt(3, 10);
  //         spacebug = " ";
  //       }
  //       // console.log(ww, "wwwwwwwwwwwwwwwwwwwwww");
  //
  //       return character + spacebug + this.recursF(w);
  //
  //     }
  //
  //     return " ";
  //   },
  //
  //   maxChar: 7,
  //   getRandomInt: function(min, max) {
  //     min = Math.ceil(min);
  //     max = Math.floor(max);
  //     return Math.floor(Math.random() * (max - min)) + min;
  //   }
  // }
  // console.log(newobj.recursF(150));
  //   var SpaceX = {
  //   xc:0,
  //   paragraphX: function(w){
  //     var ww = (w*6)+w-1;
  //     var str= "abcdefghijklmnopqrstuvwxyz"
  //     var strArr = str.split("");
  //     var k = this.getRandomInt(3,10);
  //     var character = strArr[k];
  //     if(this.xc < ww){
  //       console.log(this.xc, 'this.xc')
  //       this.xc++;
  //       this.maxChar--;
  //       var spacebug="";
  //
  //       if(this.maxChar==0){
  //         spacebug = " "
  //         this.maxChar= this.getRandomInt(3, 10)
  //       }
  //       return character+spacebug+this.paragraphX(w);
  //       console.log(character, 'character')
  //
  //     }
  //     return "";
  //   },
  //
  //   maxChar:7,
  //   getRandomInt: function(min, max) {
  //       min = Math.ceil(min);
  //       max = Math.floor(max);
  //       return Math.floor(Math.random() * (max - min)) + min;
  //     }
  // }
  //
  // console.log(SpaceX.paragraphX(150));



  // BUBBLESORT RECURSIVE FUNCTION
  // var arr = [45, 3, 56, 5, 33, 2, 89, 9, 19];
  // var h = false;
  //
  // function bubbleSort(i) {
  //   console.log(i, "i");
  //   if(i ==0){
  //     i = arr.length;
  //     if (!h){
  //       return arr;
  //     }
  //     h = false;
  //     return bubbleSort(i);
  //   }
  //
  //     if (arr[i] < arr[i - 1]) {
  //
  //       var c = arr[i];
  //       arr[i] = arr[i - 1];
  //       arr[i - 1] = c;
  //       h = true;
  //
  //       return bubbleSort(i - 1);
  //     }
  //
  //     return bubbleSort(i - 1);
  // }
  // console.log(bubbleSort(arr.length));
  //
  //   var sortNr = {
  // h:false,
  //   sortFunction: function(arr,i){
  //     var h = this.h;
  //     if(i ==0){
  //      i = arr.length;
  //      if (h==false){
  //        return arr;
  //      }
  //      this.h = false;
  //      return this.sortFunction(arr,i,h);
  //    }
  //
  //      if (arr[i] < arr[i - 1]) {
  //
  //        var c = arr[i];
  //        arr[i] = arr[i - 1];
  //        arr[i - 1] = c;
  //        this.h = true;
  //
  //        return  this.sortFunction(arr,i-1,h);
  //      }
  //
  //      return  this.sortFunction(arr,i-1,h);
  //    }
  //
  //  }
  // var aee = [100,50,23,41,2,1];
  // var s = aee.length;
  // console.log(sortNr.sortFunction(aee , s ));

  // var fizzbuzz = {
  //   fbzzFunctie: function(x) {
  //     for (var i = x; i > 0; i--) {
  //       console.log(i, "iiiiiiiiiiiii");
  //       if ((i % 5 == 0) && (i % 3 == 0)) {
  //         return i + "FizzBuzz"+"\n"+this.fbzzFunctie(x-1);
  //       } else if (i % 5 == 0) {
  //         return i + "Buzz"+"\n"+this.fbzzFunctie(x-1);
  //       } else if (i % 3 == 0) {
  //         return i + "Fizz"+"\n"+this.fbzzFunctie(x-1);
  //       } else {
  //         return i + "nu e divizibil cu 3 sau 5"+"\n"+this.fbzzFunctie(x-1);
  //       }
  //       console.log(i, "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
  //     }
  //
  //   }
  // }
  // console.log(fizzbuzz.fbzzFunctie(20));



  //FUNCTIE PT CALCULARE FACTORIAL DE UN NR
  // var factorialNr = {
  //   factorialF: function(x) {
  //     var a = x;
  //     if (x > 1) {
  //       return a*this.factorialF(x - 1);
  //     } else {
  //       return a;
  //     }
  //   }
  // }
  //
  // console.log(factorialNr.factorialF(5));


  // FUNCTIE PENTRU ADUNAREA A 2 NR DE N ORI

  // var obj = {
  // recursF: function(a,b,n){
  // var adunare = a+b;
  //
  // if(n>1){
  //
  //   return adunare+this.recursF(a,b,n-1);
  //
  // }
  //   else if(( n== 0) || ( n== 1)) {
  //     console.log(adunare,"adunare")
  //
  //       return adunare;
  //   }
  // },
  // }
  //
  //
  // console.log(obj.recursF(1,1,2))

  //  UNDERSTANDING INHERITANCE AND POLYMARPHISM


  //
  //   var padawan = {
  //     name: 'anakin',
  //     age: 9,
  //   };
  //   var padawan = function(name, age) {
  //     this.name = name;
  //     this.age = age;
  //     this.skill = function() {
  //         return this.age.toString().length;
  //     }
  // };
  // var padawan = function(name, age) {
  //   this.name = name;
  //   this.age = age;
  // };
  // var padawan = {
  //   name: 'anakin',
  //   age: 9
  // }



//
//   var Padawan = function(name, age) {
//     this.name = name;
//     this.age = age;
//     this.calc = function(par) {
//               return par+2;
//     }
//   }
//   // console.log(padawan.name, 'padawan');
//   var anakin = new Padawan('anakin', 9);
//   // console.log(anakin.calc(1));
//
// anakin.calcB = function(par){
//   return par+3;
// }
// anakin.calcC = function(par){
//   return this.calc(par);
// }
// console.log(anakin.calcC(3));




})
