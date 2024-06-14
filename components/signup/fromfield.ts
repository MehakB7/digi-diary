import { FormFieldType } from "./type";

export const FromFields : FormFieldType[] = [
    {
        name:"name",
        type:"text",
        label:"Name",
        placeholder:"Enter your full name",
    },
    {
        name:"email",
        type:"email",
        label:"Email",
        placeholder:"Enter your email",
    },
    {
        name:"password",
        type:"password",
        label:"Password",
        placeholder:"Enter your password",
    }
]