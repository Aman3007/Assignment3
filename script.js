$("#form").submit(function (e) {
  e.preventDefault();
});
const input = document.getElementById('phone');
  input.addEventListener('input', function () {
    // Remove non-digits
    this.value = this.value.replace(/[^0-9]/g, '');
  });
function isEmail(email) {
  var regex = /^[A-Za-z0-9]{2,10}[@A-Za-z]{3,10}.[a-z]{3}$/;

  return regex.test(email);
}
function isPhone(phoneno) {
  var regex = /^[0-9]{10}$/;
  return regex.test(phoneno);
}

function isName(name) {
  var regex = /^[A-Za-z]{4,8}\s[A-Za-z]{3,8}$/;
  return regex.test(name);
}
function isPassword(password) {
  var regex = /^(?=.*[0-9])(?=.*[A-Z])[a-zA-z0-9]{6,10}$/;
  return regex.test(password);
}
function isConfirmpass(confirmpassword,password) {
return (confirmpassword==password);
}
var errormessage = "";
$("#submit").click(function () {
  var email = $("#email").val();
  var password = $("#Password").val();
  var confirmpassword = $("#confirmPassword").val();
  var name = $("#name").val().trim();
  var phoneno = $("#phone").val();


  if (!email || !password || !phoneno || !name || !confirmpassword) {
    errormessage = "<p>Please fill all the Fields</p>"
    $("#errors").html(errormessage)
  }

  else if (!isEmail(email)) {
    errormessage = ("<p>Please add a valid E-mail</p>")
    $("#success").html("")
    $("#errors").html(errormessage)

  }
  else if (!isPhone(phoneno)) {
    errormessage = ("<p>Please add a valid Phone no</p>")
    $("#success").html("")
    $("#errors").html(errormessage)
  }
  else if (!isName(name)) {
    errormessage = ("<p>Please add a valid Name</p>")
    $("#success").html("")
    $("#errors").html(errormessage)
  }
  else if (!isPassword(password)) {
    errormessage = ("<p>Please add a Password(minimum length 6,at least 1 uppercase letter,at least 1 lowercase letter, at lease 1 number)</p>")
    $("#success").html("")
    $("#errors").html(errormessage)
  }
  else if (!isConfirmpass(confirmpassword,password)) {
   
    errormessage = ("<p>confirm password does not matches the password above</p>")
    $("#success").html("")
    $("#errors").html(errormessage)
  }

  else {
    $("#errors").html("")
    $("#success").html("your form is submitted successfully..!!")

  }


})

$("#show").click(function () {
  $("#Password").attr("type", "text")
  $("#show").css("display", "none")
  $("#hide").css("display", "inline")
})

$("#hide").click(function () {
  $("#Password").attr("type", "password")
  $("#hide").css("display", "none")
  $("#show").css("display", "inline")

})

$("#confirmshow").click(function () {
  $("#confirmPassword").attr("type", "text")
  $("#confirmshow").css("display", "none")
  $("#confirmhide").css("display", "inline")
})

$("#confirmhide").click(function () {
  $("#confirmPassword").attr("type", "password")
  $("#confirmhide").css("display", "none")
  $("#confirmshow").css("display", "inline")
})

