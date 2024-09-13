/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Stake } from "./Stake";
import { StakeCountArgs } from "./StakeCountArgs";
import { StakeFindManyArgs } from "./StakeFindManyArgs";
import { StakeFindUniqueArgs } from "./StakeFindUniqueArgs";
import { CreateStakeArgs } from "./CreateStakeArgs";
import { UpdateStakeArgs } from "./UpdateStakeArgs";
import { DeleteStakeArgs } from "./DeleteStakeArgs";
import { Blueprint } from "../../blueprint/base/Blueprint";
import { User } from "../../user/base/User";
import { StakeService } from "../stake.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Stake)
export class StakeResolverBase {
  constructor(
    protected readonly service: StakeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Stake",
    action: "read",
    possession: "any",
  })
  async _stakesMeta(
    @graphql.Args() args: StakeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Stake])
  @nestAccessControl.UseRoles({
    resource: "Stake",
    action: "read",
    possession: "any",
  })
  async stakes(@graphql.Args() args: StakeFindManyArgs): Promise<Stake[]> {
    return this.service.stakes(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Stake, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Stake",
    action: "read",
    possession: "own",
  })
  async stake(
    @graphql.Args() args: StakeFindUniqueArgs
  ): Promise<Stake | null> {
    const result = await this.service.stake(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Stake)
  @nestAccessControl.UseRoles({
    resource: "Stake",
    action: "create",
    possession: "any",
  })
  async createStake(@graphql.Args() args: CreateStakeArgs): Promise<Stake> {
    return await this.service.createStake({
      ...args,
      data: {
        ...args.data,

        blueprint: args.data.blueprint
          ? {
              connect: args.data.blueprint,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Stake)
  @nestAccessControl.UseRoles({
    resource: "Stake",
    action: "update",
    possession: "any",
  })
  async updateStake(
    @graphql.Args() args: UpdateStakeArgs
  ): Promise<Stake | null> {
    try {
      return await this.service.updateStake({
        ...args,
        data: {
          ...args.data,

          blueprint: args.data.blueprint
            ? {
                connect: args.data.blueprint,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Stake)
  @nestAccessControl.UseRoles({
    resource: "Stake",
    action: "delete",
    possession: "any",
  })
  async deleteStake(
    @graphql.Args() args: DeleteStakeArgs
  ): Promise<Stake | null> {
    try {
      return await this.service.deleteStake(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Blueprint, {
    nullable: true,
    name: "blueprint",
  })
  @nestAccessControl.UseRoles({
    resource: "Blueprint",
    action: "read",
    possession: "any",
  })
  async getBlueprint(
    @graphql.Parent() parent: Stake
  ): Promise<Blueprint | null> {
    const result = await this.service.getBlueprint(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Stake): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
