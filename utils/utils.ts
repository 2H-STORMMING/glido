export async function fetchData(search: string) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  //const dispatch = useDispatch();
  if (!search) return;
  try {
    const res = await fetch(
      `http://localhost:3000/api/Serach/?search=${search}&page=2&per_page=20`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchCollection(search: string) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  //const dispatch = useDispatch();
  if (!search) return;
  try {
    const res = await fetch(
      `http://localhost:3000/api/Serach/collection?search=${search}&page=2&per_page=20`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
