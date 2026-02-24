1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

As id is unique and can't be used again in another element, getElementById selects only one element. But as class can be repeated, getElementByClassName selects all those elements which contains this class.

Similar to getElementById, querySelector selects only one element which is at the top but CSS class name can be used here. And querySelectorAll selects all element containing that class name. But both querySelector and querySelectorAll are static, so when a job card is moved from All to Interview it will lose track.


2. How do you create and insert a new element into the DOM?

After creating an element by document.createElement(""), we have to insert the new element by appending that element. 

<div id="section"></div>

<script>
const newElement = document.createElement("h1");
const existingDiv = document.getElementById("section");
existingDiv.appendChild(newElement);
</script>


3. What is Event Bubbling? And how does it work?


