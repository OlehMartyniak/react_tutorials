import ItemList from "./ItemList";

const Content = ({items,handleCheck,handleDelete}) => {

    return (
        <main>
            {items.length ? (
                <ItemList items={items} handleCheck={handleCheck} handleDelete={handleDelete}/>
            ) : (
                <p style={{margin: "50px 0",color:"grey"}}>Your List is empty</p>
            )}
        </main>
    );
};

export default Content;