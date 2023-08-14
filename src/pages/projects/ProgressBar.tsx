// import React, { useState } from "react";
// import * as styles from "./ProgressBar.css";

// // Generate some dummy data
// const DUMMY_DATA = Array.from({ length: 100 }, (x, i) => {
//   return {
//     id: i,
//     title: `Item ${i}`,
//   };
// });

// export default function ProgressBar(){
//   const [progress, setProgress] = useState(0);

//   // This function is triggered when the user scroll
//   const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
//     const containerHeight = event.currentTarget.clientHeight;
//     const scrollHeight = event.currentTarget.scrollHeight;

//     const scrollTop = event.currentTarget.scrollTop;
//     setProgress(((scrollTop + containerHeight) / scrollHeight) * 100);
//   };

//   return (
//     <>
//       {/* The container */}
//       <div className={styles.container} onScroll={scrollHandler}>
//         {/* The list */}
//         <div className={styles.list}>
//           {DUMMY_DATA.map((item) => (
//             // A single item
//             <div className={styles.item} key={item.id}>
//               {item.title}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* The progress bar */}
//       <div className={styles.progressBar}>
//         <div className={{ ...styles.progressValue, width: `${progress}%` }}></div>
//       </div>
//       <p className={styles.text}>{progress.toFixed(2)}%</p>
//     </>
//   );
// };
