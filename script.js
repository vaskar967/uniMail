$(document).ready(function () {

	// Email Ajax send
	$("form").submit(function () { // Change
		let th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function () {
			alert("Thank You!");
			setTimeout(function () {
				//Done Functions
				th.trigger("reset");
			}, 1000)
		});
		return false;
	})
})


