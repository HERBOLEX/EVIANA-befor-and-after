    // Variable to hold request
    var request;

    var url = window.location.href;
    $(document).ready(function() {
        $('#url').val(url);
    });

    // Bind to the submit event of our form
    $("#orderform1").submit(function(event) {
        $("#btntest1").html('<img style="" src="img/loading.gif" /> المرجو الإنتظار');
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
            url: "https://www.eviana.store/go/?order=NcOgoKG9Hz3yOFE7iFiCuO34H9aUIb",
            type: "post",
            data: serializedData
        });

        // Callback handler that will be called on success
        request.done(function(response, textStatus, jqXHR) {
            // Log a message to the console
            console.log("Hooray, it worked!");
            console.log(response);
            console.log(textStatus);
            console.log(jqXHR);
        });

        // Callback handler that will be called on failure
        request.fail(function(jqXHR, textStatus, errorThrown) {
            // Log the error to the console
            console.error(
                "The following error occurred: " +
                textStatus, errorThrown
            );
        });

        // Callback handler that will be called regardless
        // if the request failed or succeeded
        request.always(function() {
            // Reenable the inputs
            $inputs.prop("disabled", false);
            console.log("It's running");
            window.location.href = 'thanks.html';
        });

        // Prevent default posting of form
        event.preventDefault();
    });
