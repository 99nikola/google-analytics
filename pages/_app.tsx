import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '../components/templates/MainLayout'
import { NextPage } from 'next';
import { ReactElement, ReactNode, useEffect } from 'react';
import { useRouter } from "next/router";
import * as ga from "../lib/ga";

export type NextPageWithLayout<T> = NextPage<T> & {
	getLayout?: (page: ReactElement) => ReactNode
}
  
type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout<any>
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url: any) => {
			ga.pageview(url)
		  }
		  //When the component is mounted, subscribe to router changes
		  //and log those page views
		  router.events.on('routeChangeComplete', handleRouteChange)
	  
		  // If the component is unmounted, unsubscribe
		  // from the event with the `off` method
		  return () => {
			router.events.off('routeChangeComplete', handleRouteChange)
		  }
	}, [router.events]);

	const getLayout = Component.getLayout || ((page: ReactNode) => <MainLayout>{page}</MainLayout>);
	return getLayout(<Component {...pageProps} />);
}

export default MyApp
