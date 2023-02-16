import { CString } from '../value-objects/string';

export class Resource {
  id: CString;
  name: CString;
  code: CString;
  desc: CString;

  createdAt: CString;
  updatedAt: CString;
}
