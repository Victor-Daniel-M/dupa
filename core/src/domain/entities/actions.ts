export class Action {
  id: string;
  name: string;
  code: string;
  desc: string;

  createdAt: string;
  updatedAt: string;
}

export class ResourceAction {
  id: string;
  createdAt: string;
  updatedAt: string;
  actionId: string;
  resourceId: string;
}
