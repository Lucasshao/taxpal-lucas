import "@/styles/tailwind.css";
import DefaultLayout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  const Layout = Component.Layout ?? DefaultLayout;
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
