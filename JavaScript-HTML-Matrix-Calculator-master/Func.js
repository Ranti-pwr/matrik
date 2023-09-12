// Math.html //
function one()
{
document.getElementById('two').style.visibility = "hidden";
document.getElementById('three').style.visibility = "hidden";
document.getElementById('four').style.visibility = "hidden";
document.getElementById('end').style.visibility = "hidden";
document.getElementById('one').style.visibility = "visible";
}
function two()
{
document.getElementById('one').style.visibility = "hidden";
document.getElementById('three').style.visibility = "hidden";
document.getElementById('four').style.visibility = "hidden";
document.getElementById('end').style.visibility = "hidden";
document.getElementById('two').style.visibility = "visible";
}
function three()
{
document.getElementById('one').style.visibility = "hidden";
document.getElementById('two').style.visibility = "hidden";
document.getElementById('four').style.visibility = "hidden";
document.getElementById('end').style.visibility = "hidden";
document.getElementById('three').style.visibility = "visible";
}
function four()
{
document.getElementById('one').style.visibility = "hidden";
document.getElementById('two').style.visibility = "hidden";
document.getElementById('three').style.visibility = "hidden";
document.getElementById('end').style.visibility = "hidden";
document.getElementById('four').style.visibility = "visible";
}
<!-- solve 1x1 Matrix -->
function solve1()  
{
var num1,txt;
	num1=document.getElementById("num1").value;
	txt="Determinant = "+num1;
	document.getElementById("here").innerHTML=txt;
	document.getElementById('end').style.visibility = "visible";
}
<!-- solve 2x2 Matrix -->
function solve2()
{
var b11 = document.getElementById("b1").value;
var b12 = document.getElementById("b2").value;
var b21 = document.getElementById("b3").value;
var b22 = document.getElementById("b4").value;
var sum;
var txt;
sum=(b11*b22)-(b12*b21);
	
	txt="Determinant = "+sum;
	document.getElementById("here").innerHTML=txt;
	document.getElementById('end').style.top = "300px";
	document.getElementById('end').style.visibility = "visible";
}
<!-- solve 3x3 Matrix -->
function solve3()
{
var a11 = document.getElementById("a1").value;
var a12 = document.getElementById("a2").value;
var a13 = document.getElementById("a3").value;
var a21 = document.getElementById("a4").value;
var a22 = document.getElementById("a5").value;
var a23 = document.getElementById("a6").value;
var a31 = document.getElementById("a7").value;
var a32 = document.getElementById("a8").value;
var a33 = document.getElementById("a9").value;
var sum,txt;
sum=(a11 * a22 * a33)+(a21 * a32 * a13)+(a31 * a12 * a23)-(a13 * a22 * a31)-(a23 * a32 * a11)-(a33 * a12 * a21);
	txt="Determinant = "+sum;
	document.getElementById("here").innerHTML=txt;
	document.getElementById('end').style.top = "350px";
	document.getElementById('end').style.visibility = "visible";
}
<!-- solve 4x4 Matrix -->
function solve4()
{
var a11 = document.getElementById("d1").value;
var a12 = document.getElementById("d2").value;
var a13 = document.getElementById("d3").value;
var a14 = document.getElementById("d4").value;
var a21 = document.getElementById("d5").value;
var a22 = document.getElementById("d6").value;
var a23 = document.getElementById("d7").value;
var a24 = document.getElementById("d8").value;
var a31 = document.getElementById("d9").value;
var a32 = document.getElementById("d10").value;
var a33 = document.getElementById("d11").value;
var a34 = document.getElementById("d12").value;
var a41 = document.getElementById("d13").value;
var a42 = document.getElementById("d14").value;
var a43 = document.getElementById("d15").value;
var a44 = document.getElementById("d16").value;
var sum,txt;
sum=-a41*((a12 * a23 * a34)+(a22 * a33 * a14)+(a32 * a13 * a24)-(a14 * a23 * a32)-(a24 * a33 * a12)-(a34 * a13 * a22))
	+a42*((a11 * a23 * a34)+(a21 * a33 * a14)+(a31 * a13 * a24)-(a14 * a23 * a31)-(a24 * a33 * a11)-(a34 * a13 * a21))
	-a43*((a11 * a22 * a34)+(a21 * a32 * a14)+(a31 * a12 * a24)-(a14 * a22 * a31)-(a24 * a32 * a11)-(a34 * a12 * a21))
	+a44*((a11 * a22 * a33)+(a21 * a32 * a13)+(a31 * a12 * a23)-(a13 * a22 * a31)-(a23 * a32 * a11)-(a33 * a12 * a21));
	txt="Determinant = "+sum;
	document.getElementById("here").innerHTML=txt;
	document.getElementById('end').style.top = "400px";
	document.getElementById('end').style.visibility = "visible";
}