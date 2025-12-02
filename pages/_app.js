import "@/styles/globals.css";
import layoutStyle from "@/styles/layout.module.css";

//Layout Added
import Layout from "@/components/Layout";
import Transition from '@/components/Transition';


//router
import { useRouter } from "next/router";

//framer motion 
import { AnimatePresence, motion } from "framer-motion";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className='h-full'>
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
