type StatusType = "error" | "success";

export interface IResponse {
  status: StatusType;
  message: string;
  data: any;
}
