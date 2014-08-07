---
layout: post
comments: true
title: markup jekyll with markdown
---

<h3>{{ page.title }}</h3>

<p class="meta">31 jan 2014</p>

`::: my jekyll markdown cheatsheet* :::`  

**Markdown** is a way to write content for the web. It\'s written in what nerds like to call _plaintext_, which is exactly the sort of text we\'re used to writing and seeing.

---
* **Headers**
  * Hashtags style _code be like:_  
    `# H1` - _largest_  
    `## H2`  
    `### H3`  
    `#### H4`  
    `##### H5`  
    `###### H6` - _smallest_  
  * _Code renders like:_
    <h1>H1 - _largest_</h1>  
    <h2>H2</h2>  
    <h3>H3</h3>  
    <h4>H4</h4>  
    <h3>H5</h3>  
    <h6>H6 - _smallest_</h6>  

---
* **Lists**
  * _Code be like:_
    * Ordered  
        `1. First ordered list item`  
        `2. Another item`  
        `--* Unordered sub-list.`  
        `1. Any number will do`  
        `--1. Ordered sub-list`  
        `4. And another item.`
    * Unordered  
      `*` asterisks, `-` minuses & `+` pluses  
  * _Looks like:_
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

---
* **Emphasis**
  * Emphasis, aka _italics_: `*asterisks*` or `_underscores_`
  * Strong emphasis, aka **bold**: `**asterisks**` or `__underscores__`
  * Combined emphasis with **_asterisks_ and _underscores_**:  
    `**_asterisks_ and _underscores_**`

