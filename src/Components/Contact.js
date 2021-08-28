import { useState } from "react";
import gmail from "./pictures/gmail.png";
import github from "./pictures/github.png";
import linkedin from "./pictures/linkedin.png";
import discord from "./pictures/discord.jpg";

function ContactContainer(props) {
  return (
    <div id={props.id}>
      <a href={props.link} target="_blank">
        <img className="contact" src={props.src} alt="" />
      </a>
    </div>
  );
}

function Contact() {
  const [contacts, setContacts] = useState([
    [
      {
        id: "gmail",
        link: "mailTo:ankitumar81458@gmail.com",
        src: gmail,
      },
      {
        id: "github",
        link: "https://github.com/Ankit-06",
        src: github,
      },
    ],
    [
      {
        id: "linkedin",
        link: "https://www.linkedin.com/in/ankit-mishra00/",
        src: linkedin,
      },
      {
        id: "discord",
        link: "https://discord.com/channels/@me",
        src: discord,
      },
    ],
  ]);

  return (
    <>
      <div className="contact-container">
        <h1 id="contact-heading">
          <u> Let's Get in Touch</u>
        </h1>

        <div>
          {contacts[0].map((contact) => {
            return (
              <ContactContainer
                key={contact.id}
                id={contact.id}
                link={contact.link}
                src={contact.src}
              />
            );
          })}
        </div>

        <div>
          {contacts[1].map((contact) => {
            return (
              <ContactContainer
                key={contact.id}
                id={contact.id}
                link={contact.link}
                src={contact.src}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Contact;
