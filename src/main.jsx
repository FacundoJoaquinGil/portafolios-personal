import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)

// import ReactDOM from "react-dom/client";
// import { App } from './App'
// import i18n from "./i18n";
// import './index.css'
// import './i18n';

// i18n.on("initialized", () => {
//   ReactDOM.createRoot(document.getElementById("root")!).render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// });
