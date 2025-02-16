<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text" id="input" value="Some Text">
    <button id="btn">Click me</button>
    <button id="btn2">Click me 2</button>
    <script>
        let input = document.getElementById('input');
        let button1 = document.getElementById('btn');
        let button2 = document.getElementById('btn2');
        button1.addEventListener('click', function() {
            let content = input.getAttribute('value');
            console.log(content);
        });

        button2.addEventListener('click', function() {
            let content = input.value;
            console.log(content);
        });

    </script>
</body>
</html>
