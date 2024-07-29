import {Routes,Route} from"react-router-dom";
import Details from "./components1/Details";
import Home from "./components1/Home";
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
  
  return (
    <div className="h-screen w-screen flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Details/:id" element={<Details />} />
      </Routes>
      
    </div>
  )
}







export default App;