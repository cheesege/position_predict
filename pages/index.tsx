import Link from "next/link";
import Head from "next/head";


const test = () => {
    return (
        <div>  
            <Head>
                <title>
                    酷酷的落點分析
                </title>
            </Head>
            Hello Next.js
            <h1>
                goto <Link href="/about">about!</Link>
            </h1>
        </div>
    )
}

export default test;