class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section id='contact' class='footer'>
      <div class="footer-content">
         <div class='footer-words'>
            <div class='footer-title'>
               <h2>Contact</h2>
               <img src="../images/logo.svg" alt="Logo Image">
            </div>
            <div class="socials">
               <a class='invert' target="_blank"
                  href='https://us5.list-manage.com/contact-form?u=c24150147626fd5e19c7684c6&form_id=06069b6e5471c060d76fb6ebe2d5adc7'><img
                     src="../images/social-media-email.svg" alt="Email Icon"></a>
               <a class='invert' href='https://www.linkedin.com/company/thetis-medical-ltd'><img
                     src="../images/social-media-linkedin.svg" alt="Linkedin Icon"></a>
               <a class='invert' href='https://www.instagram.com/thetismedical/'><img
                     src="../images/social-media-insta.svg" alt="Instagram Icon"></a>
               <a class='invert' href='https://www.facebook.com/thetismedical'><img
                     src="../images/social-media-facebook.svg" alt="Facebook Icon"></a>
            </div>
            <p>&copy;Thetis Medical Ltd 2022</p>
         </div>
      </div>
   </section>
      `;
  }
}

customElements.define('footer-component', Footer);
