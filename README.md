clickable.js - Seamless buttons for mobile devices
==================================================

Writing button controllers based around touch events is a bit of a mess on mobile devices. Desktop browser have a simple "click" event and corresponding ":active" CSS selector for downstates. We seek to simplify the mobile experience by providing a very similar interface.

Some of the other benefits of this library include overcoming the arbitrary wait times on click events (300ms on iOS) and using the exact same JavaScript event binding for desktop & mobile.

clickable.js also provides convenient bindings for ZeptoJS and jQuery to make the development process as seamless as possible.


Links
-----

[Download script (v1.1.0 minified)](http://cdn.kik.com/clickable/1.1.0/clickable.js)

[View demo](http://code.kik.com/clickable/demos/basic.html)


Usage with ZeptoJS or jQuery
----------------------------

### Make elements clickable

```js
$('#my-element').clickable();
```


### Bind to click events

```js
$('#my-element').on('click', function () {
	// fired on click
});
```


### Sticky buttons

```js
$('#my-element').stickyClick(function (unstick) {
	// do something async
	unstick();
	
	// button will remain in downstate
	// until unstick is called
});
```


### Setting downstate styles

```css
#my-element        { /* normal    styles */ }
#my-element.active { /* downstate styles */ }
```


### Alternate downstate classes

There is an optional parameter to set the downstate class to something other than "active".

```js
$('#my-element').clickable('mydownstate');
```

```css
#my-element             { /* normal    styles */ }
#my-element.mydownstate { /* downstate styles */ }
```


### Disable / enable buttons

```js
// disable
$('#my-element').prop('disabled', true);

// enable
$('#my-element').prop('disabled', false);
```




Standalone Usage
----------------

clickable.js has no external dependencies and will work perfectly fine as a standalone library.


### Make elements clickable

```js
Clickable(element);
```


### Bind to click events

```js
element.addEventListener('click', function () {
	// fired on click
}, false);
```


### Sticky buttons

```js
Clickable.sticky(element, function (unstick) {
	// do something async
	unstick();
});
```


### Alternate downstate classes

```js
Clickable(element, 'mydownstate');
```


### Disable / enable buttons

```js
// disable
element.disabled = true;

// enable
element.disabled = false;
```
