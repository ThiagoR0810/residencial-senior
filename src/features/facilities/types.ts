export type FacilityKey = "privateRooms" | "therapeuticGarden" | "livingRoom" | "diningHall" | "physiotherapyRoom" | "recreationArea";

export interface FacilityItem {
  key: FacilityKey;
  gradient: string;
}
