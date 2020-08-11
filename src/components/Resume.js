import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faProjectDiagram, faPenNib } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const md = `
#Fletcher LaRue
About: 

- [Linkedin](https://www.linkedin.com/in/fletcher-larue/)
- [Github](https://github.com/asdFletcher)
- [Twitter](https://twitter.com/asdFletch)
`;

const Resume = () => {
    return (
        <div className="resume-container">
            <a href="https://www.linkedin.com/in/fletcher-larue/" target="_blank">
                Linkedin
            </a>
        </div>
    );
};

export default Resume;
