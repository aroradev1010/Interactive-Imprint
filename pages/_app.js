import "../styles/globals.css";
import Layout from "../components/Layout.js";
import Transition from "../components/Transition.js";
import Head from "next/head";
//router
import { useRouter } from "next/router";

//framer motion
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Head>
            <title>Dev | Interactive Portfolio</title>
            <link rel="icon" href="/logo.png" />
          </Head>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
