import { UserDto } from "./../dtos/user.dto";
import { StatusCode } from "../../global.utils/status.code.ts";
import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { invalidBody } from "../utils/user.body.validator";
import { invalidBodyError } from "../../global.utils/error.handler";

export class UserController {
  constructor(private readonly userService: UserService) {}

  async getAll(req: Request, res: Response) {
    const reponse = await this.userService.getAll();

    if ("promiseError" in reponse) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR).json(reponse);
      return;
    }

    res.status(StatusCode.OK).json(reponse);
  }

  async getById(req: Request, res: Response) {
    const reponse = await this.userService.getById(req.params.id);

    if ("promiseError" in reponse) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR).json(reponse);
      return;
    }

    if ("invalidIdError" in reponse) {
      res.status(StatusCode.BAD_REQUEST).json(reponse);
      return;
    }

    res.status(StatusCode.OK).json(reponse);
  }

  async create(req: Request, res: Response) {
    if (invalidBody(req)) {
      res.status(StatusCode.BAD_REQUEST).json(invalidBodyError(req.body));
      return;
    }

    const body = req.body;
    const userDto = new UserDto(body);

    const reponse = await this.userService.create(userDto);
    if ("promiseError" in reponse) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR).json(reponse);
      return;
    }

    res.status(StatusCode.CREATED).json(reponse);
  }

  async update(req: Request, res: Response) {
    if (invalidBody(req)) {
      res.status(StatusCode.BAD_REQUEST).json(invalidBodyError(req.body));
      return;
    }

    const body = req.body;
    const id = req.params.id;
    const userDto = new UserDto(body);

    const reponse = await this.userService.update(id, userDto);

    if ("promiseError" in reponse) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR).json(reponse);
      return;
    }

    if ("invalidIdError" in reponse) {
      res.status(StatusCode.BAD_REQUEST).json(reponse);
      return;
    }

    res.status(StatusCode.OK).json(reponse);
  }

  async delete(req: Request, res: Response) {
    const reponse = await this.userService.delete(req.params.id);

    if ("promiseError" in reponse) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR).json(reponse);
      return;
    }

    if ("invalidIdError" in reponse) {
      res.status(StatusCode.BAD_REQUEST).json(reponse);
      return;
    }

    res.status(StatusCode.OK).json(reponse);
  }
}
