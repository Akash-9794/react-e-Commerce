import {Link,Routes,Route, useLocation} from"react-router-dom";
import Details from "./components1/Details";
import Home from "./components1/Home";
import Create from "./components1/Create";
// import Cards from "./Components/Cards";
// import Form from "./Components/Form";

// first pro-add-user

// function App() {
//   const [users, setUsers] = useState([]);

//   const handleSubmit = (newUser) => {
//     setUsers([...users, newUser]);
//   };
//   const handleRemove = (id) =>{
//     setUsers(users.filter((item,index) => index!=id))
//   }

//   return (
//     <>
//     <div className="w-full h-[100vh] bg-zinc-200 flex items-center justify-center">
//       <div className="container mx-auto rounded">
//         <Cards handleRemove={handleRemove} users={users} />
//         <Form onSubmit={handleSubmit} />
//       </div>
//     </div>
//     </>
//   );
// }

// routing 
const App = () => {
  
  const {search,pathname} = useLocation()
  // console.log(search,pathname)
  return (
    <div className="h-screen w-screen flex ">
      {(pathname != "/" || search.length > 0) && (
        <Link to="/" className="text-red-600 text-xl pl-9 pr-9 p-1 rounded-xl hover:tracking-wider hover:bg-red-600 hover:text-blue-300   m-5 bg-blue-400 absolute top-[1%]">Home</Link>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create/>} />
        <Route path="/Details/:id" element={<Details />} />
      </Routes>
      
    </div>
  )
}







export default App;