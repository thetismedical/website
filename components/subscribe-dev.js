class Subscribe extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <section id='subscribe' class='slide col'>
        <div class="slide-title">
           <div class="divider"></div>
           <h2>Subscribe</h2>
           <div class="divider"></div>
        </div>
        <p class='intro'>Sign up to our newsletter to get expert advice on Achilles ruptures and the latest on our
           business developments.</p>
        <div id="mc_embed_signup" class='mailchimp wrapper'>
           <form
              action="https://thetismedical.us5.list-manage.com/subscribe/post?u=c24150147626fd5e19c7684c6&amp;id=f85ef48215"
              method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate"
              target="_blank" novalidate>
              <div id="mc_embed_signup_scroll">
                 <div class="mc-field-group mailchimp form">
                    <label for="mce-EMAIL">Email Address</label>
                    <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
                 </div>
                 <div id="mce-responses" class="clear mailchimp response">
                    <div class="response" id="mce-error-response" style="display:none"></div>
                    <div class="response" id="mce-success-response" style="display:none"></div>
                 </div>
                 <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text"
                       name="b_c24150147626fd5e19c7684c6_f85ef48215" tabindex="-1" value=""></div>
                 <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe"
                       class="button mailchimp explore"></div>
              </div>
           </form>
        </div>
     </section>
        `;

    }
}

customElements.define('subscribe-component', Subscribe);