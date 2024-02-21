import "@styles/globals.css";
import { useEffect, useState } from "react";

const getTime = async () => {
  const response = await fetch("http://worldtimeapi.org/api/ip");
  const data = await response.json(); // Parse JSON response
  return data.datetime; // Return only the datetime property
};

function Application({ Component, pageProps }) {
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    const fetchTime = async () => {
      const time = await getTime();
      setCurrentTime(time);
    };
    fetchTime();
  }, []);

  return <p>{currentTime}</p>;
}

export default Application;
