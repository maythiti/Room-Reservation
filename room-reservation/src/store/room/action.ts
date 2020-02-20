import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { RoomState, RoomAction, LoadStatus, RoomActionType } from "./type";

export function fetchRoom(): ThunkAction<void, RootState, void, RoomAction> {
  return async dispatch => {
    // dispatch(setWord(LoadStatus.Loading, ''));
    dispatch({
      type: RoomActionType.GetRoom,
      payload: {
        status: LoadStatus.Loading,
        rooms: []
      }
    });

    try {
        const res = await axios.get("http://roombooking-env.xfercke39p.ap-southeast-1.elasticbeanstalk.com/bookings")
        console.log('res axios.get ', res);
        dispatch({
            type: RoomActionType.GetRoom,
            payload: {
                status: LoadStatus.Ok,
                rooms: res.data
            }
        })
    } catch (err) {
        dispatch({
            type: RoomActionType.GetRoom,
            payload: {
                status: LoadStatus.Error,
                rooms: []
            }
        })
    }
  };
}
