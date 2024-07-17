import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/navbar";


const test = () => {
    return (
        <div>  
            <Head>
                <title>
                    酷酷的落點分析
                </title>
            </Head>
            <Navbar/>
            Hello Next.js
            <h1>
                goto <Link href="/about">about!</Link>
            </h1>
        </div>
    )
}

export default test;