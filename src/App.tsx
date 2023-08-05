import { createElement } from "react";
import { createRoot } from "react-dom/client";

import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  return (
    <div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(createElement(App));
