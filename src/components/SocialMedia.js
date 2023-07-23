import React from "react";

function SocialMedia({ socialLinks }) {
  const { github, linkedin } = socialLinks;

  return (
    <div className="social-media">
      <a href={github}>{github}</a>
      <a href={linkedin}>{linkedin}</a>
    </div>
  );
}

export default SocialMedia;
