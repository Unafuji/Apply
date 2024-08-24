// file1.js
class PrimButton extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        // Create the button element
        const button = document.createElement('button');
        button.className = 'btn-primary';
        button.textContent = this.textContent; // Set the button's text to the element's content

        // Apply styles
        const style = document.createElement('style');
        style.textContent = `
            .btn-primary {
                background-color: #007bff;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                cursor: pointer;
                font-size: 16px;
            }
            .btn-primary:hover {
                background-color: #0056b3;
            }
        `;

        // Attach the style and button to the shadow DOM
        shadow.appendChild(style);
        shadow.appendChild(button);
    }
}

// Define the custom element
customElements.define('primbutton', PrimButton);
