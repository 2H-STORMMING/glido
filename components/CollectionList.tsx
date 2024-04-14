"use client";
import { fetchCollection } from "@/utils/utils";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function CollectionList() {
  const [collection, setCollection] = useState([]);
  const getCollection = async (search: string) => {
    const data = await fetchCollection(search);
    setCollection(data);
  };
  //dispatch updates the store with the state from a component
  const dispatch = useDispatch();
  //useSelector gets the state from store
  const search = useSelector((state) => {
    return state.search.value;
  }); // Access the counter state
  useEffect(() => {
    getCollection(search);
  }, []);
  return <div>CollectionList</div>;
}

export default CollectionList;
