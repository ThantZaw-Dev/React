// import { MouseEvent } from "react";
import { useState } from "react";

//{ item:[], heading: string }

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}


function ListGroup({ items, heading , onSelectItem }: Props) {
  //let selectedIndex = 0;

  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //Event handler
  // const handleClick = (event: MouseEvent) => console.log(event);


  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item Found</p>};
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
