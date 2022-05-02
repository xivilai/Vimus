import React from "react";

export default function aboutUs() {
  return (
    <div>
      <p>Vimus is a example movies app utilizing <a style={{ textDecoration: "underline" }} href='https://imdb-api.com'>imdb-api</a> to get data. It was made by Slava Logos</p>

      <p>
        You can contact the author:{" "}
        <a
          style={{ textDecoration: "underline" }}
          href="mailto:logos.slava@gmail.com"
        >
          here
        </a>
      </p>
    </div>
  );
}
