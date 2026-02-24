1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

As id is unique and can't be used again in another element, getElementById selects only one element. But as class can be repeated, getElementByClassName selects all those elements which contains this class.

Similar to getElementById, querySelector selects only one element which is at the top but CSS class name, and element name can be used here also. And querySelectorAll selects all element containing that class and element name. But both querySelector and querySelectorAll are static, so when a job card is moved from All to Interview it will lose track.


2. How do you create and insert a new element into the DOM?

After creating an element by document.createElement(""), we have to insert the new element by appending that element. 

<div id="section"></div>

<script>
const newElement = document.createElement("h1");
const existingDiv = document.getElementById("section");
existingDiv.appendChild(newElement);
</script>


3. What is Event Bubbling? And how does it work?

If an event is placed inside the body, and if there is a button inside the body, even if only the button is clicked, it will trigger the body event also. This is Event bubbling.

4. What is Event Delegation in JavaScript? Why is it useful?

Rather than using add.eventListener to every child, one event.target.classList can be added to the parent element so whichever child is triggered it will work and later on if more child is added it will be still functional.

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() prevents event from triggering its default actions like leading to links or refreshing page, but stopPropagation only stops the event to bubble to its parent element.







