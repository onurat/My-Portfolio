let currDate = new Date();
let year = currDate.getFullYear() - 1997;
let month = currDate.getMonth() - 9;
let date = currDate.getDate() - 28;

const givenDate = new Date(1997, 9 - 1, 28);
const birthday = givenDate
  .toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
  .replace(/ /g, "-");

if (month < 0) year -= 1;
else if (month === 0) {
  if (date < 28) year -= 1;
}

const about = {
  name: "Onur Atas",
  about: "Full-Stack Developer",
  bio: "I am a versatile software engineer with a passion for creative problem-solving",
  longBio:
    "A software engineer skilled in React, JavaScript, Python, SQL, Node.js, CSS, Bootstrap, HTML, YOLOv8, Kaggle, Roboflow and Figma. I bring an adaptable and innovative mindset to every project. This diversity allows me to creatively approach problem-solving, making a meaningful impact across different scopes. I'm eager to connect with like-minded professionals passionate about Software engineering.",
  birthday,
  city: "London",
  age: year,
  degree: "na",
};

export default about;
