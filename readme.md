
# What is the DOM

* Describe the DOM in three words.

What have you used the DOM for?

	*  What have you done with the DOM?

Create a Widget

Create a Widget that allows a user to enter a registration number 
for Bellville, Paarl & Cape Town and that then displays them on 
the screen next to each other.

Ensure a registration number can only be added to the screen once. And also allow a user to filter registration numbers per town.

* How would you approach this?
* What do you know how to do? 
* Anything that you don't know how to get done?

## How can registration numbers be added to the DOM?

* Use the `createElement` function
	* document.createElement
	* To create a new DOM element

* Once an element is created
	* It's like any DOM element
	* styling can be added to is using `classList`
	* even events
	* It can be added to the DOM

* Add it to the DOM using:
	* element.prependChild
	* element.appendChild


## How to filter & keep it unique:

* To keep unique:
	* use a list
	* check if the current reg number is in the list using `includes`
	* only add it if it's not already in the list

* To filter data
* 
	* to filter - loop over the list and find all the ones matching
	* display only the ones matching the criteria
	* decouple display from the data.

*  Create some functions to put the data on the screen.


So to add elements to the screen dynamicallyuse:

* `document.createElement`
* `document.appendChild`

## Using templates

But what if there was a better way to merge HTML & data.

An easier way to combine data & HTML...

Data + HTML = Data and HTML combined.

Low and behold there is a way.

It's called templating...

What is a template?
What is a CV template?
How do one use it?

## Handlebars

We will look into HandlebarsJS

Lets' look at a simple template.

```
Dear {firstName},

The {{bookCount}} books you took out at the library is due in {{dayCount}} days.

Please return these books to us in the next {{dayCount}} days.
```

* What is this template all about?
* What data does this template need?

We will look into:

* how to setup a template
* and how to use it


The steps:

* create a template in a script tag
* get a reference to the template element
* get the string value inside the script tag
* Compile the template once using `Handlebars.compile`
* Use the compiled template instance - send data into it.
* Get a result back
* Append the results to the DOM

Change your registration numbers exercise to use Handlebars instead of `createElement`.

How would you approach that?
