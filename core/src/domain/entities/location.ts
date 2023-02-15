import { Decimal } from '../value-objects/decimal';
import { CString } from '../value-objects/string';

export class Location {
  id: CString;
  entityName: CString;
  entityId: CString;
  lat: Decimal;
  lng: Decimal;
  name: CString;
  createdAt: CString;
  updatedAt: CString;
}
