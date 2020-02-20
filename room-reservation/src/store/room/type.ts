
enum LoadStatus {
  Ok = "ok",
  Loading = "loading",
  Error = "error",
};

enum RoomActionType {
  GetRoom = "getRoom",
  AddRoom = "addRoom",
  DeleteRoom = "deleteroom",
};

export interface RoomState {
  rooms: any[];
  status: LoadStatus;
};

export interface Room {
  email: string;
  title: string;
  description: string;
  start: string;
  end: string;
};

interface GetRoomActionType {
  type: RoomActionType.GetRoom;
  payload: RoomState;
};

interface AddRoomActionType {
  type: RoomActionType.AddRoom;
  payload: { room: Partial<Room>; status: LoadStatus };
};

interface DeleteRoomActionType {
  type: RoomActionType.DeleteRoom;
  payload: { room: Partial<Room>; status: LoadStatus };
};

export type RoomAction = GetRoomActionType | AddRoomActionType | DeleteRoomActionType;
export {LoadStatus, RoomActionType}