export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search");
  if (process.env.UNSPLASH_ACESS_KEY === undefined) {
    return Response.json({ message: "No API Key" }, { status: 400 });
  }
  const res = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${search}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: ` Client-ID ${process.env.UNSPLASH_ACESS_KEY}`,
      },
    }
  );
  const data = await res.json();

  return Response.json({ data });
}
