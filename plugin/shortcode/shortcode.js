class FitWrap extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // Get the id attribute
    const elementId = this.getAttribute('data-id');

    // Set data-id to the id value
    if (elementId) {
      this.setAttribute('data-id', elementId);
    }

    // Get all child nodes
    const children = Array.from(this.childNodes);

    // Create wrapper div
    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper-content';
    wrapper.style = "width:fit-content;"
    // <div data-id="1" style="width:fit-content;">\[{x(t)\Bigl(\cos-2\pi \xi t+i \sin-2\pi \xi t\Bigr)}\]</div>

    // Move all children into the wrapper
    children.forEach(child => {
      wrapper.appendChild(child);
    });

    // Clear current content and append wrapper
    this.innerHTML = '';
    this.appendChild(wrapper);
  }

  // Observe attribute changes
  static get observedAttributes() {
    return ['data-id'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'data-id' && newValue) {
      this.setAttribute('data-id', newValue);
    }
  }
}

// Register the custom element
customElements.define('fit-', FitWrap);

