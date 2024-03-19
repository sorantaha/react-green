import postData from "src/Forms/Post/data";

export default function ViewUsers() {

  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);


  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       ""
  //     );
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch data");
  //     }
  //     const data = await response.json();
  //     setPosts(data);
  //     setLoading(false);
  //   } catch (error) {
  //     setError(error.message);
  //     setLoading(false);
  //   }
  // };

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>Error: {error}</p>;
  // }

  return (
    <div className="w-4/5 h-auto absolute right-0">
      <p className="text-3xl tracking-wider font-bold mt-10 ml-6">
        All Users
      </p>
      <div className="w-11/12 py-10 mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-8">
          <div className="">
            <div className="flex gap-4"></div>

            <form
              action=""
              method=""
              className="w-full h-[30rem] overflow-auto scrollbar-hide mt-4 border-y-2"
            >
              <table className="w-full h-auto">
                <tr className="bg-gray-300">
                  <th>ID</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Password</th>
                  <th>Photo</th>
                </tr>
                {postData.map((users) => (
                  <tr className="odd:bg-gray-300  text-center">
                    <td>{users.id}</td>
                    <td>{users.title}</td>
                    <td>{users.phone}</td>
                    <td>{users.email}</td>
                    <td>{users.address}</td>
                    <td>{users.password}</td>
                    <td className="w-auto flex justify-center items-center">
                      <img
                        src={users.src}
                        alt=""
                        className="size-9 rounded-sm"
                      />
                    </td>
                  </tr>
                ))}
              </table>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
