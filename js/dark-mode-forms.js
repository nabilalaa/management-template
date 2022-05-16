let btn = document.querySelector(".dark");
let darkMode = localStorage.getItem("darkMode");

function enable() {
	// form
	document.querySelectorAll("input").forEach((ele) => {
		ele.classList.add("dark-mode");
	});
	document.querySelectorAll("button").forEach((ele) => {
		ele.classList.add("dark-mode-button");
	});
	document.querySelectorAll("select").forEach((ele) => {
		ele.classList.add("dark-mode");
	});
	document.querySelectorAll(".add-items").forEach((ele) => {
		ele.classList.add("dark-mode-forms");
	});
	document.querySelector(".forms h3").classList.add("dark-mode");
	// body
	document.body.classList.add("dark-mode");

	// color links
	document.querySelectorAll(".links li a").forEach((ele) => {
		ele.classList.add("sidemenu-color");
	});
	// side menu
	document.querySelector(".side-menu").classList.add("sidemenu-dark");

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
	// nav
	document.querySelector("nav").classList.add("nav-dark-mode");
	localStorage.setItem("darkMode", "enable");
}

function disabled() {
	// form
	document.querySelectorAll("input").forEach((ele) => {
		ele.classList.remove("dark-mode");
	});
	document.querySelectorAll("button").forEach((ele) => {
		ele.classList.remove("dark-mode-button");
	});
	document.querySelectorAll("select").forEach((ele) => {
		ele.classList.remove("dark-mode");
	});
	document.querySelectorAll(".add-items").forEach((ele) => {
		ele.classList.remove("dark-mode-forms");
	});
	document.querySelector(".forms h3").classList.remove("dark-mode");
	// body
	document.body.classList.remove("dark-mode");

	// color links
	document.querySelectorAll(".links li a").forEach((ele) => {
		ele.classList.remove("sidemenu-color");
	});

	// side menu
	document.querySelector(".side-menu").classList.remove("sidemenu-dark");

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
	// nav
	document.querySelector("nav").classList.remove("nav-dark-mode");
	localStorage.setItem("darkMode", "disabled");
}
if (darkMode == "enable") {
	// form
	document.querySelectorAll("input").forEach((ele) => {
		ele.classList.add("dark-mode");
	});
	document.querySelectorAll("button").forEach((ele) => {
		ele.classList.add("dark-mode-button");
	});
	document.querySelectorAll("select").forEach((ele) => {
		ele.classList.add("dark-mode");
	});
	document.querySelectorAll(".add-items").forEach((ele) => {
		ele.classList.add("dark-mode-forms");
	});
	document.querySelector(".forms h3").classList.add("dark-mode");
	// body
	document.body.classList.add("dark-mode");

	// color links
	document.querySelectorAll(".links li a").forEach((ele) => {
		ele.classList.add("sidemenu-color");
	});
	// side menu
	document.querySelector(".side-menu").classList.add("sidemenu-dark");

	if (btn.children[0].className == "fas fa-sun") {
		btn.children[0].className = "fas fa-moon";
		btn.classList.add("dark");
		btn.classList.remove("light");
	} else {
		btn.children[0].className = "fas fa-sun";
		btn.classList.add("light");
		btn.classList.remove("dark");
	}
	// nav
	document.querySelector("nav").classList.add("nav-dark-mode");
}

btn.onclick = function () {
	darkMode = localStorage.getItem("darkMode");
	if (darkMode !== "enable") {
		enable();
		console.log(darkMode);
	} else {
		disabled();
		console.log(darkMode);
	}
};

let sideMenuBtn = document.querySelector(".side-menu-btn");
let sideMenu = document.querySelector(".side-menu");

sideMenuBtn.onclick = function () {
	sideMenu.classList.toggle("show-side");
};

// add sales
let add = document.querySelector(".add-sales");
num = 1;

function addsale() {
	num++;
	let newSales = `<div class="sales">
		<div class="group-form">
			<label for="category">المنتج</label>
			<select id="products" name="products">
				<option value="default" selected disabled>
					-- اختر منتج --
				</option>
	
				<option value="nabil">nabil</option>
				<option value="alaa">alaa</option>
				<option value="cool">cool</option>
				<option value="tadros">tadros</option>
			</select>
		</div>
		<div class="group-form">
			<label for="quantity">الكمية</label>
			<input
				id="quantity"
				type="number"
				name="quantity"
				data-total="#total${num}"
				data-price="#price${num}"
			/>
		</div>
		<div class="group-form">
			<label for="price">سعر البيع</label>
			<input id="price${num}" type="number" name="price" :value="name"/>
		</div>
		<div class="group-form">
			<label for="total">المجموع</label>
			<input id="total${num}" type="number" name="total" />
		</div>
		<a @Click="test" class="add-sales remove-items">حذف</a>
	</div>`;

	document.getElementById("demo").insertAdjacentHTML("beforeend", newSales);

	let quantity = document.querySelectorAll("#quantity"),
		ftotal = document.getElementById("final-total");

	quantity.forEach((q) => {
		q.onkeyup = function () {
			let total = document.querySelector(q.dataset.total);
			let price = document.querySelector(q.dataset.price);
			console.log(total);
			console.log(price);
			console.log(price.value * q.value);
			total.value = price.value * q.value;
			let listTotal = document.getElementsByName("total");
			console.log(listTotal);
			let list = [];
			listTotal.forEach((ele) => {
				list.push(ele.value);
				ftotal.value = d3.sum(list);
				console.log(d3.sum(list));
				// Math.sum;
			});
		};
	});
	if (localStorage.getItem("darkMode") === "enable") {
		document.querySelectorAll("input").forEach((ele) => {
			ele.classList.add("dark-mode");
		});
		document.querySelectorAll("select").forEach((ele) => {
			ele.classList.add("dark-mode");
		});
	} else {
		document.querySelectorAll("input").forEach((ele) => {
			ele.classList.remove("dark-mode");
		});
		document.querySelectorAll("select").forEach((ele) => {
			ele.classList.remove("dark-mode");
		});
	}
	if (document.getElementById("demo").children.length != 0) {
		document.querySelectorAll(".remove-items").forEach((e) => {
			e.onclick = function () {
				e.parentElement.style.display = "none";
			};
		});
	}
	// document.getElementById("demo").childElementCount;
	// // console.log(document.getElementById("demo").childElementCount);
	// for (let i = 0; i < document.getElementById("demo").childElementCount; i++) {
	// 	document.getElementById("demo").innerHTML = localStorage.getItem("demo");
	// 	console.log(i);9
	// }
		localStorage.setItem("demo", document.getElementById("demo").innerHTML);
}

console.log(location.href);
add.addEventListener("click", addsale);
if (localStorage.getItem("demo")) {
	console.log("ss");
	if (location.href == "http://127.0.0.1:5500/add-sales.html") {
		document.getElementById("demo").innerHTML = localStorage.getItem("demo");
	} else {
		localStorage.removeItem("demo");
	}
}
let quantity = document.querySelectorAll("#quantity"),
	ftotal = document.getElementById("final-total");

quantity.forEach((q) => {
	q.onkeyup = function () {
		let total = document.querySelector(q.dataset.total);
		let price = document.querySelector(q.dataset.price);
		let ftotal = document.querySelector("#final-total");

		console.log(total);
		console.log(price);
		console.log(price.value * q.value);
		total.value = price.value * q.value;
		ftotal.value = price.value * q.value;
	};
});

// console.log(document.getElementById("demo").children.length);
