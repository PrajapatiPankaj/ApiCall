import { useEffect,useState} from "react";
import "./App.css";

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";
const [data , setData] = useState([])
const [email,setEmail]=useState();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json)=>{
              console.log(json);
              setData(json);
          })
      .catch((e) => console.log("e", e));
  }, []);

  const AddPost = ()=>{

     fetch(url, {
       method: "POST", // or 'PUT'
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(email),
     })
       .then((response) => response.json())
       .then((data) => {
         console.log("Success:", email);
       })
       .catch((error) => {
         console.error("Error:", error);
       });

      setEmail("")
  }
 

  return (
    <>
      <div className="App">
        Welcome
        {console.log("Data", data)}
        {data.map((item) => (
          <ul key={item.id}>
            <li>{item.email}</li>
          </ul>
        ))}
      </div>

      <div>
          <input type="text" name="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
          {console.log("Email", email)}
          <button onClick={AddPost}>Submit</button>
      </div>
    </>
  );
}

export default App;