---
* **Links**
  * [an inline-style link](http://sskenner.github.io)  
    `[an inline-style link](http://sskenner.github.io)`
  * [an inline-style link with title](https://www.google.com "Google")  
    `[an inline-style link with title](https://www.google.com "Google")`
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

---
* **Images**
  * inline image: (_hover over image to see title text_)  
    `![an inline images alt text](http://image.URL.com/image-name.jpg)`  
    ![alt text](http://worldsoforos.com/secondviews/wp-content/uploads/2008/04/The-Matrix-Logo-150x150.gif "maxtrix code map")
  * reference image:  
    `![a reference images alt text][2]`  
    `\n`  
    `[2]: http://image.URL.com/image-name.jpg`

---
* **Code**       
  * Inline `code` has `back-ticks around` it.  
    <code>Inline `code` has `back-ticks` around it.</code>

---  
* **Syntax Highlighting**  
_\>> note \>>_ it seems like code snippet hightlighting is  platform specific. For Jekyll, as per [Dmitri Moore\'s](https://github.com/demisx "demisx") blog post entitled [Improve Code Highlighting in a Jekyll-based Blog Site](http://demisx.github.io/jekyll/2014/01/13/improve-code-highlighting-in-jekyll.html "Born-again Rubyist"), an option would be _via addition of custom CSS rules_ using the following steps:
  1. Add [syntax highlighter CSS file](https://github.com/mojombo/tpw/blob/master/css/syntax.css) as `css/syntax.css` to your Jekyll site
  2. Load CSS `<link href="/css/syntax.css" rel="stylesheet">` inside of the corresponding layout file (e.g. _layouts/default.html) between the `<head>` tags
<!-- ?????????????? how to escape brackets ???????????? -->
  3. Wrap code snippets in posts with `<left brace>% highlight ruby linenos %<right brace>...<left brace>% endhighlight %<right brace>` Liquid tags  
<!-- why doesnt pretty line nums work? -->
  - {% highlight ruby linenos %}  
    require 'redcarpet'
    
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html

def show
  puts "Outputting a very lo-o-o-o-o-o-o-o-o-o-o-o-ong lo-
  o-o-o-o-o-o-o-o-o-o-ong line"
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
    {% endhighlight %}  

---
* **Tables**
  * _Code be like:_
    * `First Header  | Second Header`  
      `------------ | -------------`  
      `Content Cell  | Content Cell`  
      `Content Cell  | Content Cell`  

      `| Tables        | Are           | Cool  |`  
      `| ------------- |:-------------:| -----:|`  
      `| col 3 is      | right-aligned | $1600 |`  
      `| col 2 is      | centered      |   $12 |`  
      `| zebra stripes | are neat      |    $1 |`  

      `Markdown | Less | Pretty`  
      `--- | --- | ---`  
      `*Still* | ``renders`` | **nicely**`  
      `1 | 2 | 3`  
  
  * _Looks like:_  
    * First Header  | Second Header
      ------------- | -------------
      Content Cell  | Content Cell
      Content Cell  | Content Cell

      | Tables        | Are           | Cool       |
      | ------------- |:-------------:| ----------:|
      | col 3 is      | right-aligned | stuff      |
      | col 2 is      | centered      | more stuff |
      | col 1 is      | left-aligned  | less stuff |

      Markdown | Less | Pretty
      --- | --- | ---
      *Still* | `renders` | **nicely**
      1 | 2 | 3  

---
* **Blockqoutes**  
  * _Code be like:_  
    * {% highlight ruby linenos %} 
    > Lorizzle stuff fo shizzle sit dang, pot adipiscing fo 
  shizzle. Fo shizzle sapizzle velit, owned volutpat, 
  quis, gravida vizzle, arcu. Gangster izzle gangsta.

  Quote break.

  > Lorizzle stuff fo shizzle sit dang, pot adipiscing fo.
      {% endhighlight %}  

  * _Code renders like:_
    
    > Lorizzle stuff fo shizzle sit dang, pot adipiscing fo shizzle. Fo shizzle sapizzle velit, owned volutpat, quis, gravida vizzle, arcu. Gangster izzle gangsta.
  
    Quote break.

    > Lorizzle stuff fo shizzle sit dang, pot adipiscing fo shizzle.

---
* **Horizontal Rule**
  * _Code be like:_  
    * {% highlight ruby linenos %} 
---
Hyphens
***
Asteriks
___
Undersscores
    {% endhighlight %} 

  * _Code renders like:_
  
      ---  
      Hyphens
        
      ***
      Asteriks
      
      ___  
      Undersscores

---
* **Line Breaks**  
  * _Code be like:_
    * {% highlight ruby linenos %}
This is the first line.  

This line is separated from the one above by two newlines, 
so it will be a *separate paragraph*.

This line is also a separate paragraph, but...
This line is only separated by a single newline, so it is 
a separate line in the *same paragraph*.
    {% endhighlight %}

  * _Code renders like:_  

      This is the first line.

      This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

      This line is also a separate paragraph, but\...
      This line is only separated by a single newline, so it is a separate line in the *same paragraph*.

---
* **Youtube videos**
  * _Code be like:_
{% highlight ruby linenos %}
<a href="http://www.youtube.com/watch?feature=player_embedded&v=YOUTUBE_VIDEO_ID_HERE
" target="_blank"><img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>
{% endhighlight %}
---

Also, here is a link to a very helpful interactive tutorial regarding: 
[markdown interactive tut](http://markdowntutorial.com/)

\-\-\-  
\*_kinda extrapolated from Adam Pritchard\'s_ [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) 
<!-- http://sourceforge.net/p/jekyllc/bugs/markdown_syntax#md_ex_tables ?? -->

<!-- ??????????????????????? issues below ??????????????????????? -->
<!-- ??????????????????????? issues below ??????????????????????? -->
<!-- ??????????????????????? issues below ??????????????????????? -->

<!-- include link to each gh code page -->

<!-- * Combined emphasis with **_asterisks_ and _underscores_**: `**_asterisks_ and _underscores_**` -->

<!-- * Strikethrough with ~~two tildes~~: `~~two tildes~~` ?? -->

<!--
  why doesnt the relative reference work?
  * [a relative reference to a repository file](../blob/master/_posts/2014-01-14-unix-fu.md)
  `[a relative reference to a repository file](../blob/master/_posts/2014-01-14-unix-fu.md)`
-->

<!--
* **Inline HTML*
  * _Code be like:_  
  ```
  <dl>  
    <dt>Definition list</dt>
    <dd>Is something people use sometimes.</dd>

    <dt>Markdown in HTML</dt>
    <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
  </dl>
  ```
-->

<!-- ?????????????? how to escape brackets ???????????? -->