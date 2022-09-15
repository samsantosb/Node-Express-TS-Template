import { UserDto } from "./../dtos/user.dto";
import { StatusCode } from "../../global.utils/status.code";
import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { invalidBody } from "../utils/user.body.validator";

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
      res.status(StatusCode.BAD_REQUEST).json({ message: "Invalid body" });
      return;
    }

    const body = req.body;
    const validUser = new UserDto(body);

    if (validUser) {
      const reponse = await this.userService.create(validUser);
      if ("promiseError" in reponse) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).json(reponse);
      }

      res.status(StatusCode.CREATED).json(reponse);
    }
  }

  async update(req: Request, res: Response) {
    if (invalidBody(req)) {
      res.status(StatusCode.BAD_REQUEST).json({ message: "Invalid body" });
      return;
    }

    const data = { id: req.params.id, ...req.body };
    const validUser = new UserDto(data);

    if (validUser) {
      const reponse = await this.userService.update(req.params.id, validUser);

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

  async delete(req: Request, res: Response) {
    const reponse = await this.userService.delete(req.params.id);

    if ("promiseError" in reponse) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR).json(reponse);
    }

    if ("invalidIdError" in reponse) {
      res.status(StatusCode.BAD_REQUEST).json(reponse);
    }

    res.status(StatusCode.OK).json(reponse);
  }
}
