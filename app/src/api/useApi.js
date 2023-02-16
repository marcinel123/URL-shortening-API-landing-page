import React, { useEffect, useState } from "react";
import api from "./api";

export const useApi = () => {
  const [linksList, setLinksList] = useState([]);
  const [url, setUrl] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("list")) === null) {
      setLinksList([]);
    } else {
      setLinksList(JSON.parse(localStorage.getItem("list")));
    }
  }, []);

  const shortenLink = async (e) => {
    e.preventDefault();
    if (url.trim().length > 0) {
      try {
        const response = await api.get(`/shorten?url=${url}`);
        setLinksList([
          ...linksList,
          { longLink: url, shortLink: response.data.result.short_link },
        ]);
        localStorage.setItem(
          "list",
          JSON.stringify([
            ...linksList,
            { longLink: url, shortLink: response.data.result.short_link },
          ])
        );
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
      setUrl("");
    } else {
      setIsVisible(true);
      setIsVisible2(true);
    }
  };

  return {
    shortenLink,
    linksList,
    setLinksList,
    url,
    setUrl,
    isVisible,
    setIsVisible,
    isVisible2,
    setIsVisible2,
  };
};
