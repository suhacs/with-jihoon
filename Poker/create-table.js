const table = document.querySelector("table");
const tbody = document.querySelector("tbody");
const saveButton = document.getElementById("save-button");
const addButton = document.getElementById("add-button");


saveButton.onclick = function() {
	saveData();
}


addButton.onclick = function() {
	addNewPlayer();
}


function saveData() {
	const playerRows = tbody.querySelectorAll("tr");
	let players = [];
	for (const playerRow of playerRows)
	{
		const inputs = playerRow.querySelectorAll("input");
		let playerInputs = [];
		for (const input of inputs)
		{
			playerInputs.push(input.value);
		}
		players.push(playerInputs);
	}
	localStorage.setItem("players", JSON.stringify(players));
}


function initialize() {
	const players = JSON.parse(localStorage.getItem("players"));
	if (players != undefined)
	{
		tbody.innerHTML = "";
	}
	for (const player of players)
	{
		let newrow = document.createElement("tr");
		for (let i = 0; i < player.length; i++)
		{
			let newcell = document.createElement("td");
			let newinput = document.createElement("input");
			if (i == 0) {
				newinput.type = "text";
			}
			else {
				newinput.type = "number";
				newinput.min = 0;
			}
			newinput.value = player[i];
			newcell.append(newinput);
			newrow.append(newcell);
		}
		tbody.append(newrow);
	}
}


function addNewPlayer() {
	const newrow = document.createElement("tr");
	for (let i = 0; i < 26 ; i++) {
		const newtd = document.createElement("td");
		const newinput = document.createElement("input");
		if (i == 0) {
			newinput.type = "text";
		}
		else {
			newinput.type = "number";
			newinput.min = 0;
		}
		newtd.append(newinput);
		newrow.append(newtd);
	}
	tbody.append(newrow);
}


initialize();
