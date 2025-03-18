import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  //   const [data, setData] = useState({});
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Abhijeet3125")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-gray-700 text-white text-3xl w-[70%] ">
      Github Follwers: {data.followers}
      <div className="bg-cover bg-no-repeat size-30">
        <img src={data.avatar_url} alt="profile pic" />
      </div>
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/Abhijeet3125");
  return res.json();
};
