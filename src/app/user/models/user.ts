export interface IUserResponse{

    results:Array<IUser>;


}

export interface IUser{

    email: string;
    name:IUserName;
    phone: string;
    picture: IUserpicture;

}

export interface IUserName{

    first: string;
    last: string;
}


export interface IUserpicture{

    large: string;
    medium: string;
    thumbnail: string;


}


