import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Users from "./components/Users";

// function App() {
//   let items = ["New York", "San Franciso", "Tokyo", "London", "Paris"];
//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };
//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />
//     </div>  
//   );
// }

// function App() {
//   return (
//     <div>
//       <Alert>
//         Hello <span className="text-danger"> World </span>
//       </Alert>
//     </div>
//   )
// }

// function App() {
//   const [ alertVisible, setAlertVisiblity ] = useState(false);
//   return(
//     <div>
//       { alertVisible && <Alert onClose={() => setAlertVisiblity(false)}>My Alert</Alert>}
//       <Button color="primary" onClick={()=> setAlertVisiblity(true)}>
//         My Button
//       </Button>
//     </div>
//   )
// }

function App(){

  let navItems = ["Home", "About", "Contact", "Services"];
  

  return (
    <>
      <Navbar color="dark" navItems={navItems} />
      <Users/>
    </>
  )
}

export default App;
