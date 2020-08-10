import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          {" "}
          Hello, I am a Software Engineer you can contact me on{" "}
          <a href="https://www.linkedin.com/in/mike-stephane-k-12a70b158/">
            Linkedin
          </a>
        </p>
      </section>
    </Layout>
  );
}
