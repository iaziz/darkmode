import React from "react";
import { useColorMode } from "theme-ui";

export default function Toggle() {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <header>
      <input type="checkbox"
        onClick={(e) => {
          setColorMode(colorMode === "default" ? "dark" : "default");
        }}
      ></input>

      <style jsx>
        {`
          input {
            -webkit-appearance: none;
            position: relative;
            width: 100px;
            height: 50px;
            background-image: url(https://i.postimg.cc/857jHw2q/Screenshot-2020-04-16-at-1-07-06-PM.png);
            background-size: cover;
            border-radius: 50px;
            outline: none;
            transition: background-image 0.9s;
            box-shadow: 0px 2px 5px 1px gray;
          }

          input:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            height: 50px;
            width: 50px;
            background-color: navy;
            border-radius: 50px;
            transition: all 0.9s;
            background-color: #f7ca33;
          }

          input:checked {
            background-image: url(https://i.postimg.cc/Hn0nstVK/Screenshot-2020-04-16-at-1-07-19-PM.png);
            transition: background-image 0.9s;
          }

          input:checked:before {
            transform: translate(100%);
            transition: all 0.9s;
            background-color: #ecf0f3;
          }
        `}
      </style>
    </header>
  );
}
