import { StarFill,StarHalf,Star as StarEmpty } from "react-bootstrap-icons"

export const FiveStarRating = ({rating}) =>{

    const starList = [];
    const starFillCount = Math.floor(rating); //number of filled star
    const hasHalfStar = rating - parseInt(rating) >= 0.5; //rating is decimal,for ex: 3.4 ==> 3.4 - 3 >= 0.5 : false
    const emptyStarCount = 5 - starFillCount - (hasHalfStar ? 1 : 0); 

    //adding filled star to the array
    for (let i = 1; i <= starFillCount; i++) {
        starList.push(<StarFill key={"star-fill" + i} />);
    }

    //adding half star to the array
    if(hasHalfStar){
        starList.push(<StarHalf key={"star-half"}/>);
    }

    //adding empty star to the array
    for (let i = 1; i <= emptyStarCount; i++) {
        starList.push(<StarEmpty key={"star-empty" + i}/>);
    }

    return <div>{starList}</div>
}