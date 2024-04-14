"use server";

export async function SerachImage(formData: FormData) {
  const keyword = formData.get("keyword");

  try {
    const response = await fetch(
      `http://localhost:3000/api/Serach/?search=${keyword}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }

  // mutate data
  // revalidate cache
}
