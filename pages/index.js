import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";


const test = () => {
    return (
        <Layout>  
            <Head>
                <title>
                    酷酷的落點分析
                </title>
            </Head>
            Hello Next.js
            <h1>
                goto <Link href="/about">about!</Link>
            </h1>
        </Layout>
    )
}

export default test;