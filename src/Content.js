import ItemList from "./ItemList";

const Content = ({items,handleCheck,handleDelete}) => {

    return (
        <div>
            {items.length ? (
                <ItemList items={items} handleCheck={handleCheck} handleDelete={handleDelete}/>
            ) : (
                <p style={{margin: "50px 10px",color:"grey"}}>Your List is empty</p>
            )}
        </div>
    );
};

export default Content;