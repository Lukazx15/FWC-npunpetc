$(function () {
	const $list = $("#ft_list");

	function saveTodos() {
		const todos = [];
		$list.children("div").each(function () {
			todos.push($(this).text());
		});
		document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos));
	}

	function addTodo(text) {
		const $todo = $("<div>").text(text);
		$todo.on("click", function () {
			if (confirm("Do you want to remove this TO DO?")) {
				$todo.remove();
				saveTodos();
			}
		});
		$list.prepend($todo);
	}

	const todoCookie = document.cookie.split("; ").find(function (cookie) {
		return cookie.indexOf("todos=") === 0;
	});

	if (todoCookie) {
		JSON.parse(decodeURIComponent(todoCookie.split("=")[1])).forEach(addTodo);
	}

	$("#new").on("click", function () {
		const text = prompt("New TO DO:");
		if (text && text.trim() !== "") {
			addTodo(text.trim());
			saveTodos();
		}
	});
});
