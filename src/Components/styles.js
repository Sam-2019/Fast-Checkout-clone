import styled from "styled-components";

export const Body = styled.div`
background-color: #ffffff34;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
  sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
transition: margin 0.5s;
-webkit-transition: all ease-in-out 0.5s;
transition: all ease-in-out 0.5s;
`;

export const Popup = styled.div`
position: fixed;
left: 0;
right: 0;
bottom: 0;
top: 0;
background-color: white;
-webkit-transition: all ease 0.7s;
transition: all ease 0.7s;
z-index: 11;
animation-name: fade-in;
animation-duration: 0.5s;
animation-delay: 0s;
animation-fill-mode: forwards;
display: flex;
flex-direction: column;
align-content: center;

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
`;