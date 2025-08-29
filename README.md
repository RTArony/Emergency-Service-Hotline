Question 01: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementById selects only one element with its unique id and returns that single element. getElementsByClassName selects all the elements under a certain class and returns a HTMLcollection.So we need indexing to access its elements. querySelector uses CSS selector to select one single element and returns it. It returns the very fast element that matches with the CSS selector. querySelectorAll also uses CSS selector but it selects all the elements that matches. So it returns a Nodelist carrying all the elements. 


Question 02: How do you create and insert a new element into the DOM?
Ans:Here are few steps to do that-
1.Creating a new element with createElement:
const callHistoryName= document.createElement('h3')
2.setting its text value with innerText:
callHistoryName.innerText=serviceName
3.accessing the parent where the new element will be added with getElementById:
const callHistoryContainer =document.getElementById("history-container")
4.Appending the new element with parent by appendChild:
callHistoryContainer.appendChild(callHistoryName)
5. Adding any class with for styling the new element:
callHistoryName.classList.add('callHistoryName')
Besides we can also use innerHTML to write directly HTML in js file and append that with parent.


Question 03: What is Event Bubbling and how does it work?
Ans:Event bubbling is a concept in the DOM where an event starts from the target element and then bubbles up through its ancestors.Mainly event flowing from child to its ancestor is event bubbling. The work flow is like travelling through a tree. when clicked on button,event will propagrate to its div parent and then to the section and then to body and finally to its HTML document. Every ancestor will have the access of that event. 


Question 04: What is Event Delegation in JavaScript? Why is it useful?
Ans:Attaching a single event listener to a parent element and lettting event bubbling handle events that happen on its child elements. Instead of adding listeners to each child, we can use one listener on the parent and detect which child triggered the event.Event Delegation uses event bubbling by listening to parent and checking event.target to know which child was clicked.It is super useful when working with lists, tables, forms, dynamic UI elements.It helps to improve performance and write cleaner codes.Also we can add elements dynamically with the help of it. 


Question 05: What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault() stops the default behavior of an element from happening but it does not stop event bubbling/propagation whereas stopPropagation() stops the event from bubbling further up/down the DOM tree but it does not stop the default behavior.