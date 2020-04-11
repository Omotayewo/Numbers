var i = 0;
	function decNumber() {
	var down = i--;
		document.getElementById('num').innerHTML = i;
		document.getElementById('one').style.backgroundColor = "blue";
		document.getElementById('two').style.backgroundColor = "";
	if (i < 0) {
		document.getElementById('num').style.color = "red";
		}
	}
	function incNumber() {
	var up = i++
		document.getElementById('num').innerHTML = i;
		document.getElementById('two').style.backgroundColor = "blue";
		document.getElementById('one').style.backgroundColor = "";
	if (i > 0) {
		document.getElementById('num').style.color = "green";
		}
	}