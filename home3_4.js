
var header = document.createElement('div');

header.className = "headerText";

header.innerHTML = "<h2>Тест по программированию</h2>";

document.body.insertBefore(header, document.body.firstChild);


	var query1 = document.createElement('div');

	query1.className = "queryText";

	query1.innerHTML = "<p>1. Вопрос №1</p>";

	document.body.appendChild(query1);

	var checkFirst = document.createElement('div');

	checkFirst.className = "checkBox";

	checkFirst.innerHTML = "<p><input type=\"checkbox\" name=\"\" value=\"\">Вариант ответа №1<br><input type=\"checkbox\" name=\"\" value=\"\">Вариант ответа №2<br><input type=\"checkbox\" name=\"\" value=\"\">Вариант ответа №3<br></p>";

	document.body.appendChild(checkFirst);


	var query2 = document.createElement('div');

	query2.className = "queryText";

	query2.innerHTML = "<p>2. Вопрос №2</p>";

	document.body.appendChild(query2);

	var checkSec = document.createElement('div');

	checkSec.className = "checkBox";

	checkSec.innerHTML = "<p><input type=\"checkbox\" name=\"\" value=\"\">Вариант ответа №1<br><input type=\"checkbox\" name=\"\" value=\"\">Вариант ответа №2<br><input type=\"checkbox\" name=\"\" value=\"\">Вариант ответа №3<br></p>";


	document.body.appendChild(checkSec);


	var query3 = document.createElement('div');

	query3.className = "queryText";

	query3.innerHTML = "<p>3. Вопрос №3</p>";


	document.body.appendChild(query3);

	var checkThird = document.createElement('div');

	checkThird.className = "checkBox";

	
	checkThird.innerHTML = "<p><input type=\"checkbox\" name=\"\" value=\"\">Вариант ответа №1<br><input type=\"checkbox\" name=\"\" value=\"\">Вариант ответа №2<br><input type=\"checkbox\" name=\"\" value=\"\">Вариант ответа №3<br></p>";


	document.body.appendChild(checkThird);


		var button = document.createElement('div');

		button.className = "buttonResult";

		button.innerHTML = "<p><input type=\"submit\" value=\"Проверить мои результаты\"></p>";

		document.body.appendChild(button);

