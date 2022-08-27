import ListItem from "./ListItem";

const List = ({items}) => {
  return (
    <ul className="ulList">
        {items.map(item => <ListItem key={item.key} item={item}/>)}
    </ul>
  )
}

export default List;