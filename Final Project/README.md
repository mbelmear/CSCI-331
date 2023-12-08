# Web Accessibility Feature

## Project Overview

Our collaborative effort, Group 27 consisting of myself (Michael Belmear) and Megan Steinmasel, introduces a web accessible Random User Generator. This dynamic website, accessible through our [hosted site](https://mbelmear.github.io/CSCI-331/Final%20Project/index.html) and [GitHub repository](https://github.com/mbelmear/CSCI-331/tree/main/Final%20Project), showcases user information obtained from the Random User API in a manner aligned with WCAG standards. Explore our [PowerPoint Presentation](https://docs.google.com/presentation/d/14D2j1q7L0T7WU2Pgl7byY1G44EubFcrGJKhKl4oXbq4/edit#slide=id.p) for a detailed walkthrough or download the [presentation](https://mbelmear.github.io/CSCI-331/Final%20Project/Web%20Accessibility.pptx). Our aim is to provide a seamless and inclusive experience for a diverse audience by emphasizing key accessibility features, ensuring that user information is presented in a web accessible way. 

## Project Links

- [**Hosted Site on GitHub**](https://mbelmear.github.io/CSCI-331/Final%20Project/index.html)
- [**Hosted Site on School Server**](https://csci331.cs.montana.edu/~h37r784/Final%20Project/)
- [**GitHub Repository**](https://github.com/mbelmear/CSCI-331/tree/main/Final%20Project)
- [**Group PowerPoint Presentation**](https://docs.google.com/presentation/d/14D2j1q7L0T7WU2Pgl7byY1G44EubFcrGJKhKl4oXbq4/edit#slide=id.p)
- [**Downloadable Group PowerPoint Presentation**](https://mbelmear.github.io/CSCI-331/Final%20Project/Web%20Accessibility.pptx)

## Creative Objective

Our creative objective for the Web Accessibility feature aimed to enhance the user experience by incorporating key accessibility features into our web project, aligning with principles outlined in the Web Content Accessibility Guidelines (WCAG). These principles include ensuring content is **Perceivable** (providing text alternatives, captions, and adaptable content), **Operable** (keyboard accessibility, sufficient time for tasks), **Understandable** (clear text, consistent navigation, input assistance), and **Robust** (compatibility with assistive technologies). Web accessibility caters not only to individuals with disabilities but also enhances the experience for a broader audience, accommodating diverse devices, environments, and temporary limitations. Common disabilities addressed include visual and hearing impairments, motor disabilities, and cognitive limitations. Adhering to WCAG standards provides a framework for creating websites that are more inclusive and usable for everyone.

## Tech Summary

The web accessibility feature integrates HTML, CSS, and JavaScript to create a Random User Generator. The HTML document prioritizes accessibility, utilizing semantic elements and initiating the `getRandomUser()` function for enhanced user interaction. The CSS stylesheet focuses on readability, employing techniques such as a dark font color and styling links for improved visibility. The JavaScript code, using `async/await` syntax, fetches data from the Random User API, dynamically updating the webpage with structured content, providing an inclusive and user-friendly experience for a diverse audience. Below you'll find a closer analysis of each component and how it contributes to web accessibility: 

### HTML Structure
The HTML document is deliberately designed with a focus on web accessibility for a Random User Generator web page. Adhering to best practices, it incorporates semantic elements such as `<header>`, `<main>`, and `<footer>` for clear organization and navigation. The document initiates with a proper Document Type Declaration and language specification, with essential metadata in the `<head>` section catering to responsive design. Triggering the `getRandomUser()` function in the `<body>` section on page load enhances user interaction. The `<header>` contains a meaningful heading with an accessible link, ensuring comprehension for users with screen readers. In the `<footer>`, copyright information and detailed contributions from Megan Steinmasel and myself (Michael) are presented with user-friendly toggling in `<details>` elements, aligning thoughtfully with web accessibility principles.

### CSS Styling
The CSS stylesheet is intricately designed to prioritize web accessibility, employing various techniques to enhance readability and the overall user experience. A dark font color (`#1f1f1f`) on the body promotes legibility for users with visual impairments, and the font choice, Arial, contributes to improved accessibility. Semantic tags, such as `<header>` and `<footer>`, play a vital role in providing meaningful structure. The `<header>` utilizes a light background color (`#e8e9eb`) for visual hierarchy, and images are styled with a rounded border and centered alignment for an aesthetically pleasing and accessible layout. Main content within the `<main>` tag is centered for clarity, and text alignment for various elements is carefully adjusted for ease of reading. Links are styled to stand out with underlines, bold font weight, and a distinct color (`#061259`), aiding users in identifying and navigating links. Adjustments to margin and background color in the `<footer>`, along with table styles, contribute to a clear separation and improved table readability.

### JavaScript Functionality
The JavaScript code focuses on clean asynchronous data fetching and dynamic content generation for the Random User Generator. Utilizing `async/await` syntax, the `getRandomUser` function fetches data from the Random User API asynchronously. The URL for the API is stored in a constant variable for clarity. The `displayUser` function dynamically populates the HTML content within the designated container (`apiData`) with details about the randomly generated user, ensuring structured and navigable content presentation. Accessibility enhancements include providing alternative text for user images and utilizing semantic HTML elements. Error handling is implemented to log errors to the console, ensuring robustness. The script also automatically invokes the `getRandomUser` function on page load, providing users with immediate access to a random user's information.

## Individual Member Contributions

### Michael Belmear
In establishing the initial site structure, I (Michael) played a pivotal role and contributed significantly to the project's documentation. Taking the lead in crafting the HTML, CSS, and JavaScript components, I collaborated closely with Megan to ensure a cohesive and well-implemented design. Integrating the random user API into the site, I made a conscious effort to leverage the full potential of HTML 5 and CSS 3.

Throughout the design process, prioritizing accessibility remained a key focus. Mindful of assistive technologies, I aimed to create a website that delivers a seamless and inclusive user experience. Furthermore, I took the initiative to host the project on GitHub Pages and also established a public repository for the class (CSCI 331), providing a convenient and accessible platform for project visibility and collaboration.

### Megan Steinmasel
Megan made substantial contributions, playing an active role in the development of half of the Web Accessibility feature. She assumed responsibility for creating the Web Accessibility presentation on Google Slides, skillfully incorporating tables of API data into the web page. Additionally, she curated an unordered list of hyperlinks to relevant sources, enhancing the project's depth and context. Megan's commitment extended to contributing to the project's documentation, where she provided valuable insights and information.

Demonstrating diligence and professionalism, Megan uploaded her share of the work conscientiously to both the Class Server and her GitHub repository. Moreover, her involvement extended beyond the initial contributions as she played a crucial role in refining specific aspects of the project, particularly focusing on CSS sizing units and text alignment. Megan's multifaceted contributions significantly enriched the overall quality of the project.

## Conclusion

Our journey with this project underscored the critical role of web accessibility. Integrating various guidelines, particularly those outlined in the WCAG standards, posed challenges in striking the right balance between creativity and inclusivity. The collaboration between myself (Michael) and Megan was pivotal, and iterative development played a crucial role in refining our approach.

The struggle to align design aesthetics with accessibility requirements highlighted the delicate equilibrium required. Despite these challenges, our experience deepened our understanding of inclusive design principles. Looking ahead, we acknowledge the ongoing commitment needed to create digital spaces that serve a diverse user base, reinforcing our dedication to accessibility and usability principles.

## References

- [**WCAG Standards**](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [**Web Accessibility Guide**](https://blog.hubspot.com/website/web-accessibility)
- [**Semantic HTML Cheat Sheet**](https://medium.com/@ericapantojacs/semantic-html-cheat-sheet-9194768368bb)
