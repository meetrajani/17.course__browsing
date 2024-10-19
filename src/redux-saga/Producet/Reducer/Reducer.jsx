import { GET_COURES_ERROR, GET_COURES_PROGRESS, GET_COURES_SUCCESS } from "../Action/Action"

const initlSatus = {
    coueres : [],
    coures_progress : false,
    coures_error : null,
    
    dataIsLodad : true
}

const getCouresReducer = (status=initlSatus,action) =>{
    switch (action.type){
        case GET_COURES_PROGRESS : {
            return{
                ...status,
                coures_progress : true
            }
        }
        case GET_COURES_SUCCESS : {
            return{
                ...status,
                dataIsLodad : true,
                coueres : action.data
            }
        }
        case GET_COURES_ERROR : {
            return{
                ...status,
                coures_error : action.data      
            }
        }

        default : {
            return{
                ...status,
            }
        }
    }
}

export default getCouresReducer;
