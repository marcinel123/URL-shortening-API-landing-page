import React, { useState } from "react";
import api from "./api";

export const useShorteningApi = (url) => {
  const [linksList, setLinksList] = useState([]);

  const getApi = async () => {
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
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(`Error: ${err.message}`);
    }
  };

  return { getApi, linksList, setLinksList };
};
