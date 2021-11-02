import { string } from "yup";
import { MedicalDTO, GetMedicalsUsingGETSortByEnum } from "../../../generated";
import { TUserCredentials } from "../../../state/main/types";
import { TAPIResponseStatus } from "../../../state/types";

export interface IStateProps {
  userCredentials: TUserCredentials;
  medicalSearchResults: Array<MedicalDTO> | undefined;
  searchStatus: TAPIResponseStatus;
}

export interface IDispatchProps {
  getMedicals: (sortBy?: GetMedicalsUsingGETSortByEnum) => void;
}

export type TProps = IStateProps & IDispatchProps ; 

export type TValues = Record<TFieldName, string>;

export type TFieldName =
  | "code"
  | "prod_code"
  | "type"
  | "description"
  | "initialqty"
  | "pcsperpck"
  | "inqty"
  | "outqty"
  | "minqty";

export type TActivityTransitionState = "IDLE" | "TO_NEW_MEDICAL" | "TO_EDIT_MEDICAL";
