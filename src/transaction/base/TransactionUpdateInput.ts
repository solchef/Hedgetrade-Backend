/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsNumber,
  Min,
  Max,
  IsOptional,
  ValidateNested,
  IsEnum,
  IsDate,
} from "class-validator";
import { BlueprintWhereUniqueInput } from "../../blueprint/base/BlueprintWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumTransactionStatus } from "./EnumTransactionStatus";
import { EnumTransactionTypeField } from "./EnumTransactionTypeField";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class TransactionUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount?: number | null;

  @ApiProperty({
    required: false,
    type: () => BlueprintWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BlueprintWhereUniqueInput)
  @IsOptional()
  @Field(() => BlueprintWhereUniqueInput, {
    nullable: true,
  })
  blueprint?: BlueprintWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumTransactionStatus,
  })
  @IsEnum(EnumTransactionStatus)
  @IsOptional()
  @Field(() => EnumTransactionStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  transactionDate?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumTransactionTypeField,
  })
  @IsEnum(EnumTransactionTypeField)
  @IsOptional()
  @Field(() => EnumTransactionTypeField, {
    nullable: true,
  })
  typeField?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { TransactionUpdateInput as TransactionUpdateInput };
