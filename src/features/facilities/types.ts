export type FacilityKey = "privateRooms" | "therapeuticGarden" | "livingRoom" | "diningHall" | "physiotherapyRoom" | "recreationArea";

export interface FacilityItem {
  key: FacilityKey;
  gradientKey: FacilityKey;
}
