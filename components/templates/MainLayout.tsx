import Head from "next/head";
import Link from "next/link";

const MainLayout: React.FC = (props) => {
    return (
    <>
        <Head>
            <title>NEXTJS</title>
        </Head>

        <Link href="/">
            <a>HOME</a>
        </Link>
        <br />
        <Link href="/users">
            <a>USERS</a>
        </Link>
        <br />
        <Link href="/products">
            <a>PRODUCTS</a>
        </Link>
        <br />
        
        <main>
            {props.children}
        </main>
    </>);
}

export default MainLayout
