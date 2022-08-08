export interface IUser {
  id: number;
  name: string;
  activatedOn: Date;
  deactivatedOn?: Date | null;
  customerId?: number;
}
