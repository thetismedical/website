class Article extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div>
        <h3>Get the full eBook on Achilles tendon ruptures FREE.</h3>
       </div>
       <div class="go-to-subscribe">
        <a href='#subscribe' class="explore go-to-subscribe">Get the eBook</a>
       </div>
       <h4 class='matthew-solan'>Written by <a target='_blank'
           href='http://www.matthewsolanorthopaedics.co.uk/'>Matthew Solan</a>.
        <br>
        Achilles rupture expert and orthopedic surgeon.</h4>
`;

    }
}

customElements.define('article-component', Article);