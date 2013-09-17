# sticky-right-top-icon

Sticky right top icon for any element, even scrollable. See in action
on [jsfiddle](http://jsfiddle.net/gleb_bahmutov/r4MEx/2/)

Available on *bower* under name **sticky-right-top-icon**.
Requires **jQuery**

## Usage

Include CSS and JS files.

```html
<link rel="stylesheet" href="sticky-right-top-icon.css" />
<script src="http://code.jquery.com/jquery-2.0.2.min.js"></script>
<script src="sticky-right-top-icon.js"></script>
```

then add an icon:

```javascript
var $icon = addTopRightIcon($('.scroll-view'));

// customize $icon as desired, for example by adding class
// or modifying CSS
$icon.addClass('icon');
$icon.css('right', '18px');
```

### Fine print

Developed on [bitbucket](https://bitbucket.org/bahmutov/sticky-right-top-icon), distributed through [github](https://github.com/bahmutov/sticky-right-top-icon).

Author: Gleb Bahmutov <gleb.bahmutov@gmail.com>
License: MIT
Copyright &copy; 2013 Gleb Bahmutov