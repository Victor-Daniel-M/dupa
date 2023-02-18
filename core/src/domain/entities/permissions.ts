import { CString } from '../value-objects/string';

export class Permission {
  id: CString;
  entityId: CString;
  entityName: CString;
  resourceActionId: CString;
}
