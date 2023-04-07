import React, { useEffect } from "react";
import database from "../Backend/Firebase";

// const FetchData = (props) => {
//   const dbname = props.dbname;
//   const info = props.info;
//   const dbGetData = async (dbname) => {
//     await database.child({ dbname }).on("value", (snapshot) => {
//       if (snapshot.val() !== null) {
//         const value = Object.values({ ...snapshot.val() });
//         return value;
//       } else {
//         return {};
//       }
//     });
//   };
//   useEffect(() => {
//     dbGetData(dbname);
//   }, []);
// };

// export default FetchData;

const dbGetData = async (dbname) => {
  await database.child(dbname).on("value", (snapshot) => {
    if (snapshot.val() !== null) {
      const value = Object.values({ ...snapshot.val() });
      return value;
    } else {
      return {};
    }
  });
};

export default dbGetData;
