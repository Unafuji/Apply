// file1.js
class PrimButton extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const button = document.createElement('button');
        button.className = 'btn-primary';
        button.textContent = this.textContent;

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
            }
            .btn-primary:hover {
                background-color: #0056b3;
            }
        `;
        shadow.appendChild(style);
        shadow.appendChild(button);
    }
}

customElements.define('primbutton', PrimButton);
