// Vanilla JavaScript DOM Challenges //

// BEGINNER CHALLENGES //

// 1. Create a div (don’t put it in the DOM yet).

// 2. Add a class of "boxy" to that div.

// 3. Add two paragraphs of text to that div with the text of your choosing.

// 4. Insert the div into the DOM just after the h1.

// 5. Add a third paragraph to the div after it’s in the DOM.
const div1 = document.createElement("div");
div1.id = "dd";

div1.setAttribute("class", "boxy");
const h1 = document.querySelector("h1");

const p2 = `<p>hi there </p> <p>hi there 2 </p>`;
div1.innerHTML = p2;

// for (let i = 0; i<2;i++){
// 	const p = document.createElement('p');
//    p.textContent = `its a paragraph`
//   p2.push(p);
// 	console.log(p2)
// }
//  div1.append(...p2);

h1.append(div1);
const dd = document.querySelector("#dd");
dd.insertAdjacentHTML("beforeend", `<p>mm</p>`);

// BEGINNER+ CHALLENGES //

// 1. Add an unordered sublist to the last list item with three children ("one", "two", and "three").
const listItems = document.querySelectorAll(".list-item");
console.log();
listItems[listItems.length-1].insertAdjacentHTML(
	"beforeend",
	`
	<ul>
	<li>one</li>
	<li>two</li>
	<li>three</li>

	</ul>
	`
);
// 2. Add a paragraph after the list of items with a class of "glow."
const list = document.querySelector('.list')
const pe = document.createElement('p');
pe.setAttribute('class', 'glow'); 
pe.textContent = "yes new paragraph"
list.insertAdjacentElement('afterend', pe)
// 3. Remove a card when its button is clicked.
const card = document.querySelector('.card__btn')
function onCardRemove(e){
e.currentTarget.parentElement.remove();
}
card.forEach((btn)=> {
	btn.addEventListener("click",onCardRemove) 
});
// 4. Change the event listener to the following Toggle the class "glow" to the image when you click the card’s button.

// 5. Change the event listener to the following. Change the title of all other cards to "Jealous 👀" when you click on a card’s button. (BONUS: Change the title of the card that was clicked to "I’m the greatest!")

//INTERMEDIATE CHALLENGES//

// 1. Append a button below the card-container that says "Add more cards" (it should have the class "btn").

// 2. Create a function that generates a new card when clicked (you can copy current HTML code) and places it as the last card in the card container (BONUS: Set the query parameter of the image and the id of the image to its card number).

// 3. Create a function that adds cards but receives two parameters: title and description. When invoked, the function should create a new card with those parameters as the title (the h2 text) and description (the paragraph text) of the card. Create 3 new cards from the JavaScript file (i.e., upon page load)

// 4. Removes a card from the DOM only when a card image is clicked. (BONUS: Make it work on new cards added to the DOM.)

// 5. Create and insert a button that says "Change Color Scheme" (ensure the button has a class of 'btn') that changes the css variable --_hue to a random number between 0 and 360 when clicked.
