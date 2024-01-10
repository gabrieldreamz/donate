const useFetch = async (url: string) => {
  try {
    const res = await fetch(url, { cache: "no-store" });

    const data = await res.json();

    const transFormedData = data.data.map((data: any) => ({
      id: data._id,
      title: data.title,
      description: data.description,
      date: new Date(data.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      type: data.type,
      articleName: data.articleName,
    }));

    return transFormedData;
  } catch (error) {
    console.error(error);
  }
};

export default useFetch;
