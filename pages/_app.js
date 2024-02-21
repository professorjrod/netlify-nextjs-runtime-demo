import "@styles/globals.css";

export const revalidate = 3;

function Application({ Component, pageProps }) {
  return <p>{Date.now()}</p>;
}

export default Application;
