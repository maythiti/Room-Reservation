export interface RoomState {
  rooms: any[];
  status: LoadStatus;
}

export interface Room { 
  email: string,
  title: string,
  description: string,
  start: string,
  end: string,

}

export enum LoadStatus {
  Ok = "ok",
  Loading = "loading",
  Error = "error"
}

export enum RoomActionType {
  GetRoom = "getRoom",
  AddRoom = "addRoom",
  DeleteRoom = "deleteroom"
}

interface GetRoomActionType {
  type: RoomActionType.GetRoom;
  payload: RoomState;
}

interface AddRoomActionType {
  type: RoomActionType.AddRoom;
  payload: { room : Partial<Room>, status: LoadStatus }
}

interface DeleteRoomAction {
  type: RoomActionType.DeleteRoom;
  payload: {room : Partial<Room>, status: LoadStatus}
}

export type RoomAction = GetRoomActionType | AddRoomActionType | DeleteRoomAction