import { CompleteData, DataAction, DataActionType } from "../../types/Types";

const DataReducer = (action : DataAction,state:CompleteData,)=>{
    switch (action.type) {
        case DataActionType.IS_ERROR:
            return{
                ...state,
                is_Error : true,
                is_Loading : false,
            }
        case DataActionType.IS_LOADING:
            return{
                ...state,
                is_Loading : true,
            }
        case DataActionType.SET_DATA:
            return{
                ...state,
                is_loading : false,
                data : action.payload,
            }
        default:
            return{
                ...state,
            }
    }
}

export default DataReducer