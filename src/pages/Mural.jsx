import React, { useState } from "react";
// import './App.css';
import Screensaver from "../components/dashboard/idleScreen";

const Mural = () => {
  const [showSS, setShowSS] = useState(false);

  return (
    <div className="App">
      <Screensaver setShowScreenSaver={setShowSS} />
      {!showSS && (
        <iframe
          style={{ height: "100vh", width: "100%" }}
          src="https://sandcastle.cesium.com/standalone.html#c=dVHBTtwwEP2VUU5ZKdi7QIugYVWxPRZRFdRecjHO7MaqY0czk6Cl4t/rJIBa2N48z++9eTNjY2CBweEDElxCwAfYILu+VT8mLK8yO9WbGMS4gFRlBfyuAoAgUUK+URxcjXTxIrSERvBnJF/fzZR8UVThafGpClWYWym2GFB15FonbkBWpq7zfwxuuL3qna9d2HG+OCC2pkUyauv3dzGfEtXI4oIRF8Nrmo0hSS8TTtSWYvsFd4TI+dHZqVquzgs4XaqP56vjAs4+LMeYAJEcpllnl8kXoEEzBnl1vTbSKInfE2oC58fPUoDOiW3+Rzt64T3N+4CsyEqWvcf1rAb47NoukkBPPldKC7adT8tgfd/bXyjKMo+rGKml/lta1m4AV18euBdYb5jTz7b3/tY9YpWtS53476Q+TmPeDEje7Edas1p/nUGlVKlTeVgpMfp7Q2+c03yNSMcXWrMJtTUsPh3u+cyx1TvjPdJe/wE"
        />
      )}
    </div>
  );
};

export default Mural;
