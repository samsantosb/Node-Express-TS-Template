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
    try {
      const users: User[] = await this.userService.getAllUsers();

      if (users.length === 0) {
        return res.status(StatusCode.NOT_FOUND).json({
          message: "No users found",
        });
      }

      res.status(StatusCode.OK).json(users);
    } catch (error) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR).json(error);
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const user = await this.userService.getUserById(req.params.id);

      if (user === null) {
        return res.status(StatusCode.NOT_FOUND).json({
          message: "User not found",
        });
      }

      res.status(StatusCode.OK).json(user);
    } catch (error) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR).json(error);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const user = new this.UserDto(
        await this.userService.createUser(req.body)
      );

      if (user === null) {
        return res.status(StatusCode.BAD_REQUEST).json({
          message: "User not created",
        });
      }

      res.status(StatusCode.CREATED).json(user);
    } catch (error) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR).json(error);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const user = new this.UserDto(
        await this.userService.update(req.params.id, req.body)
      );

      if (user === null) {
        return res.status(StatusCode.NOT_FOUND).json({
          message: "User not found",
        });
      }

      res.status(StatusCode.OK).json(user);
    } catch (error) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR).json(error);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const user = await this.userService.delete(req.params.id);

      if (user === null) {
        return res.status(StatusCode.NOT_FOUND).json({
          message: "User not found",
        });
      }

      res.status(StatusCode.OK).json(user);
    } catch (error) {
      res.status(StatusCode.INTERNAL_SERVER_ERROR).json(error);
    }
  }
}
