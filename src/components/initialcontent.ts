export const initialContent = `<h1>Basics of HTML and CSS</h1>

    <h2>Introduction</h2>
    <p>
        HTML (HyperText Markup Language) and CSS (Cascading Style Sheets) are foundational technologies used to create and design web pages. 
        HTML provides the structure and content of a webpage, while CSS is used to style and layout the content. Understanding the basics 
        of HTML and CSS is essential for anyone looking to create websites or web applications.
    </p>

    <h2>HTML: The Structure of a Web Page</h2>
    <p>
        HTML is a markup language that uses elements to structure content. Each HTML element is defined by a tag, which tells the browser how to display the content. 
        HTML documents are structured in a hierarchical manner, with elements nested within one another.
    </p>

    <h3>Basic HTML Structure</h3>
    <p>
        A basic HTML document includes the following elements:
    </p>
    <ul>
        <li><code class='language-html'>&lt;!DOCTYPE html&gt;</code>: Declares the document type and version of HTML.</li>
        <li><code>&lt;html&gt;</code>: The root element of an HTML page.</li>
        <li><code>&lt;head&gt;</code>: Contains metadata, such as the page title and links to CSS files.</li>
        <li><code>&lt;title&gt;</code>: Sets the title of the webpage, which appears in the browser tab.</li>
        <li><code>&lt;body&gt;</code>: Contains the content of the webpage, such as text, images, and links.</li>
    </ul>
    <p>Here's a basic HTML template:</p>
    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Basic HTML and CSS Example&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Welcome to My Web Page&lt;/h1&gt;
    &lt;p&gt;This is a simple paragraph explaining the basics of HTML and CSS.&lt;/p&gt;
    &lt;a href="https://www.example.com"&gt;Click here to visit an example website&lt;/a&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>

    <h2>CSS: Styling a Web Page</h2>
    <p>
        CSS is used to style HTML elements, allowing you to change colors, fonts, spacing, and layout. CSS rules consist of selectors and declarations. 
        The selector targets the HTML element you want to style, and the declaration specifies the style properties and their values.
    </p>

    <h3>Basic CSS Syntax</h3>
    <p>
        A CSS rule looks like this:
    </p>
    <pre><code>selector {
    property: value;
}
</code></pre>
    <p>For example, to change the color of all <code>&lt;h1&gt;</code> elements to blue:</p>
    <pre><code>h1 {
    color: blue;
}
</code></pre>

    <h3>Adding CSS to Your HTML</h3>
    <p>CSS can be added to an HTML document in three ways:</p>
    <ol>
        <li><strong>Inline CSS</strong>: Applied directly to an HTML element using the <code>style</code> attribute.</li>
        <pre><code>&lt;h1 style="color: blue;"&gt;Welcome to My Web Page&lt;/h1&gt;
</code></pre>
        <li><strong>Internal CSS</strong>: Placed within a <code>&lt;style&gt;</code> tag in the <code>&lt;head&gt;</code> section of the HTML document.</li>
        <pre><code>&lt;style&gt;
    h1 {
        color: blue;
    }
&lt;/style&gt;
</code></pre>
        <li><strong>External CSS</strong>: Linked to an external stylesheet using the <code>&lt;link&gt;</code> tag in the <code>&lt;head&gt;</code> section.</li>
        <pre><code>&lt;link rel="stylesheet" href="styles.css"&gt;
</code></pre>
    </ol>
    <p>Here's how you can use internal CSS to style the HTML example:</p>
    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Styled HTML and CSS Example&lt;/title&gt;
    &lt;style&gt;
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            color: #333;
            margin: 0;
            padding: 20px;
        }

        h1 {
            color: #2c3e50;
        }

        p {
            font-size: 18px;
            line-height: 1.6;
        }

        a {
            color: #3498db;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Welcome to My Web Page&lt;/h1&gt;
    &lt;p&gt;This is a simple paragraph explaining the basics of HTML and CSS.&lt;/p&gt;
    &lt;a href="https://www.example.com"&gt;Click here to visit an example website&lt;/a&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>

    <h2>Conclusion</h2>
    <p>
        HTML and CSS are powerful tools for building and designing websites. By understanding the basics, you can create well-structured and visually appealing web pages. 
        As you become more familiar with these technologies, you can explore more advanced concepts like responsive design, CSS frameworks, and JavaScript to enhance your web development skills.
    </p>`;
