import React from "react";
import MovieList from "./MovieList";
import SocialMedia from "./SocialMedia";

function App() {
  const title = "Mad Max";
  const posterURL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1OTYGz2GDC1XjA9tirh_1Rd571yE5UFIYsmZp4nACMd7CCHM";
  const genresArr = ["Action", "Adventure", "Science Fiction", "Thriller"];
  const socialLinks = {
    github: "https://github.com/your-github-profile",
    linkedin: "https://www.linkedin.com/in/your-linkedin-profile",
  };

  return (
    <div className="App">
      <MovieList />
      <SocialMedia socialLinks={socialLinks} />
    </div>
  );
}

export default App;
