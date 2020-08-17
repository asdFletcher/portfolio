import React from "react";
import ReactMarkdown from "react-markdown";

const md = `
#### Fletcher LaRue
About: 
<ul>
  <li><a href="https://www.linkedin.com/in/fletcher-larue/" target="_blank">Linkedin</a></li>
  <li><a href="https://github.com/asdFletcher" target="_blank">Github</a></li>
  <li><a href="https://twitter.com/asdFletch/" target="_blank">Twitter</a></li>
  <li>laruefletcher@gmail.com</li>
<ul>


Full Stack JavaScript developer with a long passion for coding, problem solving, and building cool stuff!

I can handle both front end and backend programming and I am adatable to whichever language the project is using. I have experience building React web apps and backend services in Node, Python and Java. I also have experience building desktop C# apps! I know how to design APIs and integrate services to databases, as well as model tables and relationships. I can also create one-click CI/CD pipelines using a bunch of AWS tools, including AWS CloudFormation template, which makes the entire stack and pipeline replicable for multiple environments, allows for quick teardown and replacement, and versioning comes included if the templates are tracked via Git!

Currently working to better the world at a San Diego startup Cardea Bio, where we add biology to a graphene layer and get electrical signals out, thus revealing information nobody has had access to before!

Check out my [linkedin](https://www.linkedin.com/in/fletcher-larue/) for more insights into my work history, or feel free to reach out directly!
`;

const Home = () => {
    return (
        <div className="home-container">
            <ReactMarkdown source={md} escapeHtml={false} />
        </div>
    );
};

export default Home;
