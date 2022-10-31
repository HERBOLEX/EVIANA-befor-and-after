    // Variable to hold request
var request;


// Bind to the submit event of our form
$("#orderform").submit(function(event){
	
	    var namee = $("#Nom").val();
        var city = $("#Ville").val();
        var phone_number = $("#Tele").val();
        //var phone_length = $("#Tele").val().length;
        if (namee !== "" && city !== "" && phone_number !== "")
		{
		$("#btntest").html('<span class="spinner-border spinner-border-sm text-dark" role="status" aria-hidden="true"></span> &nbsp;المرجو الإنتظار');			
		}
	

    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);

    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");

    // Serialize the data in the form
    var serializedData = $form.serialize();

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to /form.php
    request = $.ajax({
        url: "https://www.lescommandes.xyz/go/?order=S3TkHzEdtyqrGeFUvDhvjSsuvMtPGW",
        type: "post",
        data: serializedData
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        console.log("It's running");
        $inputs.prop("disabled", false);
		
		$("#Nom").val('');
		$("#Ville").val('');
		$("#Tele").val('');
		$(".title-form").text('ثم إرسال الطلبية بنجاح سوف نتصل بك في  أقرب وقت');
		$("#btntest").text('شكرا لك');
		$("#btntest").prop("disabled", true);

        window.location.href = 'thanks.html';
    });


    // Prevent default posting of form
    event.preventDefault();
});

