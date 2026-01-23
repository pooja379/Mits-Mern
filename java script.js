// console.log("hello world");
// var a ;
// a=10;
// console.log(a);
// let b =20;//block scope
// b=25;
// console.log(b)
// const c = 30;
// console.log(c);
// var a = 10;//number//global scope
// var str = "pooja";//''//``//string
// var bool=true;//boolean
// var un;//undefined
// var nu=null;//null
// console.log(nu);
// var big=123456789n;
// var symbol = Symbol("li");
// console.log(typeof a);
// console.log(typeof str);
// console.log(typeof bool);
// console.log(typeof un);
// console.log(typeof nu);
// console.log(typeof big);
// console.log(typeof symbol);
// Arthimetic operator
// var a =10;
// var b =20;//if we write b="20" also it will execute not error but for addition it will concate 1020,because it checks values in string not the datatypes.
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// // Relationaloperator(>,<,>=,<=,==,!=)
// var a =10;
// var b =20;
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);
// console.log(a==b);//check only the values
// console.log(a!=b);//check only the value
// console.log(a===b);//check data type and value
// console.log(a!==b);//check data type and value

// var a =10;
// var b ="10";
// console.log(a==b);//check only the values
// console.log(a!=b);//check only the value
// console.log(a===b);//check data type and value
// console.log(a!==b);//check data type and value
// logical operator(&&,||,!)
// a=true
// b=false
// console.log(a&&b);
// console.log(a||b);
// console.log(!a);

// var arr=[10,20,30,40];
// console.log(arr);
// console.log(typeof arr);
// var obj={
//     name:"Pooja",
//     department:"cyber security"

// }
// console.log(obj);
// console.log(typeof obj);
// for(let i=0;i<=10;i++)
// {
//     console.log(i);
// }
// // while loop
// let i=1;
// while(i<=10)
// {
//     console.log(i);
//     i++;
// }
// // do while
// i=1;
// do{
//     console.log('do..while');
// }while(i===0);
// even or odd number
// for(let i=0;i<=10;i++)
// {
//     if(i%2===0)
//     {
//         console.log(i);
//         console.log("Even number");
//     }
// }
// let mark=90;
// if (mark>=90 )console.log("O grade");
// else if (mark>=80) console.log("A grade");
// else if(mark>=70) console.log("B grade");
// else console.log("C grade");
// switch
// let day=7
// switch(day)
// {
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;
//     case 7:
//         console.log("saturday");
//         break;
//     default:
//         console.log("Invalid day");
//         break;    
// }
// i=8;
// let result=(i%2==0)?"Even":"Odd";
// console.log(result);
// let marks=89;
// let result=(marks>=90)?"O grade":(marks>=80)?"A grade":(marks>=70)?"B grade":"C grade";
// console.log(result);
// function add()
// {
//     console.log(10+20);
// }
// add();
// let add =() =>{
//     console.log(10+20);
// }
// add();
// add(10,20);
// function add(a,b)
// {
//     c=30;
//     console.log(a+b+c);
// }
// spread operator
// var arr1=[10,20,30];
// var arr2=[...arr1,40,50,60];
// console.log(arr2);
// destructing operator
// var[m1,m2,m3,m4,m5]=[89,90,99,96,87]
// console.log(m1);
// console.log(m5);
// var a={
//     name:"pooja",
//     dept:"cyber security"
// }
// console.log(a.name);
// var {name,dept,marks}={
//     name:"pooja",
//     dept:["cyber security","C.S.E"],
//     marks:
//     {
//         mern:90,
//         java:93,
//         python:95
//     }
// }
// console.log(name);
// console.log(dept);
// console.log(marks);
// for..in loop
// let arr=[10,20,30,40];
// for(let i in arr)
// {
//     console.log(arr[i]);
// }
// for object we get keys only.
// var obj={
//     name:"A.pooja",
//     age:20
// }
// for (let i in obj)
// {
//     console.log(i,obj[i]);
// }
// for(variable variable_name of array_name)
// {
//     statement

// }
// for (let val of arr)
// {
//     console.log(val);
// }
// map used to change the values
let arr=[1,2,3,4];
// var double_arr=arr.map((i)=>(i*2));
// console.log(double_arr)
// filter
// var even=arr.filter((i)=>(i%2===0))
// console.log(even) 
// reduce
// var total=arr.reduce((sum,i)=>(sum+i),0);
// console.log(total);
// combine all(map,filter,reduce)
// var double_arr1=arr.map((i)=>(i*2));
// var even1=double_arr1.filter((i)=>(i%2===0));
// var total1=even1.reduce((sum,i)=>(sum+i),0);
// console.log(double_arr1);
// console.log(even1);
// console.log(total1);
// var total_sum=arr.map((num)=>num*2).filter((num)=>(num%2===0)).reduce((sum,num)=>(sum+num));
// console.log(total_sum)
// prime numbers in a range
// for (let i=2;i<=10;i++){
//     let isprime=true;
//     for(let j=2;j<=i-1;j++)
//     {
//         if (i%j===0)
//         {
//             isprime=false;
//             break;
//         }
//     }
//     if(isprime)
//     {
//        console.log(i); 
//     }

// }
// to check given number is prime or not.
// x=23;
// isprime=true;
// for (let i=2;i<=Math.sqrt(x);i++)
// {
// if (x%i===0)
// {
// isprime=false;
// break;
// }
// }
// if(isprime)
// {
//     console.log("It is a prime number");
// }
// var x=8;
// var flag=true;
// if(n<=1)flag 
// var name="A.pooja";
// console.log(`My name is ${name}`);
// arr.forEach((value,index)=>
// {
//     console.log(index,value);
// })
// var add=(a,b,callback)=>{
//     var result=a+b;
//     callback(result);

// }
// add(10,20,(result)=>
// {
//     console.log(result);
// })
// var demo=()=>
// {
//     console.log("I am callback");
// }
// var main=(myFunction)=>
// {
//     myFunction()
// }
// main(demo);
// var promise = new Promise((resolve,reject)=>
// {
//     var success =true;
//     if(success)
//     {
//         setTimeout(()=>{
//         resolve("Promise Resolved");

//         },3000)
//     }
//     else{
//         reject("promise is rejected");
//     }
// })
// promise.then((res)=>console.log(res)).catch((err)=>console.log(err))
// const getData=()=>
// {
//     return fetch("https://jsonplaceholder.typicode.com/posts")
// }
// getData().then((res)=>res.json())
// .then((data)=>console.log(data))
// .catch(err=>console.log(err))
// const getData=async()=>{
//     try{
//     var res= await fetch("https://jsonplaceholder.typicode.com/posts")
//     var data= await res.json();
//     console.log(data);
//     }
//     catch (err)
//     {
//         console.log(err);
//     }
// }
// getData();