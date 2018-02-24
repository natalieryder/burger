$(function() {
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    
    //store the name of the burger as object
    var burger = {
      name: $("#burger").val().trim(),
    };

    // Send the POST request with the burger name object
    $.ajax("/api/burgers/", {
      type: "POST",
      data: burger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".devour-btn").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    console.log(id);

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: {devoured: 1},
    }).then(
      function() {
        console.log("devoured burger");
        location.reload();
      }
    )


  })

});
