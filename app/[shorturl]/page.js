import { redirect} from "next/navigation"
import clientPromise from "@/lib/mongodb"



export default async function Page({ params }) {
  const shorturl = (await params).shorturl
    const client = await clientPromise;
    const db = client.db("bitlinks")
    const collection = db.collection("url")
    const existingUrl = await collection.findOne({ shorturl: shorturl });

    console.log(existingUrl);
    if (existingUrl) {
        redirect(existingUrl.url)
    }else{
        redirect(`${process.env.NEXT_PUBLIC_HOST}`)
    }


  return <div>My Post: {url}</div>
}

