import "@styles/globals.css";

const time = () => fetch("http://worldtimeapi.org/api/ip");

function Application({ Component, pageProps }) {
  return <p>{time()}</p>;
}

export default Application;
