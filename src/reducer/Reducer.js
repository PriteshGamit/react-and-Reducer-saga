const initialstate ={
    age: 20
};

const Reducer =(state=initialstate,action) =>{
    const newstate={...state};

    switch (action.type) {
        case "AGE_UP_ASYNC":
            newstate.age +=action.value;
            break;
        case "AGE_DOWN":
            newstate.age -=action.value;
            break;
        default:
            return newstate;
    }
    return newstate
};
export default Reducer;
