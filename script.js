function setTheme(mode) {
  if (mode === "light") {
    document.getElementById("theme-style").href = "default.css";
    document.getElementById('github').style.fill="black";
    document.getElementById('HackerRank').style.fill="green";
  }

  if (mode === "blue") {
    document.getElementById("theme-style").href = "blue.css";
    document.getElementById('github').style.fill="white";
    document.getElementById('HackerRank').style.fill="white";
  }

  if (mode === "brown") {
    document.getElementById("theme-style").href = "brown.css";
    document.getElementById('github').style.fill="black";
    document.getElementById('HackerRank').style.fill="black";
  }

  if (mode === "purple") {
    document.getElementById("theme-style").href = "purple.css";
    document.getElementById('github').style.fill="white";
    document.getElementById('HackerRank').style.fill="white";
  }
  localStorage.setItem("theme", mode);
}

let theme = localStorage.getItem("theme");

// Fetching the theme from the local storage if available
if (theme) setTheme(theme);
else setTheme("light");

let themeDots = document.getElementsByClassName("theme-dot");

for (let theme = 0; themeDots.length > theme; theme++) {
    themeDots[theme].addEventListener("click", function () {
        let mode = this.dataset.mode;
        setTheme(mode);
    });
}

class Project {
  constructor({
                projectName,
                projectDescription,
                projectImage,
                codeLink,
                demoLink
              }) {
    this.title = this.createHeadingTag({
      headingType: "h6",
      className: "post-title",
      text: projectName
    });

    this.description = this.createParaTag({
      className: "post-intro",
      text: projectDescription
    });

    this.demo = this.createAttributeTag({
      href: demoLink,
      text: "Live Demo"
    });

    this.code = this.createAttributeTag({
      href: codeLink,
      text: "Source Code"
    });

    this.projectImage = this.createImageTag({
      className: "thumbnail",
      src: projectImage,
      alt: projectName
    });

    this.sourceCodeDiv = this.createDiv({
      className: "source-code",
      childElements: [this.demo, this.code]
    });

    this.cardHeaderDiv = this.createDiv({
      className: "post-preview",
      childElements: [this.title, this.description, this.sourceCodeDiv]
    });

    this.cardComponent = this.createDiv({
      className: "post",
      childElements: [this.projectImage, this.cardHeaderDiv]
    });
  }

  createAttributeTag({ href = "", target = "_blank", text }) {
    const tagDocument = document.createElement("a");
    tagDocument.href = href;
    tagDocument.target = target;
    const tagTextElement = document.createTextNode(text);
    tagDocument.appendChild(tagTextElement);
    return tagDocument;
  }

  createParaTag({ className = null, text = "" }) {
    const paraElement = document.createElement("p");
    if (className) paraElement.className = className;

    const paraText = document.createTextNode(text);
    paraElement.appendChild(paraText);
    return paraElement;
  }

  createDiv({ className = null, childElements = [] }) {
    const divElement = document.createElement("div");
    if (className) divElement.className = className;
    childElements.forEach(element => {
      divElement.appendChild(element);
    });
    return divElement;
  }

  createHeadingTag({ headingType = "h1", className = null, text = "" }) {
    const headingTag = document.createElement(headingType);
    if (className) headingTag.className = className;
    const headingText = document.createTextNode(text);
    headingTag.appendChild(headingText);
    return headingTag;
  }

  createImageTag({ className = null, src = "", alt = "" }) {
    const imageTag = document.createElement("img");
    if (className) imageTag.className = className;
    imageTag.src = src;
    imageTag.alt = alt;
    return imageTag;
  }

  createProjectCard() {
    return this.cardComponent;
  }
}

const projects = [
  {
    projectName: "Park Here 24 - Present(Ongoing)",
    projectDescription:
      "Park Here 24 is application based on parking lot management system based on HTML-CSS-JavaScript.",
    projectImage: "/images/Project 7.png",
    codeLink: "https://github.com/monishamandal02/Park-Here-24",
    demoLink: "https://parkhere24.netlify.app/"
  },
  {
    projectName: "Menu App - Ractjs",
    projectDescription:
      "Menu App is simple React Application in which the items are being fetching using an api.",
    projectImage: "images/Project 1.png",
    codeLink: "https://github.com/monishamandal02/Menu_Reactjs-5",
    demoLink: "https://monishamandal02.github.io/Menu_Reactjs-5/"
  },
  {
    projectName: "Info - Ractjs",
    projectDescription:
      "It is a basic single page react application which shows the information of my love once :P",
    projectImage: "images/Project 2.png",
    codeLink: "https://github.com/monishamandal02/Todo-List_React1",
    demoLink: "#"
  },
  {
    projectName: "The CockTailDB - Ractjs",
    projectDescription:
      "The CocktailDB is simple React Application in which the cocktails are being fetching using an api.",
    projectImage: "images/Project 4.png",
    codeLink: "https://github.com/monishamandal02/TheCocktailDB_API-Reactjs-6",
    demoLink: "https://monishamandal02.github.io/TheCocktailDB_API-Reactjs-6/"
  },
  {
    projectName: "Portfolio - Reactjs+Gatsby",
    projectDescription:
      "My first portfolio website using Reactjs and Gatsby.",
    projectImage: "/images/Project 6.png",
    codeLink: "https://github.com/monishamandal02/MonishaMandal_SimplePortfolio",
    demoLink: "https://monishamandal02.netlify.app/"
  },
 
];

const createCards = () => {
  projects.map(project => {
      const projectCard = new Project({
        projectName: project.projectName,
        projectDescription: project.projectDescription,
        projectImage: project.projectImage,
        codeLink: project.codeLink,
        demoLink: project.demoLink
      }).createProjectCard();
      document.getElementById("post-wrapper-id").appendChild(projectCard);
    }
  );
};
createCards();

