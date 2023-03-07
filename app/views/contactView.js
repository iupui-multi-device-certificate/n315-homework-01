// * if use form, move preventDefault to form handler

export const contactView = `        
  <section class="contact content-width content-padding">
    <h1 class="section-title upper">Contact Us:</h1>     
    <form class="contact-form" onsubmit="event.preventDefault();">
    <input
      type="text"
      name="name"
      id="name"
      placeholder="Your name..."
      aria-label="name"
      class="form-element"
    />
    <input
      type="email"
      name="email"
      id="email"
      placeholder="Email Address..."
      aria-label="email"
      class="form-element"
    />
  
    <textarea
      name="message"
      id="message"
      placeholder="Message..."
      class="form-element message"
    ></textarea>

    <input
      type="submit"
      value="Send Message"
      class="btn btn--wide"
    />
  </form>


    </div>
  </section>
`;
