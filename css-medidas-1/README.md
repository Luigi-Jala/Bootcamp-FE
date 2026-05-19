# CSS Length Units differences

In CSS, the length units represent a distance value. They consist on a number followed by a value. For example: `10px`, `2em`, etc.

## Fractional `fr`
Is a length unit designed to be used in grid layouts. It represents a fraction of the available space within a container after all other fixed size elements have been placed.

Defining multiple `fr` values in the same row/column will cause a that each value to share its space proportionally. For example defining columns `1fr` and `2fr` means that the second column will be twice wider than the first one.


## Root em `rem`
It's a relative length unit that represents the font-size of the root element (usually `<html>` eelment). In most browsers, the default root font size is 16px, in these cases `1rem = 16px`.

If the root font size is chaned, all elements using rem will would scale proportionally. Useful when a user changes their browser's font size for accessibility and to scale widths relative to this value.


## Viewport height `vh`
It's a relative length unit that represents 1% of the height of the browser's viewport (the visible area of the window).

Setting a height to 100vh ensures a container fills the full screen regardless od the device. If the window is resized, the element automatically scales.


## Dynamic Viewport height `dvh`
It's a relative length unit that represents 1% of the height of the dynamic viewport height. It recalculates its value when browser UI elements like navigation or toolbars expand or retract.

If a navbar resizes with scrolling or other event, elements with 100dvh will grow to fill the new available space.