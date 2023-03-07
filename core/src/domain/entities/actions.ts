export interface IAction {
  id?: string;
  name: string;
  code: string;
  desc: string;

  createdAt: string;
  updatedAt: string;
}

export interface IResourceAction {
  id?: string;
  createdAt: string;
  updatedAt: string;
  actionId: string;
  resourceId: string;
}
