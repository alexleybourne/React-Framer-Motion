import { useEffect, useState } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"
import "./sass/main.scss";
import "./animation";

// Components
import Header from "./components/Header";
import Banner from "./components/Banner";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence>
        {loading ? (
          <motion.div key='loader'>
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Header />
            <Banner />
            {!loading && (
              <div className="transition-image final">
                <motion.img
                  src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
                  alt="studio"
                  layoutId="main-image-1"
                  transition={{ease: global.animation.magicEase, duration: 1.6}}
                />
              </div>
            )}
          </>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default App;
