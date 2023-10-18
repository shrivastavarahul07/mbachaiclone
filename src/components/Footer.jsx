import React from "react";

const Footer = () => {
  const footerlinks = (element) => {
    const allfooterlink = document.querySelectorAll(".footerLinks");

    switch (element) {
      case 0:
        allfooterlink.forEach((item, index) => {
          index === 0 ? (item.style.opacity = 1) : (item.style.opacity = 0.2);
        });
        break;
      case 1:
        allfooterlink.forEach((item, index) => {
          index === 1 ? (item.style.opacity = 1) : (item.style.opacity = 0.2);
        });
        break;
      case 2:
        allfooterlink.forEach((item, index) => {
          index === 2 ? (item.style.opacity = 1) : (item.style.opacity = 0.2);
        });
        break;
      case 3:
        allfooterlink.forEach((item, index) => {
          index === 3 ? (item.style.opacity = 1) : (item.style.opacity = 0.2);
        });
        break;
      case 4:
        allfooterlink.forEach((item, index) => {
          index === 4 ? (item.style.opacity = 1) : (item.style.opacity = 0.2);
        });
        break;
      case 5:
        allfooterlink.forEach((item, index) => {
          index === 5 ? (item.style.opacity = 1) : (item.style.opacity = 0.2);
        });
        break;

      default:
        allfooterlink.forEach((item)=>(item.style.opacity = 1))
        break;
    }

  };

  const linkbacknormal = () => {
    const allfooterlink = document.querySelectorAll(".footerLinks");
    allfooterlink.forEach((item)=>(item.style.opacity = 1))
  };
  return (
    <>
      <footer>
        <h1>
          Let's
          <br />
          #ConnectOnCutting?
        </h1>

        <aside onMouseLeave={linkbacknormal}>
          <a
            href="/"
            className="footerLinks"
            onMouseOver={() => footerlinks(0)}
            data-cursorpointermini={true}
          >
            Home
          </a>
          <a
            href="/story"
            className="footerLinks"
            onMouseOver={() => footerlinks(1)}
            data-cursorpointermini={true}
          >
            story
          </a>
          <a
            href="/media"
            className="footerLinks"
            onMouseOver={() => footerlinks(2)}
            data-cursorpointermini={true}
          >
            media
          </a>
          <a
            href="/franchise"
            className="footerLinks"
            onMouseOver={() => footerlinks(3)}
            data-cursorpointermini={true}
          >
            franchise
          </a>
          <a
            href="/events"
            className="footerLinks"
            onMouseOver={() => footerlinks(4)}
            data-cursorpointermini={true}
          >
            event
          </a>
          <a
            href="/chaiwalacares"
            className="footerLinks"
            onMouseOver={() => footerlinks(5)}
            data-cursorpointermini={true}
          >
            chai wala cares
          </a>
        </aside>

        <div>
          <h5>Email</h5>
          <a href="mailto: info@mbachaiwala.com">Info@mbachaiwala.com</a>
          <a href="mailto: franchise@mbachaiwala.com">
            Franchise@mbachaiwala.com
          </a>
        </div>

        <div>
          <h5>Phone</h5>
          <a href="tel: +91722905222">+91722905222</a>
        </div>

        <p>© COPYRIGHT 2023 MBA CHAIWALA. MADE BY</p>
      </footer>
      <div className="footer"></div>
    </>
  );
};

export default Footer;
