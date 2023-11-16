(async function () {
	fetch("/api/hello").then(async (res) => {
		console.log(await res.text());
	});

	fetch("/api/world").then(async (res) => {
		console.log(await res.text());
	});
})();
