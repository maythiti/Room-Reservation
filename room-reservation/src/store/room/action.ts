import axios from "axios";
import { ThunkAction } from "redux-thunk";
import {
  LoadStatus,
  RoomState,
  Room,
  RoomActionType,
  RoomAction
} from "./type";
import { RootState } from "..";

export function fetchRoom(): ThunkAction<void, RootState, void, RoomAction> {
  return async dispatch => {
    console.log("fetching room...");
    dispatch({
      type: RoomActionType.GetRoom,
      payload: {
        status: LoadStatus.Loading,
        rooms: []
      }
    });

    try {
      const res = await axios.get<[]>(
        "http://roombooking-env.xfercke39p.ap-southeast-1.elasticbeanstalk.com/bookings"
      );
      console.log("fetchRoom : ", res.data);
      dispatch({
        type: RoomActionType.GetRoom,
        payload: {
          status: LoadStatus.Ok,
          rooms: res.data
        }
      });
    } catch (err) {
      dispatch({
        type: RoomActionType.GetRoom,
        payload: {
          status: LoadStatus.Error,
          rooms: []
        }
      });
    }
  };
}

export function addRoom(
  req: Partial<Room>
): ThunkAction<void, RootState, void, RoomAction> {
  return async dispatch => {
    console.log("addRoom request : ", req);

    try {
      const res = await axios.post(
        "http://roombooking-env.xfercke39p.ap-southeast-1.elasticbeanstalk.com/bookings",
        req
      );

      const { data } = res;

      dispatch({
        type: RoomActionType.AddRoom,
        payload: {
          status: LoadStatus.Loading,
          room: data as Room
        }
      });
    } catch (error) {
      dispatch({
        type: RoomActionType.AddRoom,
        payload: {
          status: LoadStatus.Error,
          room: {}
        }
      });
    }
  };
}

export function deleteRoom(
  id: number
): ThunkAction<void, RootState, void, RoomAction> {
  return async dispatch => {
    try {
      const res = await axios.delete(
        `http://roombooking-env.xfercke39p.ap-southeast-1.elasticbeanstalk.com/bookings/${id}`
      );
      dispatch({
        type: RoomActionType.AddRoom,
        payload: {
          status: LoadStatus.Loading,
          room: res.data
        }
      });
    } catch (err) {
      dispatch({
        type: RoomActionType.AddRoom,
        payload: {
          status: LoadStatus.Error,
          room: {}
        }
      });
    }
  };
}
