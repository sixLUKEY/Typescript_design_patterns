declare namespace Examples {
  interface IUserExample {
    readonly id: string;
    email: string;
    firstName: string;
    lastName: string;
    fullName(): [string, string];
    isAdmin: boolean;
  }

  interface IAdminUser extends IUserExample {
    permissions: string[];
    team: string;
  }
}

/**
 * 
 * let user : Examples.IAdminUser
    user = {
    id: randomUUID(),
    email: '',
    firstName: '',
    lastName: '',
    fullName(){
        return [user.firstName, user.lastName]
    },
    team: '',
    isAdmin: true,
    permissions: []
    }
 */
