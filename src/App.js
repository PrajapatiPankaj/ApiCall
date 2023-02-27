import { useEffect,useState} from "react";
import "./App.css";

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";
const [data , setData] = useState([])

  // For Get Api call//
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json)=>{
            //  console.log(json);
              setData(json);
          })
      .catch((e) => console.log("e", e));
  }, []);

  //For Post Api  Call//

  const AddPost = ()=>{

      const  datap={
          name: "Pankaj",
          email:'pankaj@123',
          phone:'385421',
          username: "Pankaj Prajapati"
        }
     fetch(url, {
       method: "POST", // or 'PUT'
       headers: {
         "Content-Type": "application/json",
         'Access-Control-Allow-Origin' : '*'
       },
       body: JSON.stringify(datap),
     })
     .then((res)=> {console.log(res)
        if(res.state === 201){
            alert("success");
        }
    })
     .catch((e)=> console.log(e))
       
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
          
          <button onClick={AddPost}>Submit</button>
      </div>
    </>
  );
}

export default App;
