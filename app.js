window. onload = function () {
	const searchBtn = document.getElementById("searchBtn");
	const searchField = document.getElementById("searchField");
	const resultDiv = document.getElementById("result");

	searchBtn.addEventListener("click", function () {
		let query = searchField.value.trim();


		query = query.replace(/[^a-zA-Z\s\'-]/g, "");

		let url = "superheroes.php";
		if (query.length > 0) {
			url += `?query=${encodeURIComponent(query)}`;
		}

	
		fetch(url)
		.then(response => {
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.text();
		})
		.then(data => {
			resultDiv.innerHTML = data;
		})
		.catch(error => {
			resultDiv.innerHTML = "<p style='color:red;'>An error occured while fetching data.</p>";
			console.error(error);
		});
	});
};