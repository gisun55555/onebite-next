import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <header>
  <a href={'/'}>index</a>
  %nbsp
  <Link href={'/book/3'}>book/3</Link>
  %nbsp
  <Link href={'/search'}>search</Link>
  </header>
  <Component {...pageProps} />;
  </>
}
