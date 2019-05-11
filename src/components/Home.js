import React from 'react';
import ReactMarkdown from 'react-markdown';

const md = 
`
#Fletcher LaRue
About: 

- [Linkedin](https://www.linkedin.com/in/fletcher-larue/)
- [Github](https://github.com/asdFletcher)
- [Twitter](https://twitter.com/asdFletch)
- laruefletcher@gmail.com

Full Stack JavaScript developer with a long passion for coding, problem solving, and building cool stuff!

Experience with Node.js, Express servers, React and React Native apps, and creating APIs and databases. Currently working on a variety of projects, networking, and studying data structures 👍!

My background is in Mechanical Engineering ⚙️, and I've developed a full suite of skills that fit in the aerospace world including mechanical design, expert CAD skills, and project management 📞. Now  that I've seen the light and switched to web development it's possible some of these skills trasfer, like working with a team on technical challenges! 
`
const Home = () => {
  return (
    <div className="home-container">
      <ReactMarkdown source={md} />
    </div>
  );
}

export default Home;