export interface IerrorsYup {
    errors: [string];
}

export interface ICreateFood{
    nutritionalInfo: string,
    type: string
}

export interface ICreateRecipe{
    author: string,
    type: string,
    foods: ICreateFood[] | ICreateFood
}