AI Tool Interaction:
Document the prompts you used for AI version(s): 
I used the same prompt for ChatGPT and Perplexity.

Your personal homepage should serve as a professional introduction of yourself. The page must include several key sections, each serving a specific purpose:  Header Section  Create a main title "About [Your Name]" using the h1 tag. This should be the most prominent text on your page. Design a "Quick Links" navigation section that helps visitors easily move around your page. Include these links: "About Me" (links to your introduction section) "My Interests" (links to your interests section) "Contact" (links to your contact information) "Portfolio" (links to sitemap.html) Consider arranging these links horizontally or vertically in a way that complements your page design. Main Content Section  "About Me" Section:  Use the h2 tag for the section heading Write a personal introduction paragraph that gives readers a sense of who you are Create a second paragraph discussing your Babson journey and future plans Include a professional or casual photo of yourself The photo should be saved in the WebTech/images folder While there's no strict word count, make sure your paragraphs are substantial enough to be informative but concise enough to maintain reader interest "My Interests" Section:  Use the h2 tag for the section heading Describe your hobbies and interests in an engaging way Include an image that represents one of your interests Choose a keyword from your text (like "NBA" for basketball) and link it to a relevant website While there's no strict word count, make sure your paragraphs are substantial enough to be informative but concise enough to maintain reader interest Contact Section  Use the h3 tag for "Contact Information" Present your information in a clear, organized manner: Full name and course name Email address (must be clickable with mailto: link) GitHub profile URL (Make sure it's active and accessible) Link to your portfolio page (sitemap.html) 2. Adding Basic Styles (25 points) Your CSS styling should enhance readability and visual appeal while maintaining professionalism. Use internal CSS (within a <style> tag in your HTML) with these permitted elements and properties:  Allowed HTML Tags & Elements: 
Document structure: html, head, body 
Text elements: h1, h2, h3, p, span
 Lists: ul, li, ol
 Links: a 
Images: img
 Other elements: hr (not recommended), div 
Semantic elements: header, footer 
Grouping: class, id attributes

 Allowed CSS Properties:  
Box Model: margin, padding border (width, style, color) width, height box-sizing 
Typography:  font-family, font-size, font-weight color text-align, text-decoration line-height
Layout:  display (block, inline, inline-block) position (relative, absolute, fixed) top, right, bottom, left float clear 
Visual Styling: background-color background-image opacity border-radius cursor Units:  Absolute: px Relative: em, %, vh/vw 
Selectors: element selectors Class selectors (.) ID selectors (#) Descendant selectors Pseudo-classes (:hover, :active)
The sitemap.html page serves as a directory of your work in this course. Create it with these specifications:

Main heading "Work done in WebTech by [Your Name]" using h1 tag
Horizontal line below the heading
Unordered list of HTML pages with links:
Exercise 01 (link to ex01.html)
Exercise 03 (link to index.html)
Exercise 04 (link to ex04.html)
Exercise 05 (link to ex05.html)
Exercise 06 (link to ex06.html)
... (add more pages as you create them)
Horizontal line below the list
Challenge: Create this line without using the hr tag
Add home.jpg image (download it into WebTech/images folder) and link it to index.html
Style sitemap.html using similar CSS properties as index.html.

Explain your strategy in crafting these prompts:
I wanted to ensure that the AI didn't go outside the bounds, so I copied it and tried to format the prompt so that there was no confusion when pasting it in. I also specified that I would fill in any specific code I'd need to put in, like location to images, etc to allow the AI to flow without getting stuck and build the rest of the website so that I could just plug in my info.

Describe any follow-up interactions needed to refine the AI output:
The only following interactions would need to be with personalizing the information (i.e. copying the info I had in the actual index.html about myself) and then there needs to be input of the destination of the searches for each photo and link. Beyond the necessary plug in of information, there needs to be personalization of color and potentially location of each specific element, like the centering of the text, etc. A way to do this through AI prompts would be by specifying as much as possible or trying to give examples to draw from.

Code Comparison:
Right off the bat, I can see that the AI version of the code sacrificed personalization for functionality and structure (which makes sense considering how AI tends to think), so while my page has more personality, the AI versions appear more cohesive and professional. I also notice that the website generally looked sleeker than mine, mainly accredited to the styling of the box. Thankfully since I specifically laid out the allowed criteria, there was no advance code used, just better use of the already available code than I did. The only times where there was "advanced code" was when the AI created the aforementioned rounded shadow effect for the boxes in the chatGPT code. Beyond that, there was also use of the nav function which completely solved the issues I had when trying to create my navigation bar as the spacing looked rougher than it did in the AI version. The final thing I noticed was the rights reserved addition at the bottom of each code. I think that the AI version was much more efficient and structured than my code which looks more like separate pieces jammed together.

Learning Reflection:
Discuss what you learned from examining the AI's approach
I realized that there is usually a more straightforward approach than the first option I think of. I also realized that outlining the work and setting a framework allows for the work to be far more organized which allows for easier edits. What was interesting to see was that the AI added extra elements to the site, like the copyright at the bottom of the page. It led me to believe that many of the sites it used as a potential design reference were using similar tags.

Reflect on challenges you faced in your own implementation
I struggled the most with figuring out the specific code to use for a specific outcome. I also struggle in general with using AI as a troubleshoot method as it often times uses concepts outside of our scope which confuses me further. This struggle made my frustrations snowball and makes it hard for me to want to continue to work on the code.

Describe how this experience might influence your future web development work
I feel I will use AI more and try and learn how to specify my criteria so that it responds only with concepts within the bounds of the class. I do feel that this assignment discouraged me but I do not feel it is solely due to this assignment but rather a combination of elements. 