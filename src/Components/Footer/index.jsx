import React from "react";
import {} from "./style.css";
import FacebookIcon from '../../Sources/icons/facebook-icon.png'
import InstagramIcon from '../../Sources/icons/instagram-icon.png'
import LinkedinIcon from '../../Sources/icons/linkedin-icon.png'
import YoutubeIcon from '../../Sources/icons/youtube-icon.png'

function Footer(props) {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="redes_sociais">
            <ul>
              <a
                target="_blank"
                href="https://pt-br.facebook.com/serratecoficial/"
                rel="noreferrer"
              >
                <li>
                  <img
                    src={FacebookIcon}
                    alt="facebook"
                  />
                </li>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/serratecoficial/"
                rel="noreferrer"
              >
                <li>
                  <img
                    src={InstagramIcon}
                    alt="instagram"
                  />
                </li>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/serratecoficial/"
                rel="noreferrer"
              >
                <li>
                  <img
                    src={LinkedinIcon}
                    alt="linkedin"
                  />
                </li>
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UC2pvxl7H3IK2X6z9XZ3xsyQ/videos?app=desktop"
                rel="noreferrer"
              >
                <li>
                  <img
                    src={YoutubeIcon}
                    alt="youtube"
                  />
                </li>
              </a>                
            </ul>
          </div>
        </div>        
      </footer>
      <h1 className="rodape">© Copyright 2022 Serratec - Todos os direitos reservados</h1>
    </>
  );
}

export default Footer;
