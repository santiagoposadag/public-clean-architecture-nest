import { NotAcceptableException } from "@nestjs/common";

export class WrongTitleExcpetion extends NotAcceptableException {
    message:string;
    constructor(exceptionMessage:string){
        super(exceptionMessage);
    }
}