import Head from "next/head";

type Props = {
    title: string
}

export default function Home({title = "Primeiro projeto com Nextjs"}: Props) {
    return (
        <Head>
            <h1>{title}</h1>
        </Head>
    );
}
