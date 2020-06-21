// ................................................Assignment # 21 - 25................................................

// Task No. # 1

// var firstname = prompt("Enter first name")
// var lastname = prompt("Enter last name")
// var fullname = firstname + " " + lastname
// alert("Wellcome" + " " + fullname + " " + "to JS land")


// Task No. # 2


// var mobile = prompt("Enter your fav. mobile name")
// var lengtth = mobile.length
// document.write("My favourite phone is:" + " " + mobile)
// document.write("<br />")
// document.write("Lenght of string is:" + " " + lengtth)

// Task No. # 3

// var country = "Pakistani"
// var b = country.indexOf("n")
// document.write("String:" + " " + country)
// document.write("<br />")
// document.write("index of `n` is:" + " " + b)

// Task No. # 4

// var country = "Hello World"
// var b = country.lastIndexOf("l")
// document.write("String:" + " " + country)
// document.write("<br />")
// document.write("index of `l` is:" + " " + b)

// Task No. # 5

// var country = "Pakistani"
// var charatindex = country.charAt(3)
// document.write("String:" + " " + country)
// document.write("<br />")
// document.write("Character at index 3:" + charatindex)


// Task No. # 6



// var firstname = prompt("Enter first name")
// var lastname = prompt("Enter last name")
// alert("Wellcome" + " " + firstname + " " + lastname + " " + "to JS land")

// Task No. # 7

// var city = "Hyderabad"
// var newcity = city.replace("Hyder", "Islam")
// document.write("City:" + " " + city)
// document.write("<br />")
// document.write("After replacement:" + " " + newcity)


// Task No. # 8

// var message = "Ali and Sami are best friends.They play cricket and football together "
// var afterrepl = message.replace(/ and /g, " " + "&" + " ")
// document.write("Message:" + " " + message)
// document.write("<br />")
// document.write("<br />")
// document.write("After replacing:" + " " + afterrepl)


// Task No. # 9

// var strin = " 472 "
// var num = Number(strin)
// document.write("Value:" + " " + strin)
// document.write("<br />")
// document.write("Type:" + " " + "string ")
// document.write("<br />")
// document.write("Value:" + " " + strin)
// document.write("<br />")
// document.write("Type:" + " " + "number ")
// document.write("<br />")

// Task No. # 10

// var wordd = prompt("Write any word in lowercase")
// var uper = wordd.toUpperCase()
// document.write(uper)

// Task No. # 11

// var name = prompt("enter any word")
// var c = name.lenght
// var psss = name[0].toUpperCase()
// var nrm = name.slice(1, c)
// document.write("User input:" + " " + name)
// document.write("<br />")

// document.write("<br />")

// document.write("Title case:" + " " + psss + nrm)


// Task No. # 12

// var num = 35.36
// var chnge = num.toString()
// var newNum = chnge.split(".").join("")
// document.write("Number:" + " " + chnge)
// document.write("<br />")
// document.write("<br />")
// document.write("Result:" + " " + newNum)



// Task No. # 13

// var u = prompt("Enter username");
// // var n = u.cha 
// for (var i = 0; i <= u.length; i++) {
//     if (u.charCodeAt(i) === "33" && "44" && "46" && "64") {
//         alert("Please enter a valid name");
//         // break;
//     } else {
//         alert(u + " " + "Wellcome");
//         // break;
//     }
// }............................................................................






// Task No. # 14

// var a = ["cake", "apple pie", "cookie", "chips", "patties"]
// var c = prompt("Wellcome to ABC bakery what do you want to order sir/mam?")
// var d = c.toLowerCase()

// if (a.indexOf(d) !== -1) {
//     alert(c + " " + "is available at index:" + "  " + a.indexOf(d) + " in our bakery")
// } else {
//     alert(c + " " + "is not available in our bakery")
// }


// Task No. # 15









// Task No. # 16

// var uni = "University of Karachi"
// for (i = 0; i <= uni.length; i++) {
//     document.write(uni.charAt(i))
//     document.write("<br />")
// }



// Task No. # 17

// var name = prompt("Enter name")
// document.write("User Input: " + name)
// document.write("<br />")
// document.write("Last Character of input: " + name.charAt(name.length - 1))


// Task No. # 18


// var a = "The quick brown fox jumps over the lazy dog ";
// var b = a.toLowerCase()
// var count = (b.match(/the/g) || []).length;
// document.write(count)









// ..............................................Assignment # 26 -30................................................

// Task No. # 1


// var num = prompt("Enter a positive number")

// var round = Math.round(num)
// var flor = Math.floor(num)
// var ceeil = Math.ceil(num);

// document.write("numbers: " + num)
// document.write("<br />")
// document.write("round of value: " + round)
// document.write("<br />")
// document.write("floor value: " + flor)
// document.write("<br />")
// document.write("ceil value: " + ceeil)


