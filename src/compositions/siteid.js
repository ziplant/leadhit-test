export default function useSiteId() {
  let key = "leadhit-site-id";

  const fetchSiteId = async (siteId) => {
    return new Promise((resolve) => {
      fetch("https://track-api.leadhit.io/client/test_auth", {
        method: "GET",
        headers: {
          "Api-Key": "5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo",
          "Leadhit-Site-Id": siteId,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message === "ok") {
            localStorage.setItem(key, siteId);
            resolve(true);
          }
          resolve(false);
        });
    });
  };

  const hasSiteId = () => {
    return localStorage.getItem(key) ? true : false;
  };

  const clearSiteId = () => {
    localStorage.removeItem(key);
  };

  return {
    fetchSiteId,
    hasSiteId,
    clearSiteId,
  };
}
