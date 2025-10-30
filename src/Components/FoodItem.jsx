import Item from "./Item.jsx";
function FoodItem(props){
    let food = props.food;
    return (
        <>
        <ul>
            {food.map((item)=><Item value={item} />)}
        </ul>
        </>
    );
}
export default FoodItem;