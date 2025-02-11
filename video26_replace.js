<!DOCTYPE html>
<html>
  <head>
    <title>Hello World!</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
      <div>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
      </div>
      
      <div>
        <p>Paragraph 3</p>
        <p>Paragraph 4</p>
      </div>
      
      <script>
        
        // make some elements
        let p5 = document.querySelector("p");
        p5.innerText = "Paragraph 5";
        let p6 = document.querySelector("p");
        p6.innerText = "Paragraph 6";
        let text = "Some additional text";
        
        // replace first div with a bunch of elements
        let div1 = document.querySelector("div:first-of-type");
        div1.replaceWith(p5,text);
        
        // replace second div with a bunch of elements
        let div2 = document.querySelector("div:last-of-type");
        div2.replaceChildren(p6,text);
        
        
      </script>
  </body>
</html>
