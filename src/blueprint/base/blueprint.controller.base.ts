/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { BlueprintService } from "../blueprint.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { BlueprintCreateInput } from "./BlueprintCreateInput";
import { Blueprint } from "./Blueprint";
import { BlueprintFindManyArgs } from "./BlueprintFindManyArgs";
import { BlueprintWhereUniqueInput } from "./BlueprintWhereUniqueInput";
import { BlueprintUpdateInput } from "./BlueprintUpdateInput";
import { StakeFindManyArgs } from "../../stake/base/StakeFindManyArgs";
import { Stake } from "../../stake/base/Stake";
import { StakeWhereUniqueInput } from "../../stake/base/StakeWhereUniqueInput";
import { TransactionFindManyArgs } from "../../transaction/base/TransactionFindManyArgs";
import { Transaction } from "../../transaction/base/Transaction";
import { TransactionWhereUniqueInput } from "../../transaction/base/TransactionWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class BlueprintControllerBase {
  constructor(
    protected readonly service: BlueprintService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Blueprint })
  @nestAccessControl.UseRoles({
    resource: "Blueprint",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createBlueprint(
    @common.Body() data: BlueprintCreateInput
  ): Promise<Blueprint> {
    return await this.service.createBlueprint({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        aiData: true,
        buyPair: true,
        createdAt: true,
        description: true,
        exchange: true,
        expiry: true,
        id: true,
        maxOrder: true,
        minOrder: true,
        name: true,
        sellPair: true,
        stake: true,
        stakeAmount: true,
        stopLoss: true,
        successRate: true,
        takeProfit: true,
        tradeType: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Blueprint] })
  @ApiNestedQuery(BlueprintFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Blueprint",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async blueprints(@common.Req() request: Request): Promise<Blueprint[]> {
    const args = plainToClass(BlueprintFindManyArgs, request.query);
    return this.service.blueprints({
      ...args,
      select: {
        aiData: true,
        buyPair: true,
        createdAt: true,
        description: true,
        exchange: true,
        expiry: true,
        id: true,
        maxOrder: true,
        minOrder: true,
        name: true,
        sellPair: true,
        stake: true,
        stakeAmount: true,
        stopLoss: true,
        successRate: true,
        takeProfit: true,
        tradeType: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Blueprint })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Blueprint",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async blueprint(
    @common.Param() params: BlueprintWhereUniqueInput
  ): Promise<Blueprint | null> {
    const result = await this.service.blueprint({
      where: params,
      select: {
        aiData: true,
        buyPair: true,
        createdAt: true,
        description: true,
        exchange: true,
        expiry: true,
        id: true,
        maxOrder: true,
        minOrder: true,
        name: true,
        sellPair: true,
        stake: true,
        stakeAmount: true,
        stopLoss: true,
        successRate: true,
        takeProfit: true,
        tradeType: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Blueprint })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Blueprint",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateBlueprint(
    @common.Param() params: BlueprintWhereUniqueInput,
    @common.Body() data: BlueprintUpdateInput
  ): Promise<Blueprint | null> {
    try {
      return await this.service.updateBlueprint({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          aiData: true,
          buyPair: true,
          createdAt: true,
          description: true,
          exchange: true,
          expiry: true,
          id: true,
          maxOrder: true,
          minOrder: true,
          name: true,
          sellPair: true,
          stake: true,
          stakeAmount: true,
          stopLoss: true,
          successRate: true,
          takeProfit: true,
          tradeType: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Blueprint })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Blueprint",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteBlueprint(
    @common.Param() params: BlueprintWhereUniqueInput
  ): Promise<Blueprint | null> {
    try {
      return await this.service.deleteBlueprint({
        where: params,
        select: {
          aiData: true,
          buyPair: true,
          createdAt: true,
          description: true,
          exchange: true,
          expiry: true,
          id: true,
          maxOrder: true,
          minOrder: true,
          name: true,
          sellPair: true,
          stake: true,
          stakeAmount: true,
          stopLoss: true,
          successRate: true,
          takeProfit: true,
          tradeType: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/stakes")
  @ApiNestedQuery(StakeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Stake",
    action: "read",
    possession: "any",
  })
  async findStakes(
    @common.Req() request: Request,
    @common.Param() params: BlueprintWhereUniqueInput
  ): Promise<Stake[]> {
    const query = plainToClass(StakeFindManyArgs, request.query);
    const results = await this.service.findStakes(params.id, {
      ...query,
      select: {
        amount: true,

        blueprint: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        status: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/stakes")
  @nestAccessControl.UseRoles({
    resource: "Blueprint",
    action: "update",
    possession: "any",
  })
  async connectStakes(
    @common.Param() params: BlueprintWhereUniqueInput,
    @common.Body() body: StakeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      stakes: {
        connect: body,
      },
    };
    await this.service.updateBlueprint({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/stakes")
  @nestAccessControl.UseRoles({
    resource: "Blueprint",
    action: "update",
    possession: "any",
  })
  async updateStakes(
    @common.Param() params: BlueprintWhereUniqueInput,
    @common.Body() body: StakeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      stakes: {
        set: body,
      },
    };
    await this.service.updateBlueprint({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/stakes")
  @nestAccessControl.UseRoles({
    resource: "Blueprint",
    action: "update",
    possession: "any",
  })
  async disconnectStakes(
    @common.Param() params: BlueprintWhereUniqueInput,
    @common.Body() body: StakeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      stakes: {
        disconnect: body,
      },
    };
    await this.service.updateBlueprint({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/transactions")
  @ApiNestedQuery(TransactionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Transaction",
    action: "read",
    possession: "any",
  })
  async findTransactions(
    @common.Req() request: Request,
    @common.Param() params: BlueprintWhereUniqueInput
  ): Promise<Transaction[]> {
    const query = plainToClass(TransactionFindManyArgs, request.query);
    const results = await this.service.findTransactions(params.id, {
      ...query,
      select: {
        amount: true,

        blueprint: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        status: true,
        transactionDate: true,
        typeField: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/transactions")
  @nestAccessControl.UseRoles({
    resource: "Blueprint",
    action: "update",
    possession: "any",
  })
  async connectTransactions(
    @common.Param() params: BlueprintWhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactions: {
        connect: body,
      },
    };
    await this.service.updateBlueprint({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/transactions")
  @nestAccessControl.UseRoles({
    resource: "Blueprint",
    action: "update",
    possession: "any",
  })
  async updateTransactions(
    @common.Param() params: BlueprintWhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactions: {
        set: body,
      },
    };
    await this.service.updateBlueprint({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/transactions")
  @nestAccessControl.UseRoles({
    resource: "Blueprint",
    action: "update",
    possession: "any",
  })
  async disconnectTransactions(
    @common.Param() params: BlueprintWhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactions: {
        disconnect: body,
      },
    };
    await this.service.updateBlueprint({
      where: params,
      data,
      select: { id: true },
    });
  }
}