// Task No. # 2



// var num = prompt("Enter a positive number")

// var round = Math.round(num)
// var flor = Math.floor(num)
// var ceeil = Math.ceil(num);

// document.write("numbers: " + num)
// document.write("<br />")
// document.write("round of value: " + round)
// document.write("<br />")
// document.write("floor value: " + flor)
// document.write("<br />")
// document.write("ceil value: " + ceeil)



// Task No. # 3

// var a = prompt("Enter a number for absoulute value")

// var b = Math.abs(a)

// document.write("The abolute value of " + a + " is " + b)



// Task No. # 4


// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 6) + 1;
// var numberOfStars = Math.floor(improvedNum);
// document.write("random dice number: " + numberOfStars)


// Task No. # 5

// var a = Math.random();
// var b = (a * 2) + 1;
// var c = Math.floor(b)
// if (c === 2) {
//     document.write(c)
//     document.write("<br />")
//     document.write("<br />")
//     document.write(" random coin value: Head")
// } else {
//     document.write(c)
//     document.write("<br />")
// document.write("<br />")
//     document.write(" random coin value: Tail")
// }


// Task No. # 6


// var a = Math.random();
// var b = (a * 100) + 1;
// var c = Math.floor(b)

// document.write("random number between 1 and 100 is: " + c)


// Task No. # 7

// var a = prompt("Enter your weight in kilograms")
// var b = parseFloat(a) + 1
// var c = parseInt(a)
// document.write("The weight of user is " + c + "  kilograms")


// Task No. # 8

// var secnum = prompt("Enter a number between 1 to 10")
// var a = Math.random();
// var b = (a * 10) + 1;
// var c = Math.floor(b)

// if (secnum === c) {
//     alert("Congraulation! ;D")
// } else(
//     alert("Try Again!")
// )





// ..............................................Assignment # 31 - 34................................................//


// Task No. # 1

// var nwDate = new Date();
// document.write(nwDate)


// Task No. # 2

// var a = ["January", "February ", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// var mnth = new Date();
// var newMon = mnth.getMonth();
// document.write("Current Month is: " + a[newMon])




//-------- second method

// var a = new Date();
// var b = a.toString();
// var c = b.slice(3, 7);
// document.write("Current Month is: " + c)


// Task No. # 3

// var a = ["Mon", "Tue ", "Wed", "Thu", "Fri", "Sat", "Sun"]
// var mnth = new Date();
// var newDay = mnth.getDay() - 1;
// document.write("Today is: " + a[newDay])



//-------- second method

// var a = new Date();
// var b = a.toString();
// var c = b.slice(0, 3);
// document.write("Today is: " + c)


// Task No. # 4

// var a = ["Mon", "Tue ", "Wed", "Thu", "Fri", "Sat", "Sun"]
// var mnth = new Date();
// var newDay = mnth.getDay() - 1;
// if (a[newDay] === "Sat") {
//     document.write("It's Fun day")
// } else if (a[newDay] === "Sun") {
//     document.write("It's Fun day")
// } else {
//     document.write("ooooh sorry today is : " + a[newDay])
// }


//-------- second method

// var a = new Date();
// var b = a.toString();
// var c = b.slice(0, 3);
// if (c === "Sat") {
//     document.write("It's Fun day")
// } else if (c === "Sun") {
//     document.write("It's Fun day")
// } else {
//     document.write("ooooh sorry today is : " + c)
// }




// Task No. # 5

// var date = new Date();
// var daymnth = date.getMonth();
// if (daymnth < 16) {
//     document.write("First fifteen day of the month")
// } else if (daymnth > 15) {
//     document.write("last fifteen day of the month")
// }


// Task No. # 6

// var date = new Date();
// var dmili = date.getTime();
// var minu = (dmili / (1000 * 60));

// document.write("Current Date: " + date)
// document.write("<br />")
// document.write("<br />")
// document.write("Elapsed milisecond since January 1, 1970: " + dmili)
// document.write("<br />")
// document.write("<br />")
// document.write("Elapsed minutes since January 1, 1970: " + minu)



// Task No. # 7

// var date = new Date();
// var str = date.toString();
// var time = str.slice(15, 18);
// if (time < 13) {
//     document.write("Its AM");
// } else {
//     document.write("Its PM");
// }


// Task No. # 8

// var laterDate = new Date("Dec 31,2020")
// document.write(laterDate)


// Task No. # 9


// var b = new Date("Apr 25,2020")
// var d = b.getTime();
// var a = new Date();
// var c = a.getTime();
// var diff = c - d;
// var days = diff / (1000 * 60 * 60 * 24);
// var flor = Math.floor(days);
// document.write(flor + " da



