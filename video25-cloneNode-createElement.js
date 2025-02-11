<!DOCTYPE html>
<html>
  <head>
    <title>Hello World!</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
      <h1>h1</h1>
      <div>
        <p>Paragraph <span>1</span></p>
      </div>
      <script>
        // get the parent
        let paragraph = document.querySelector("p");
        
        // get the node
        let node = document.querySelector("p");
        
        // clone the node -> without Descendants
        let nodeNoDescendants = node.cloneNode(false);
        
        // clone the node -> with Descendants
        let nodeDescendants = node.cloneNode(true);
        
        // add the nodes 
        parent.appendChild(nodeNoDescendants);
        parent.appendChild(nodeDescendants);
        
        // replace the span 
        let span = document.querySelector("p:last-child");
        let newSpan = span.cloneNode(true);
        newSpan.innerText = "2";
        span.parentNode.replaceChild(newSpan, span);
        
        
      </script>
  </body>
</html>
