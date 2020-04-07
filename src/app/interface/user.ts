/**
 * @description Interface of the users
 */
export interface User {
    users:{
        picture: string;
        fathersLastName: string;
        mothersLastName: string;
        email: string;
        roleId: string;
        active: Boolean;
        imgActive?: String;
    }
}