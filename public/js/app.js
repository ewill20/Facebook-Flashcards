$(document).ready(function() {
<<<<<<< HEAD
    $(".back").hide();
    $(".back2").hide();
});

$(".flipper").flip({
    trigger: 'manual'

});

$(".btn-arrow-left").click(function(){
    $(".flipper").flip({reverse: true});
    $(".flipper").flip('toggle',
    function () {
        alert("it's flipped");
    });
    $(".back2").show();
    $(".btn-arrow-left").on("toggle", function() {
        $(".back2").hide();
    })
    });


$(".btn-arrow-right").click(function() {
    $(".flipper").flip({reverse: false});
    $(".flipper").flip('toggle');
    $(".back").show();
    $(".btn-arrow-right").on("toggle", function() {
        $('.back').hide();
    })
});

// $(".btn-arrow-left").on("click", function() {
//     display();

// $(".btn-arrow-right").on("click", function() {
//     display();
// })    

// function display() {
//     if(".btn-arrow-left") {
//         $(".back").html();
//     } 
//     if(".btn-arrow-right") {
//         $(".back2").html();
//     }
// };

// })
=======
	//add to the defriend list and view in the defriendContainer
	var $defriendContainer = $(".defriend-container");
	//event listeners for deleting and adding to the defriend list
	$(document).on("click", "button.delete", deleteDefriend);
	$(document).on("click", "#defriend-form", insertDefriend);

	//Defriend array
	var defriendArray = [];

	//pull defriend list from database
	getDefriendDB();

	//function to reset the defriend list displayed with new people to defriend from the database
	function initializeRows() {
		$defriendContainer.empty();
		var rowsToAdd = [];
		for (var i = 0; i < defriendArray.length; i++) {
			rowsToAdd.push(createNewRow(defriendArray[i]));
		}
		$defriendContainer.prepend(rowsToAdd);
	}

	//grabs defriend list from the database and updates to the view
	function getDefriendList() {
		$.get("/api/defriendArray", function(data) {
			defriendArray = data;
			initializeRows();
		});
	}

	//function removes friend from the defriend list when user clicks the delete button
	function deleteDefriend(event) {
		event.stopPropagation();
		var id = $(this).data("id");
		$.ajax({
			method: "DELETE",
			url: "/api/defriendArray/" + id
		}).done(getDefriendList);
	}

	//function to update defriended person to the database
	function updateDefriend(defriend) {
		$.ajax({
			method: "PUT",
			url: "/api/defriendArray",
			data: defriend
		}).done(getDefriendList);
	}

	//function to create new defriend row for doomed defriended fb friend
	function createNewRow(defriend) {
		var $newInputRow = $(
			[
			"<li class ='list-group-item defriend-item'>",
			"<span>",
			defriend.text,
			"</span>",
			"<input type='text' class='edit' style='display: none;'>",
			"<button class='delete btn btn-default'>x</button>",
			"</li>"
			].join(""0)
		);

		$newInputRow.find("button.delete").data("id", defriend.id);
		$newInputRow.data("defriend", defriend);
		if (defriend.complete) {
			$newInputRow.find("span").css("text-decoration", "line-through");
		}
		return $newInputRow;
	}

	//inserts new defriended friend into database and updates the view
	function insertDefriend(event) {
		event.preventDefault();
		var defriend = {
			text: $newItemInput.val().trim(),
			complete: false
		};

		$.post("/api/defriendArray", defriend, getDefriendList);
		$newItemInput.val("");
	}


});
>>>>>>> d4f906a9c50d368d6e16bf1989d0937437d9f0d2
