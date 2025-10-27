document.getElementById("searchBtn").addEventListener("click", function() {

	
	fetch("superheroes.php")
		.then(response =>response.text())
		.then(data => {
		
			alert(data);
		})
		.catch(error => console.error("Error:", error));
});