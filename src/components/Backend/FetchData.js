import React, { useEffect } from "react";

const FetchData = (props) => {
  const dbname = props;
  const dbGetData = async (dbname) => {
    await database.child({ dbname }).on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        const value = Object.values({ ...snapshot.val() });
        return value;
      } else {
        return {};
      }
    });
  };
  useEffect(() => {
    dbGetData(dbname);
  }, []);
};

export default FetchData;
