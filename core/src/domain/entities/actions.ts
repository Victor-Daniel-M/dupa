import { CString } from '../value-objects/string';

export class Action {
  id: CString;
  name: CString;
  code: CString;
  desc: CString;

  createdAt: CString;
  updatedAt: CString;
}

export class ResourceAction {
  id: CString;
  createdAt: CString;
  updatedAt: CString;
  actionId: CString;
  resourceId: CString;
}