// Task No. # 10


// var c = new Date("Jan 1,2015")
// var d = c.getTime();
// var a = new Date("Dec 5,2015")
// var b = a.getTime();
// var e = b - d;
// var f = e / (1000 * 60)
// var g = Math.floor(f);
// document.write("On reference date " + a + " , " + g + " seconds had passed since begging of 2015")


// Task No. # 11


// var newDate = new Date();
// var hours = newDate.getHours();
// var diff = hours - 1;
// var str = newDate.toString();
// var replce = str.replace(hours, diff);
// document.write("Current date: " + newDate)
// document.write("<br />")
// document.write("<br />")
// document.write("1 hour ago, it was " + replce)


// Task No. # 12


// var newDate = new Date();
// var newDate100 = new Date("1920");
// document.write("Current date: " + newDate)
// document.write("<br />")
// document.write("<br />")
// document.write("100 years back, it was " + newDate100)



// Task No. # 13

// var age = prompt("Enter age")


// var a = new Date();
// var b = a.getFullYear();
// var e = b - age;

// document.write("Your age is: " + age)
// document.write("<br />")
// document.write("Your birth year:" + e)



// Task No. # 14



// document.write("<h1>K-Electric Bill</h1>")
// var name = prompt("Enter Your Name:")
// var unit = prompt("Enter Units:")
// var amunt = unit * 16
// var late = amunt + 350
// document.write("Customer Name: " + name)
// document.write("<br />")
// document.write("Month: February")
// document.write("<br />")
// document.write("No. of Units: " + unit)
// document.write("<br />")
// document.write("Charges per Unit: 16")
// document.write("<br />")
// document.write("<br />")
// document.write("Net Amount Payable (within Due Date): " + amunt)
// document.write("<br />")
// document.write("Late Payment surcharge: 350")
// document.write("<br />")
// document.write("Gross Amount Payable (after Due Date): " + late)



// ..............................................Assignment # 35 - 38................................................//


// Task No. # 1

// function tellTime() {
//     var now = new Date();
//     document.write(now);
// }
// tellTime();


// Task No. # 2

// function greet() {
//     var a = prompt("Enter First name")
//     var b = prompt("Enter last name")
//     var greet = ("Wellcome " + a + " " + b)
//     alert(greet)
// }
// greet();


// Task No. # 3

// function sum() {
//     var a = +prompt("Enter 1st No. for Addition")
//     var b = +prompt("Enter 2nd No. for Addition")
//     var add = a + b
//     alert(add)
// }
// sum();


// Task No. # 4

// function cal() {
//     var a = +prompt("Enter 1st num ")
//     var b = prompt("Enter Operation ")
//     var c = +prompt("Enter 2nd num ")

//     if (b == "+") {
//         alert(a + " " + "+" + " " + c + " " + "=" + " " + (a + c))
//     } else if (b == "-") {
//         alert(a + " " + "-" + " " + c + " " + "=" + " " + (a - c))
//     } else if (b == "*") {
//         alert(a + " " + "*" + " " + c + " " + "=" + " " + (a * c))
//     } else if (b == "/") {
//         alert(a + " " + "/" + " " + c + " " + "=" + " " + (a / c))
//     }

// }
// cal();



// Task No. # 5










// Task No. # 6













// Task No. # 7

// var a = +prompt("Enter start number for counting")
// var b = +prompt("Enter end number for counting")
// for (i = a; i <= b; i++) {
//     document.write(i)
// document.write("<br />")
// }


// Task No. # 8

// function hyp() {
//     var a = prompt("Enter Base")
//     var b = prompt("Enter Perpendicular")
//     var c = Math.sqrt((a * a) + (b * b))
//     var d = a * b;
//     document.write("Outer function: " + c)
//     document.write("<br />")
//     document.write("<br />")
//     document.write("Inner function: " + d)
// }
// hyp();


// Task No. # 9

// function area() {
//     var width = prompt("Enter width")
//     var height = prompt("Enter height")
//     var area = width * height
//     document.write("Area: " + area)
// }
// area();

// Task No. # 10

// var str = prompt("Enter String");
// var check = "";

// for (var i = str.length - 1; i >= 0; i--) {
//     check += str[i]
// }
// if (str === check) {
//     alert(str + " " + "is palindrome")
// }



// Task No. # 11

var name = prompt("enter string")
for (var i = 0; i <= name.length; i++) {
    if (name[i] === "") {
        var c = name.lenght
        var psss = name[0].toUpperCase()
        var nrm = name.slice(1, c)
        document.write("User input:" + " " + name)
        document.write("<br />")

        document.write("<br />")

        document.write("Title case:" + " " + psss + nrm)
    }
}