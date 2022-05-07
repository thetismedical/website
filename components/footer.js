class Footer extends HTMLElement{constructor(){super()}connectedCallback(){this.innerHTML='\n      <section id=\'contact\' class=\'footer\'>\n      <div class="footer-content">\n         <div class=\'footer-words\'>\n            <div class=\'footer-title\'>\n               <h2>Contact</h2>\n               <img src="../images/logo.svg" alt="Logo Image">\n            </div>\n            <div class="links-row">\n               <div class="links-column">\n                  <h3>Company</h3>\n                  <a href="../">Home</a>\n                  <a href="../professionals.html">Professionals</a>\n                  <a href="../contact.html">Contact Us</a>\n                  <a href="../sitemap.html">Sitemap</a>\n                  <h3>Products</h3>\n                  <a href="../night-splint.html">Achilles Rupture Night Splint</a>\n                  <a href="../trauma-splint.html">Achilles Rupture Trauma Splint</a>\n               </div>\n               <div class="links-column">\n                  <h3>Information</h3>\n                  <a href="../achilles-ruptures.html">Achilles Ruptures</a>\n            <a href="../recovery-pathway.html">Recovery Pathway</a>\n          <a href="../FAQs/achilles-rupture-timeline.html">Achilles Rupture Timeline</a>\n                  <a href="../FAQs/is-my-achilles-ruptured.html">Is my Achilles Ruptured?</a>\n                  <a href="../FAQs/what-happens-if-my-achilles-is-ruptured?">What happens if my Achilles is ruptured?</a>\n                  <a href="../FAQs/achilles-tear-treatment.html">Achilles Tear Treatment</a>\n                  <a href="../FAQs/torn-achilles-recovery.html">Torn Achilles Recovery</a>\n                  <a href="../FAQs/life-after-achilles-rupture.html">Life After Achilles Rupture</a>\n               </div>\n               <div class="links-column">\n                  <h3>Stay in Touch</h3>\n                  <a class=\'invert\' target="_blank"\n                  href=\'mailto:info@thetismedical.com\'>Email Us</a>\n               <a class=\'invert\' target="_blank" href=\'https://www.linkedin.com/company/thetis-medical-ltd\'>LinkedIn</a>\n               <a class=\'invert\' target="_blank" href=\'https://www.instagram.com/thetismedical/\'>Instagram</a>\n               <a class=\'invert\' target="_blank" href=\'https://www.facebook.com/thetismedical\'>Facebook</a>\n               </div>\n            </div>\n            <div class="socials">\n               <a class=\'invert\' target="_blank"\n                  href=\'mailto:info@thetismedical.com\'><img\n                     src="../images/social-media-email.svg" alt="Email Icon"></a>\n               <a class=\'invert\' target="_blank" href=\'https://www.linkedin.com/company/thetis-medical-ltd\'><img\n                     src="../images/social-media-linkedin.svg" alt="Linkedin Icon"></a>\n               <a class=\'invert\' target="_blank" href=\'https://www.instagram.com/thetismedical/\'><img\n                     src="../images/social-media-insta.svg" alt="Instagram Icon"></a>\n               <a class=\'invert\' target="_blank" href=\'https://www.facebook.com/thetismedical\'><img\n                     src="../images/social-media-facebook.svg" alt="Facebook Icon"></a>\n            </div>\n            <p>&copy;Thetis Medical Ltd 2022</p>\n         </div>\n      </div>\n   </section>\n        '}}customElements.define("footer-component",Footer);