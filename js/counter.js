function addit(addtodisplay) {
  var incre = document.getElementById(addtodisplay);
  count = parseInt(incre.value);
  count += 1;
  incre.value = count;
}

function substr(removefromdisplay) {
  var incre = document.getElementById(removefromdisplay);
  count = parseInt(incre.value);
  count -= 1;
  if (count < 0) {
    count = 0;
  }
  incre.value = count;
}

function removeVehicle(bclass, a) {
  var confirmme = confirm("Do you want to remove this item?");
  if (confirmme == true) {
    document.querySelector(bclass).style.display = "none";
    // var increafter = parseInt(document.getElementById('display1').value);
    // console.log(increafter);
    document.getElementById(a).value = 0;
  }
}

function additem(bclass) {
  var confirmme = confirm("Do you want to add this item?");
  if (confirmme == true) {
    document.querySelector(bclass).style.display = "block";
  }
}

function showresult() {
  var displaytotal = document.getElementById("disptotal");
  displaytotal.innerHTML =
    parseInt(document.getElementById("display1").value) +
    parseInt(document.getElementById("display2").value) +
    parseInt(document.getElementById("display3").value) +
    parseInt(document.getElementById("display4").value) +
    parseInt(document.getElementById("display5").value);
}
