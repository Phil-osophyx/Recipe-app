import { useEffect, useState } from "react";

export default function Search() {
  const [query, Setquery] = useState("pizza");
  useEffect(() => {
    function demo(){
        console.log("Demo functon")
    }
    demo()
  }, [query]);
  return (
    <div>
      <input
        value={query}
        onChange={(e) => Setquery(e.target.value)}
        type="text"
      />
    </div>
  );
}
