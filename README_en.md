<img src="Img/logo-nimbus.png" alt="Logo Nimbus" width="80" align="right">

# Nimbus

**Warning: This library is being developed.**

Nimbus is a JavaScript library that allows you to change the style of HTML elements based on predefined classes. With Nimbus, you can easily customize the appearance of your HTML elements simply by adding specific classes.

## How to use it

To start using Nimbus, follow these simple steps:

1. Include the Nimbus script in your project by adding the following line to your HTML:
   ```html
   <script src="https://izaq-code.github.io/Nimbus/Nimbus.js"></script>

2. Add the `Nimbus`  attribute to the HTML elements you want to style and define the desired style classes as attribute values.

3. Enjoy the magic of Nimbus by dynamically changing the style of your HTML!

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nimbus</title>
</head>
<body>
    <!-- Div where the content will be injected -->
    <div Nimbus="color-red, background-blue, t-height-px-100, aling_item, center, t-width-cent-10, aling_item_center, borderad-px-50">

        <h1 Nimbus="color-red, ts-cent-20">Hello</h1>
        
    </div>
    
    <div Nimbus="t-height-px-100, t-width-cent-10, background-blue, aling_item_center, aling_item">

        <h1 Nimbus="ts-cent-10, color-white">Nimbus</h1>

    </div>

    <!-- Link to the JavaScript file -->
    <script src="https://izaq-code.github.io/Nimbus/Nimbus.js"></script>
</body>
</html>


## Feature

### Colors

Nimbus offers a variety of predefined colors that can be applied as background or text color. Simply add the background-{color} or color-{color} classes to change the background or text color, respectively.

### Sizes

You can define width and height in pixels or percentage. Use the `t-width-px-{valor}`, `t-height-cent-{valor}` classes to set in pixels and `t-width-cent-{valor}`, `t-height-px-{valor}` to set in percentage.

### Font Size

Adjust the font size using classes like `ts-px-{value}` for pixels and `ts-cent-{value}` for percentage.

### Borders and Margins

Change the border and margin of elements with the `borderad-px-{value}`, `borderad-cent-{value}` classes to set in pixels and percentage, respectively. To set padding, use `padd-px-{value}` and `padd-cent-{value}`.

### Alignment and Centering

Easily align items with the `aling_item` class, which uses flexbox to center vertically and horizontally. To center elements horizontally, use the `center` class.

### Grid

Nimbus supports flexible grid layouts through the CSS grid system. With the provided classes, you can create responsive and adaptable grid layouts. For example, you can set the number of columns and the size of each column using classes like `grid-columns-{min}px-{fr}`.

### Max-Height and Max-Width

In addition to setting specific sizes for elements, Nimbus also allows limiting the maximum height and width of elements using the `max-height-px-{value}`//`max-height-cent-{value}` or `max-width-px-{value}`//`max-width-cent-{value}`. This is useful for ensuring that certain elements do not exceed specific size limits, especially in responsive layouts.

### Gap

Spacing between elements is an important consideration in layout design. Nimbus allows you to define the spacing between elements using the `gap-px-{value}` class to set in pixels or `gap-cent-{value}` to set in percentage.

## Contribution

Feel free to contribute to this project by opening issues or sending pull requests. All contributions are welcome!