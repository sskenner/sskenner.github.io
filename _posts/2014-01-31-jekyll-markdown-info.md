---
layout: post
comments: true
title: markup jekyll with markdown*
---

{{ page.title }}
================

<p class="meta">31 jan 2014</p>

`::: my jekyll markdown cheatsheet* :::`  

**Markdown** is a way to write content for the web. It\'s written in what nerds like to call _plaintext_, which is exactly the sort of text we\'re used to writing and seeing.

<!-- why dont headers work? -->

* **Headers**

  * Hashtags style  
    `# H1` - _largest_  
    `## H2`  
    `### H3`  
    `#### H4`  
    `##### H5`  
    `###### H6` - _smallest_    

* **Emphasis**

  * Emphasis, aka _italics_: `*asterisks*` or `_underscores_`
  * Strong emphasis, aka **bold**: `**asterisks**` or `__underscores__`
  * Combined emphasis with **_asterisks_ and _underscores_**:  
  `**_asterisks_ and _underscores_**`

* **Lists**

  * Ordered  
  WYSIWYG  
  `1. First ordered list item`  
  `2. Another item`  
  `--* Unordered sub-list.`  
  `1. Any number will do`    
  `--1. Ordered sub-list`  
  `4. And another item.`
  
  * Unordered  
  `*` asterisks, `-` minuses & `+` pluses  

    1. First ordered list item
    2. Another item
      * Unordered sub-list.
    1. Any number will do
      1. Ordered sub-list
    4. And another item.

      Some text that should be aligned with the above item.

    * Unordered list can use asterisks
    - Or minuses
    + Or pluses


* **Links**

  * [an inline-style link](http://sskenner.github.io)  
  `[an inline-style link](http://sskenner.github.io)`
  
  * [an inline-style link with title](https://www.google.com "Homepage")  
  `[an inline-style link with title](https://www.google.com "Homepage")`

  * [a reference-style link][Arbitrary case-insensitive reference text]  
  `[a reference-style link][Arbitrary case-insensitive reference text]`  
  `[Arbitrary case-insensitive reference text]: https://google.com`  

  * [can use numbers for reference-style link definitions][1]  
  `[can use numbers for reference-style link definitions][1]`

  * Or leave it empty and use the [link text itself]  
  `[link text itself]`  
  `[link text itself]: http://daringfireball.net/`  

  * text to show that the reference links can follow anywhere after reference-style number link  
  `[1]: http://daringfireball.net/projects/markdown/syntax#link`  

[Arbitrary case-insensitive reference text]: https://google.com
[1]: http://daringfireball.net/projects/markdown/syntax#link
[link text itself]: http://daringfireball.net/

* **Images**
  * inline image:  (_hover over image to see title text_)  
  `![an inline images alt text](http://image.URL.com/image-name.jpg)`  
  ![alt text](http://worldsoforos.com/secondviews/wp-content/uploads/2008/04/The-Matrix-Logo-150x150.gif "maxtrix code map")  

  * reference image:  
  `![a reference images alt text][2]`  
  `\n`  
  `[2]: http://image.URL.com/image-name.jpg`

* **Code and Syntax Highlighting**    
  * Code    
  Inline `code` has `back-ticks around` it.  
  <code>Inline `code` has `back-ticks` around it.</code>
  
<!-- START AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII-->
<!-- START AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII-->

* **Syntax Highlighting**

    _note_: code snippet hightlighting seems to be blogging platform specific. For Jekyll,as per [Dmitri Moore\'s](https://github.com/demisx "demisx") blog post, entitled [Improve Code Highlighting in a Jekyll-based Blog Site](http://demisx.github.io/jekyll/2014/01/13/improve-code-highlighting-in-jekyll.html "Born-again Rubyist"), an option would be _via addition of custom CSS rules_. Can be done using the following steps:

  * Add [syntax highlighter CSS file](https://github.com/mojombo/tpw/blob/master/css/syntax.css) as `css/syntax.css` to your Jekyll site  
  * Load CSS `<link href="/css/syntax.css" rel="stylesheet">` inside of the corresponding layout file (e.g. _layouts/default.html) between the `<head>` tags  
<!-- how to escape brackets -->

  * Wrap code snippets in posts with `<left brace>% highlight ruby linenos %<right brace>...<left brace>% endhighlight %<right brace>` Liquid tags  

  yields:

<!-- why doesnt pretty line nums work? -->

{% highlight ruby linenos %}  
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html

def show
  puts "Outputting a very lo-o-o-o-o-o-o-o-o-o-o-o-ong lo-o-o-o-o-o-o-o-o-o-o-ong line"
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
{% endhighlight %}  
  


Also, here is a link to a very helpful interactive tutorial regarding: 
[markdown interactive tut](http://markdowntutorial.com/)

\-\-\-  
\*_extrapolated from Adam Pritchard\'s_ [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)  

<!-- -->
<!-- notes: -->

<!-- why doesnt block quote example work? -->
<!-- 
* **Blockqoutes**
> Lorizzle stuff fo shizzle sit dang, pot adipiscing fo shizzle. Fo shizzle sapizzle velit, owned volutpat, suscipizzle quis, gravida vizzle, arcu. Gangster izzle gangsta.
> Lorizzle stuff fo shizzle sit dang, pot adipiscing fo shizzle. Fo shizzle sapizzle velit, owned volutpat, suscipizzle quis, gravida vizzle, arcu. Gangster izzle gangsta.
-->

<!-- why is it rendering w extra spaces? -->
<!-- * Combined emphasis with **_asterisks_ and _underscores_**: `**_asterisks_ and _underscores_**` -->

<!-- * Strikethrough with ~~two tildes~~: `~~two tildes~~` ?? -->

<!--
  why doesnt the relative reference work?
  * [a relative reference to a repository file](../blob/master/_posts/2014-01-14-unix-fu.md)
  `[a relative reference to a repository file](../blob/master/_posts/2014-01-14-unix-fu.md)`
-->