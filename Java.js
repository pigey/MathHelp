//Byter bild i index

function mouseOver2() { document.getElementById("demo").src="TextPolynom1.png"; }
function mouseOut2() { document.getElementById("demo").src="TextGreen.png"; }

function mouseOver3() { document.getElementById("demo").src="TextPolynom2.png";  }
function mouseOut3() { document.getElementById("demo").src="TextGreen.png";  }

function mouseOver4() { document.getElementById("demo").src="TextPolynom3.png";  }
function mouseOut4() { document.getElementById("demo").src="TextGreen.png";  }
//andra polynom kod under
var a, b, c;
var outputText;

function validate() {

    // get the input
    a = document.forms["input_form"]["aterm"].value;
    b = document.forms["input_form"]["bterm"].value;
    c = document.forms["input_form"]["cterm"].value;

    // validate a, b and c
    if (a == 0) {
        outputText = "<em>a</em> cannot equal zero!";
    } else if (isNaN(a)) {
        outputText = "<em>a</em> must be a number!";
    } else if (isNaN(b)) {
        outputText = "<em>b</em> must be a number!";
    } else if (isNaN(c)) {
        outputText = "<em>c</em> must be a number!";
    } else {
        // calculate the result using x = (-b +- sqrt(b^2 - 4ac)) / 2a
        //var x1 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
        //var x2 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
        bb= b/a;
        cc= c/a;
        var k = bb/2;
        var square  = k*k-cc;
        if (square >= 0) {

        var x1 = -k + Math.sqrt(square);
        var x2 = -k - Math.sqrt(square);

        outputText = "För att lösa ekvationen så delar vi " + b +" X + " + c + " med " + a +"<br><br> då får vi X = " + (-bb) + "/2 &plusmn; &radic;(" + (-bb) + "/2)\u00B2+" + (-cc) + "<br><br> det blir " + -k + "&plusmn; &radic; " + (k*k + (-cc)) + "<br><br> detta gör så att vi får ut svaret X1 = " + -k + "+" + Math.sqrt(square).toFixed(4) +  "=" + x1.toFixed(4) + "<br><br> detta gör så att vi får ut svaret X2 = " + -k + "-" + Math.sqrt(square).toFixed(4) + "=" + x2.toFixed(4);
    }
    else {
      outputText = "Den här funktionen gör så att den vill ta roten ur" + ' "' +square +'" ' + "vilket vårat program inte kan läsa. <br> Vänligen pröva ett annat tal";
    }
  }


    // output the result (or errors)
    document.getElementById("output_text").innerHTML = outputText;
}
//här slutar andra polynom kod

//första polynomen
var b1, c1;
var outputText1;

function validate1() {

    // get the input
    b1 = document.forms["input_form"]["bterm1"].value;
    c1 = document.forms["input_form"]["cterm1"].value;

    // validate a, b and c

if (b1==0) {
  outputText1 = "<em>a</em> cannot equal zero!"
}
    else  if (isNaN(b1)) {
        outputText1 = "<em>b</em> must be a number!";
    } else if (isNaN(c1)) {
        outputText1 = "<em>c</em> must be a number!";
    } else {
if (c1 < 0) {
  var x11 = (Math.abs(c1)/b1).toFixed(4);
  outputText1 = "För att lösa ekvationen så tar du " + c1 + "/" + b1 + " då blir X=" + -x11 + "<br><br> ta sedan bort ditt minustecken eftersom X måste vara positivt för att ekvationen ska vara lika med 0 <br><br> och då får du svaret " + x11;

}
else if (c1 >= 0) {
      var x11 = (c1/b1).toFixed(4);
        outputText1 ="För att lösa ekvationen så tar du " + c1 + "/" + b1 + " då blir X=" + x11;
      }
    }

    // output the result (or errors)
    document.getElementById("output_text").innerHTML = outputText1;

}
//tredje polynomen
var a2, b2, c2;
var outputText2;

function validate2() {
  // get the input
  a2 = document.forms["input_form"]["aterm2"].value;
  b2 = document.forms["input_form"]["bterm2"].value;
  c2 = document.forms["input_form"]["cterm2"].value;

  // validate a, b and c
  if (a2 == 0) {
      outputText2 = "<em>a</em> cannot equal zero!";
  } else if (isNaN(a2)) {
      outputText2 = "<em>a</em> must be a number!";
  } else if (isNaN(b2)) {
      outputText2 = "<em>b</em> must be a number!";
  } else if (isNaN(c2)) {
      outputText2 = "<em>c</em> must be a number!";
  } else {
      // calculate the result using x = (-b +- sqrt(b^2 - 4ac)) / 2a
      //var x1 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
      //var x2 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
      bb2= b2/a2;
      cc2= c2/a2;
      var k2 = bb2/2;
      var square2  = k2*k2-cc2;
      if (square2 >= 0) {

      var x12 = -k2 + Math.sqrt(square2);
      var x22 = -k2 - Math.sqrt(square2);

      outputText2 = "Det första som vi gör är att dela allt med X Vilket gör så att det ser ut som en andragradare <br><br> För att lösa ekvationen så delar vi " + b2 +" X + " + c2 + " med " + a2 +"<br><br> då får vi X = " + (-bb2) + "/2 &plusmn; &radic;(" + (-bb2) + "/2)\u00B2+" + (-cc2) + "<br><br> det blir " + -k2 + "&plusmn; &radic; " + (k2*k2 + (-cc2)) + "<br> detta gör så att vi får ut svaret X1 = " + -k2 + "+" + Math.sqrt(square2).toFixed(4) +  "=" + x12.toFixed(4) + "<br><br> detta gör så att vi får ut svaret X2 = " + -k2 + "-" + Math.sqrt(square2).toFixed(4) + "=" + x22.toFixed(4) + "<br><br> x3 är alltid = 0 eftersom alla tal som inte är 0 har med x att göra. ";
  }
  else {
    outputText2 = "Den här funktionen gör så att den vill ta roten ur" + ' "' +square2 +'" ' + "vilket vårat program inte kan läsa. <br> Vänligen pröva ett annat tal";
  }
}


  // output the result (or errors)
  document.getElementById("output_text").innerHTML = outputText2;

  //outputText2 =  "For the equation <strong>" + (a2 == 1 ? "" : a2) + "x\u00B3 + " + (b2 == 1 ? "" : b2) + "x\u00B2" + (c2 ==1 ? "": c2) + "x + " + d2 + " = 0</strong>, x1 is equal to <strong>" + x1 + "</strong> and x2 is equal to <strong>" + x2 + "</strong> x3 is equal to <strong>" + x3 + "</strong>";
  }
