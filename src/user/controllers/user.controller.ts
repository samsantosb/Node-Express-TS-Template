import { IDtoConstructor } from "./../dtos/user.dto";
import { StatusCode } from "../../utils/status.code";
import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { User } from "../models/user.model";

export class UserController {
  constructor(
    private readonly UserDto: IDtoConstructor,
    private readonly userService: UserService
  ) {}

  async getAll(req: Request, res: Response) {
    const reponse = await this.userService.getAll();

    if ("error" in reponse) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR).json(reponse);
      return;
    }
    res.status(StatusCode.OK).json(reponse);
  }

  async getById(req: Request, res: Response) {
    const reponse = await this.userService.getById(req.params.id);

    if ("error" in reponse) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR).json(reponse);
      return;
    }

    res.status(StatusCode.OK).json(reponse);
  }

  async create(req: Request, res: Response) {
    const body = { id: req.params.id, ...req.body };
    const validUser = new this.UserDto(body);

    if (validUser) {
      const reponse = await this.userService.create(validUser);
      if ("error" in reponse) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).json(reponse);
      }

      res.status(StatusCode.CREATED).json(reponse);
    }
  }

  async update(req: Request, res: Response) {
    const body = { id: req.params.id, ...req.body };
    const validUser = new this.UserDto(body);
    if (validUser) {
      const reponse = await this.userService.update(req.params.id, validUser);

      if ("error" in reponse) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).json(reponse);
        return;
      }

      res.status(StatusCode.OK).json(reponse);
    }
  }

  async delete(req: Request, res: Response) {
    const reponse = await this.userService.delete(req.params.id);

    if ("error" in reponse) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR).json(reponse);
    }

    res.status(StatusCode.OK).json(reponse);
  }
}
