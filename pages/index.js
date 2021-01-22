import React from "react";
import Toggle from "./toggle";

export default function App() {
  return (
    <div>
      <Toggle />
      <div className="center">
        <h1>Hello World</h1>
        <p>
          Sit culpa illo natus voluptas nulla? Quas consectetur qui temporibus
          maiores expedita doloremque Totam consectetur deleniti aliquid debitis
          rerum, recusandae? Alias suscipit facere ullam at odit tempore, odit
          Aliquam maxime!
        </p>
      </div>
      <style global jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");
        body {
          font-family: "Anton", sans-serif;
        }
        .center {
          text-align: center;
          margin: 0px 200px;
        }
      `}</style>
    </div>
  );
}
