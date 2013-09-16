/*! sticky-right-top-icon - 0.0.0 built on 2013-09-15
author: Gleb Bahmutov <gleb.bahmutov@gmail.com>, support: @bahmutov */

/*jshint unused: false*/

/**
  Adds and 'icon' to the right top corner of the given element.
  The icon is sticky, even if the element has scrollable content.

  @example

    var $icon = addTopRightIcon($('.scroll-view'));

    // customize $icon as desired, for example by adding class
    // or modifying CSS
    $icon.addClass('icon');
    $icon.css('right', '18px');
*/
function addTopRightIcon($el) {
  var $wrapper = $('<div class="top-right-wrapper"></div>');
  $wrapper.width($el.width());
  $wrapper.height($el.height());
  $el.wrap($wrapper);

  var $icon = $('<span class="top-right-icon"></span>');
  $el.before($icon);

  return $icon;
}