import {
  MedicalDTO,
  GetMedicalsUsingGETSortByEnum,
  MedicalTypeDTO,
  OperationOpts,
} from "../../../generated";
import { TUserCredentials } from "../../../state/main/types";
import { IApiResponse, TAPIResponseStatus } from "../../../state/types";

export interface IStateProps {
  userCredentials: TUserCredentials;
  medicalSearchResults: Array<MedicalDTO> | undefined;
  medicalTypeResults: Array<MedicalTypeDTO> | undefined;
  searchStatus: TAPIResponseStatus;
  deleteStatus: TAPIResponseStatus;
  medicalTypeStatus: TAPIResponseStatus;
  medicalTypesOptions: { value: string; label: string }[];
  medical: IApiResponse<MedicalDTO>;
  isDeleted: boolean;
}

export interface IDispatchProps {
  getMedicals: (sortBy?: GetMedicalsUsingGETSortByEnum) => void;
  getMedicalTypes: (operation: OperationOpts) => void;
  deleteMedical: (code: number) => void;
}

export type TProps = IStateProps & IDispatchProps;

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

export type TActivityTransitionState =
  | "IDLE"
  | "TO_NEW_MEDICAL"
  | "TO_EDIT_MEDICAL"
  | "TO_DELETE_MEDICAL";

export const reportTypes = [
  "Report of stock",
  "Report of order",
  "Report of stock card",
];

export const initialValues: TValues = {
  code: "",
  prod_code: "",
  type: "",
  description: "",
  initialqty: "",
  pcsperpck: "",
  inqty: "",
  outqty: "",
  minqty: "",
};

