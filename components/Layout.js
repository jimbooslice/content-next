import Head from 'next/head';

export default function Layout({ children, config }) {
    return (
        <div>
            <Head>
                <title>{config.title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>{config.title}</h1>
            <h2>{config.tagline}</h2>
            {children}
        </div>
    );
}