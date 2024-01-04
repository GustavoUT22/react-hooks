import { useEffect, useState } from "react";

function UsingUseEffect() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  });

  return <div>{windowWidth}</div>;
}

export default UsingUseEffect;

// function UsingUseEffect() {
//   const [resourceType, setResourceType] = useState("posts");
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     console.log("resource type chaged");
//     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//       .then((response) => response.json())
//       .then((json) => setItems(json));
//   }, [resourceType]);

//   return (
//     <div>
//       <button onClick={() => setResourceType("posts")}>Posts</button>
//       <button onClick={() => setResourceType("users")}>Users</button>
//       <button onClick={() => setResourceType("comments")}>Comments</button>
//       <h1>{resourceType}</h1>
//       {items.map((item) => {
//         return <pre key={item.id}>{JSON.stringify(item)}</pre>;
//       })}
//     </div>
//   );
// }
