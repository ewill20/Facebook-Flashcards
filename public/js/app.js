$(document).ready(function() {
    $(".back").hide();
    $(".back2").hide();
});
    $(".flipper").flip({
        trigger: 'manual'
});
$(".btn-arrow-right").click(function() {
    $(".back2").hide();
    $(".back").show(".different-hints");
    $(".flipper").flip({reverse: false});
    $(".flipper").flip('toggle');
    $(".btn-arrow-right").on("toggle", function() {
        $('.back').hide();
        $(".back2").hide();

    })
});

    $(".btn-arrow-left").click(function() {
        $(".back").hide();
        $(".flipper").flip({reverse: true});
        $(".flipper").flip('toggle');
        $(".back2").show(".different-Options");
        $(".btn-arrow-left").on("toggle", function() {
            $(".back2").hide();
            $(".back").hide();
    })
    });
   

$(document).ready(function() {
	//add to the defriend list and view in the defriendContainer
	var $defriendContainer = $(".defriend-container");
	//event listeners for deleting and adding to the defriend list
	$(document).on("click", "button.delete", deleteDefriend);
	$(document).on("submit", "#defriend-form", insertDefriend);

	//Defriend array
	var defriendList = [];

	//pull defriend list from database
	getDefriendList();

	//function to reset the defriend list displayed with new people to defriend from the database
	function initializeRows() {
		$defriendContainer.empty();
		var rowsToAdd = [];
		for (var i = 0; i < defriendList.length; i++) {
			rowsToAdd.push(createNewRow(defriendList[i]));
		}
		$defriendContainer.prepend(rowsToAdd);
	}

	//grabs defriend list from the database and updates to the view
	function getDefriendList() {
		$.get("/api/defriendList", function(data) {
			defriendList = data;
			initializeRows();
		});
	}

	//function removes friend from the defriend list when user clicks the delete button
	function deleteDefriend(event) {
		event.stopPropagation();
		var id = $(this).data("id");
		$.ajax({
			method: "DELETE",
			url: "/api/defriendList/" + id
		}).done(getDefriendList);
	}

	//function to update defriended person to the database
	function updateDefriend(defriend) {
		$.ajax({
			method: "PUT",
			url: "/api/defriendList",
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
			].join("")
		);

		$newInputRow.find("button.delete").data("id", defriend.id);
		$newInputRow.data("defriend", defriend);
		if (defriend.complete) {
			$newInputRow.find("span").css("text-decoration", "line-through");
		}
		return $newInputRow;
	}

	//inserts new defriended friend into database and updates
	function insertDefriend(event) {
		event.preventDefault();
		var defriend = {
			text: $newItemInput.val().trim(),
			complete: false
		};

		$.post("/api/defriendList", defriend, getDefriendList);
		$newItemInput.val("");
	}
});
