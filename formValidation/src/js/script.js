var $ = require("jquery");
$("document").ready(function() {
  // Get all forms
  var simpleValidation = function() {

    var validateForm = $('form.validate-form');

    // Gets all forms to Validate
    validateForm.each(function() {
      // Defining basic variables, bro
      var validateForm = $(this);
      var validate = {};
      var validateThis = $(this).find('.validate');
      var validatingLength = $(this).find('.validate').length;
      var submitBtn = $(this).find('.submit');

      // For Loop Getting Elements to Validate
      for (var i = 1; i <= validatingLength; i++) {
        // Adding Inputs to object, false for default
        validate['input' + i] = false;
      }
      var password = document.getElementById("password"),
        confirm_password = document.getElementById("confirm_password");

      function validatePassword() {
        if (password.value != confirm_password.value) {
          confirm_password.setCustomValidity("Passwords Don't Match");
        } else {
          confirm_password.setCustomValidity('');
        }
      }

      password.onchange = validatePassword;
      confirm_password.onkeyup = validatePassword;

      $('.validate').blur(function() {
        var index = $(this).prevAll().length + 1;
        var validateThisVal = $(this).val();
        var validateThisType = $(this).attr('type');

        // Checks if input type is email
        if (validateThisType === "email") {

          // Email regex
          var re = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
          // Condition to see if Email exists
          if (!validateThisVal.match(re)) {
            $(this).addClass('not-valid');
            $(this).removeClass('is-valid');
            return validate['input' + index] = false;
          } else {
            $(this).addClass('is-valid');
            $(this).removeClass('not-valid');
            return validate['input' + index] = true;
          }
        } else {
          // Makes sure input is filled out
          if (validateThisVal == "") {
            $(this).addClass('not-valid');
            $(this).removeClass('is-valid');
            return validate['input' + index] = false;
          } else {
            $(this).addClass('is-valid');
            $(this).removeClass('not-valid');
            return validate['input' + index] = true;
          }
        }
      });


      validateForm.submit(function(event) {
        // Prevents Default
        event.preventDefault();

        // Logging form errors
        var falseCtn = 0;
        for (var i = 1; i <= validatingLength; i++) {
          if (validate['input' + i] == false) {
            falseCtn++;
          }
        }

        // Checking if any falses exist
        if (falseCtn > 0) {
          $(this).unbind('submit').submit();
          $(this).click();
        } else {}
      });

    });
    //   $('input').blur(function() {
    //     var pass = $('input[name=password]').val();
    //     var repass = $('input[name=repassword]').val();
    //     if(($('input[name=password]').val().length == 0) || ($('input[name=repassword]').val().length == 0)){
    //         $('#password').addClass('not-valid');
    //     }
    //     else if (pass != repass) {
    //         $('#password').addClass('not-valid');
    //         $('#repassword').addClass('not-valid');
    //     }
    //     else {
    //         $('#password').removeClass().addClass('is-valid');
    //         $('#repassword').removeClass().addClass('is-valid');
    //     }
    // });
  };

  simpleValidation();


});
