---
title: CSS Styles Positioning Basics
date: "2021-10-06"
---

With CSS, getting the layout right is a basic tenet. A great place to start is by understanding what the position value means and how it arranges the elements on a page. 

To start with, there are five basic options for the positon element. Here they are:

1. Static
2. Fixed
3. Absolute
4. Relative
5. Inherit

## Static

All block level element on a web page are by default, statically positioned. 

Statically positioned elements can't be moved around with attributes like top, bottom, left or right. But fixed, absolute, and relative positioned elements can all be moved around with those attributes. So what is the difference between those three?

Let's start with fixed positioned elements. When an element is given the fixed position, then it no longer fills the normal flow of the document and instead is 'positioned' according to the root element or body tag of the html document.

If you were to give the fixed position element a top or a bottom attribute, it would then be oriented that many pixels from the top of the document or the bottom of the document.

Compare that to the absolute positioned element. Although the absolute positioned element is also moved around by the top, bottom, left, and right attributes, it is oriented according to the nearest parent element that has a relative position. So, the first parent element that has a position of relative provides the container that the absolutely positioned element will coordinate to.

When top, left, bottom or right is applied to an absolutely positioned element, that means top, left, bottom or right in relation to the nearest parent element that has a position of relative. It also is removed from the normal document flow. That means that any div or tag surrounding the absolutely positioned element now acts as though the absolutely positioned element doesn't exist in the document flow.

The absolutely positioned element no longer 'takes up space'.

This position might be the hardest to grok right away. And it's the one that can get the most confusing when found in the wild. And that is because with deeply nested elements you might be hunting for a while for the nearest parent element that has a relative position.

So this goes hand in hand with talking about the relatively positioned element. The relatively positioned element can be moved according to the top, bottom, left and right attributes. The relatively positioned element moves in those directions from where it would have been displayed originally on the document.

And the relatively positioned element provides a context for the children if they decide to be absolutely positioned. (UhUm.. I mean if the developer decides the element should be absolutely positioned.). But while the relatively positioned elements isn't outside of the normal document flow, moving it around doesn't directly affect any of the children element. 

For example, if you move a relatively positioned element 15px to the left, it won't cause any of the div's following that element to be moved. They all remain however they were before the move.