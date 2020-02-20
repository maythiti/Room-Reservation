import { RoomState, LoadStatus, RoomAction, RoomActionType } from "./type";

const initialState: RoomState = {
  rooms: [],
  status: LoadStatus.Loading
};

function roomReducer(state = initialState, action: RoomAction): RoomState {
  switch (action.type) {
    case RoomActionType.GetRoom: {
      console.log("reducer getroom : ", action.payload);
      return action.payload;
    }

    case RoomActionType.AddRoom: {
      console.log("reducer addroom : ", action.payload);
      const { status, room } = action.payload;
      return { ...state, status, rooms: [...state.rooms, { ...room }] };
    }

    case RoomActionType.DeleteRoom: {
      console.log("reducer deleteroom : ", action.payload);
      const { status, room } = action.payload;
      return { ...state, status };
    }

    default:
      return state;
  }
}

export default roomReducer;
