import Document, { Head, Html, Main, NextScript } from "next/document";

const MyDocument = () => {
    return (
        <Html>
            <Head>
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                />
                
                <script
                    dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `,
                    }}
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export const getInitialProps = async (context: any) => {
    const initialProps = await Document.getInitialProps(context);
    return ({
        ...initialProps
    })
}

export default MyDocument
