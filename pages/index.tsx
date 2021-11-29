import type { GetStaticProps } from "next"
import { ReactElement, useState } from "react";
import MainLayout from "../components/templates/MainLayout";
import { NextPageWithLayout } from "./_app";
import * as ga from "../lib/ga";

interface HomeProps {
	home: string;
}

const Home: NextPageWithLayout<HomeProps> = (props) => {

	const [query, setQuery] = useState("");

	const search = () => {
		ga.event({
			action: "search",
			params : {
				search_term: query
			}
		})
	}

	return (
		<div>
			<h1>Home page: {props.home}</h1>
			<div>
				<input type="text" onChange={(event) => setQuery(event.target.value)} />
			</div>
			<div>
				<button onClick={() => search()}>Search</button>
			</div>
		</div>
	);
}


export const getStaticProps: GetStaticProps = () => {
	const props: HomeProps = {
		home: "HOME"
	}
	return ({
		props
	});
}

Home.getLayout = (page: ReactElement) => {
	return (
	<>
		<MainLayout>
			{page}
		</MainLayout>
		<h2>Custom Home Layout</h2>
	</>
	);
}

export default Home
