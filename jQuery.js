var input = $("#input");

//luodaan painikkeille kuuntelijat jotka ajavat funktion klikattaessa
$("#add").click(newTodo);
$("#buttonone").click(saveTodo);
$("#buttontwo").click(getTodo);
$("#buttonthree").click(removeAll);
$("#list").click(checkRemove);

//Funktio joka luo uuden tehtävän listaan
function newTodo() {
	//Tarkastaa että kenttä ei ole tyhjä
	if (input.val() =="") {
		alert("Kenttä ei saa olla tyhjä!");
		input.css("border", "4px solid red");

	}
	//Tarkastaa, että kentään syötetyssä arvossa on vähintään 3 merkkiä
	else if (input.val().length < 3) {
		alert("Sanan on oltava vähintään 3 merkkiä pitkä");
		input.css("border", "4px solid red");

	} else {


		//Luo divin jonka sisään listan ja suoritus- sekä poistopainikkeet
		$("#list").append('<div class="todo"><li class="todo-item" >' + input.val()+ '</li><button class="complete-btn"><i class="fas fa-check"></i></button><button class="x-btn"><i class="fas fa-times"></i></button></div>');

		input.css("border","1px solid black");

		//Muuttaa kirjoituskentän tyhjäksi listan luomisen jälkeen
		input.val("")
	}
}
//Merkitsee tehtävän tehdyksi tai poistaa tehtävän listasta
function checkRemove(e) {
	var i = e.target;
	var todo = i.parentElement;

	if (i.classList[0] == "x-btn") {
		$(todo).fadeOut();
	}
	if (i.classList[0] == "complete-btn") {
		todo.classList.toggle("completed")

	}
}

//Tallentaa listan localstorageen
function saveTodo() {
	var save = $("#list").html()
	localStorage.setItem("#Todo", save);
}
//Hakee tallennetun listan localstoragesta
function getTodo() {
	$("#list").html(localStorage.getItem("#Todo"));
}
//Tyhjentää koko listan
function removeAll() {
	$("#list").html("");
	
}