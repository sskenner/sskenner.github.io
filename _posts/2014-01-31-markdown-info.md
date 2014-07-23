---
layout: post
title: markup with markdown*
---

{{ page.title }}
================

<p class="meta">31 jan 2014</p>

`::: markdown info :::`

**Markdown** is a way to write content for the web. It\'s written in what nerds like to call _plaintext_, which is exactly the sort of text we\'re used to writing and seeing.

Here is a link to a very helpful interactive tutorial regarding: 
[markdown interactive tut](http://markdowntutorial.com/)

`::: my markdown cheatsheet :::`   _as per Adam Pritchards_ [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

* **Headers**
  * Hashtags style  
    `# H1` - _largest_  
    `## H2`  
    `### H3`  
    `#### H4`  
    `##### H5`  
    `###### H6` - _smallest_  
<!-- why no blank line -->
<!-- START HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

* **Emphasis**
  * Emphasis, aka _italics_: `*asterisks*` or `_underscores_`
  * Strong emphasis, aka **bold**: `**asterisks**` or `__underscores__`
  * Combined emphasis with **_asterisks_ and _underscores_**: `**_asterisks_ and _underscores_**`

* **Lists**  
  * Ordered  
  WYSIWYG plus trailing spaces and blank lines
  
  `1. First ordered list item`  
  `2. Another item`  
  `__* Unordered sub-list.`  
  `1. Any number will do`    
  `__1. Ordered sub-list`  
  `4. And another item.`
  
  * Unordered  
  `*` asterisks, `-` minuses & `+` pluses

* **Links**
  * [an inline-style link]( 
http://sskenner.github.io)  
  `[an inline-style link]( 
http://sskenner.github.io)`
  * [an inline-style link with title](https://www.google.com "Google's Homepage")  
  `[an inline-style link with title](https://www.google.com "Google's Homepage")`

  * [a reference-style link][Arbitrary case-insensitive reference text]  
  `[a reference-style link][Arbitrary case-insensitive reference text]`
<!-- why doesnt the relative reference work?
  * [a relative reference to a repository file](../blob/master/_posts/2014-01-14-unix-fu.md)  
  `[a relative reference to a repository file](../blob/master/_posts/2014-01-14-unix-fu.md)`
-->
  * [can use numbers for reference-style link definitions][1]  
  `[can use numbers for reference-style link definitions][1]`

  * Or leave it empty and use the [link text itself]  
  `Or leave it empty and use the [link text itself]`

  * text to show that the reference links can follow later:    
[1]:http://daringfireball.net/projects/markdown/syntax#link  
`[1]: http://daringfireball.net/projects/markdown/syntax#link`
* **Images**  
   
  * inline image:  (_hover over image to see title text_)  
  `![an inline images alt text](http://image.URL.com/image-name.jpg)`  
  ![alt text](http://worldsoforos.com/secondviews/wp-content/uploads/2008/04/The-Matrix-Logo-150x150.gif "maxtrix code map")  

  * reference image:  
  `![a reference images alt text][2]`  
  `\n`  
  `[2]: http://image.URL.com/image-name.jpg`

<!-- -->
<!-- notes: -->

<!-- why dont headers work? -->

<!-- how to put space before Imanges bullet and rmv after? -->

<!-- why doesnt block quote example work? -->
<!-- 
> Lorizzle stuff fo shizzle sit dang, pot adipiscing fo shizzle. Fo shizzle sapizzle velit, owned volutpat, suscipizzle quis, gravida vizzle, arcu. Gangster izzle gangsta.
```
> Lorizzle stuff fo shizzle sit dang, pot adipiscing fo shizzle. Fo shizzle sapizzle velit, owned volutpat, suscipizzle quis, gravida vizzle, arcu. Gangster izzle gangsta.
``` 
-->

<!-- why is it rendering w extra spaces? -->
<!-- * Combined emphasis with **_asterisks_ and _underscores_**: `**_asterisks_ and _underscores_**` -->

<!-- * Strikethrough with ~~two tildes~~: `~~two tildes~~` ?? -->