import Head from "next/head";
import Link from "next/link";
import { API_URL } from "../../api";

const MainLayout: React.FC = (props) => {
    return (
    <>
        <Head>
            <title>NEXTJS</title>
        </Head>

        <Link href={`${API_URL}`}>
            <a>HOME</a>
        </Link>
        <br />
        <Link href={`${API_URL}/users"}`}>
            <a>USERS</a>
        </Link>
        <br />
        <Link href={`${API_URL}/products`}>
            <a>PRODUCTS</a>
        </Link>
        <br />
        
        <main>
            {props.children}
        </main>
    </>);
}

export default MainLayout
