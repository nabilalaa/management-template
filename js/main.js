let btn = document.querySelector(".dark");

btn.onclick = function () {
	// body
	document.body.classList.toggle("dark-mode");

	// color links
	document.querySelectorAll(".links li a").forEach((ele) => {
		ele.classList.toggle("sidemenu-color");
	});

	// background color links
	document.querySelector(".side-menu").classList.toggle("sidemenu-dark");

	// body table
	document.querySelectorAll("tbody").forEach((ele) => {
		ele.classList.toggle("dark-mode-rbody");
	});

	// head table
	document.querySelector("thead").classList.toggle("dark-mode-rhead");

	// pag
	document.querySelector(".pag").classList.toggle("dark-mode");

	// responsive table
	document.querySelectorAll(".row").forEach((ele) => {
		ele.classList.toggle("dark-mode-t-responsive");
	});
	// btn mode
	if (btn.children[0].className == "fas fa-sun") {
		btn.children[0].className = "fas fa-moon";
		btn.classList.add("dark");
		btn.classList.remove("light");
	} else {
		btn.children[0].className = "fas fa-sun";
		btn.classList.add("light");
		btn.classList.remove("dark");
	}
	// form
	document.querySelectorAll("input").forEach((ele) => {
		ele.classList.toggle("dark-mode");
	});
	document.querySelectorAll("button").forEach((ele) => {
		ele.classList.toggle("dark-mode-button");
	});
	document.querySelector(".add").classList.toggle("dark-mode-button");

	console.log(document.querySelectorAll("tbody"));
};
