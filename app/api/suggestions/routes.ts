export async function GET(request: Request){
    const { searchParams } = new URL(request.url);
    const term = searchParams.get("term");

    //https://disneyclonecodekeeper.azurewebsites.net/api/getaisuggestion

    const res = await fetch(
        `https://disneyclonecodekeeper.azurewebsites.net/api/getaisuggestion?term=${term}`,
        {
            method: "GET",
            next: {
                revalidate: 60 * 60 * 24 // 24 hours
            }
        }
    );

    const message = await res.text();

    return Response.json({ message })
}