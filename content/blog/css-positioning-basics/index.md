---
title: CSS Styles Positioning Basics
date: "2021-10-06"
---

With CSS, getting the layout right if the first step is a well designed website. Understanding CSS layout begins with understanding position values. Styling with position allows the elements to be arranged on a web page. 

To start with, there are five basic options for the positon element. Here they are:

1. Static
2. Fixed
3. Absolute
4. Relative
5. Inherit

## Static

All block level element on a web page are static positioned by default. Statically positioned elements flow in a way that is similar to how documents flow. The elements fill in the space at the top and as elements are added they flow down the screen. The div, article, and p elements are great examples of this. They take up the full width of the page and only the height needed. And as each of them are added they flow down the page in a consistent manner.

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS Demo: Static block elements" src="https://codepen.io/pattee/embed/jOGapBM?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/pattee/pen/jOGapBM">
  CSS Demo: Static block elements</a> by Pattee Green (<a href="https://codepen.io/pattee">@pattee</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Statically positioned elements can't be arranged with other CSS styles. A statically positioned element can't effectively use any of the attributes like left, bottom, top, or right. If a left: 150px styles is applied to a static element it just sits there. Statically positioned element provide the 'normal document' control that is default.

## Relative

Relatively positioned elements provide a way for CSS to arrange themselves and their child elements around on the page. Child elements are any elements nested within a parent element.

When CSS styles of left, right, top, or bottom are applied the element that adds space to move it from where it was originally positioned. They are _relatively_ positioned from their original place in the document flow.

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS Demo: Relatively positioned elements" src="https://codepen.io/pattee/embed/ExwbpvE?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/pattee/pen/ExwbpvE">
  CSS Demo: Relatively positioned elements</a> by Pattee Green (<a href="https://codepen.io/pattee">@pattee</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Fixed 

Fixed elements are positioned relative to the document body or the screen itself and not to the parent element. They aren't relative to to their original position, but instead _relate_ to the screen itself. When the browser scrolls or moves they element will stay in place while everything else around it moves. Fixed elements can be positioned with the left, top, bottom, or right styles.  

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/pattee/embed/wvrPxrK?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/pattee/pen/wvrPxrK">
  Untitled</a> by Pattee Green (<a href="https://codepen.io/pattee">@pattee</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Absolute

Absolutely positioned element are positioned relative to the nearest _relatively positioned_ parent element. That's an imporant point. The absolutely postioned element uses the nearest parent element that is relatively positioned. That nearest parent with relative position provides the coordinate system for their position. 

What is a coordinate system? The coordinate system affects how the CSS values of top, left, right, and bottom will control the element. The parent element provides a container that serves as a x, y coordinate system for the absolutely positioned element.

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/pattee/embed/JjrOBLm?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/pattee/pen/JjrOBLm">
  Untitled</a> by Pattee Green (<a href="https://codepen.io/pattee">@pattee</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Inherit

All inherit CSS styles causes the element to take on the calculated position value of it's parent element. The inherit value can be applied to any CSS key value and not just the position property. And when inherit is applied to the position property it acts the same say as inherit does for any style. The style is applied from the nearest parent element.

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS Demo: Absolutely positioned element" src="https://codepen.io/pattee/embed/VwMrBdN?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/pattee/pen/VwMrBdN">
  CSS Demo: Absolutely positioned element</a> by Pattee Green (<a href="https://codepen.io/pattee">@pattee</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

