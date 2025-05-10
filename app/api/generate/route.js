import clientPromise from "@/lib/mongodb"

export async function POST(request) {

    const body= await request.json();
    // console.log(body)
    const client = await clientPromise;
    const db = client.db("Bitlinks");
    const collection = db.collection("url");

    // Check if the URL already exists in the database
   const existingUrl = await collection.findOne({ shortUrl: body.shortUrl });
   if (existingUrl) {
        return Response.json({ success:false, error:true, message:"URL already exists" });
    }
   
    // Perform your database operations here
    // For example, inserting a document
    const result = await collection.insertOne({
        url: body.url,
        shortUrl: body.shortUrl,
        
    });    
  return Response.json({ success:true, error:false, message:"URL shortened successfully" });
 
}