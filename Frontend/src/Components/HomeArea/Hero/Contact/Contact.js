import "./Contact.css";

function Contact() {
  return (
    <div className="Contact" id="Contact">
      <form method="post">
        <h1>Contact us</h1>
        <div className="name-form">
          <label>
            Name
            <input type="text" name="name" required />
          </label>
        </div>
        <div className="email-form">
          <label>
            E-mail
            <input type="email" name="_replyto" required />
          </label>
        </div>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;
