import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { UserModule } from "src/user/user.module";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    imports:[JwtModule.register({
        secret: "f>yTlhDf8<hI$1KdhmO%9W)g[[h61Vxa"
    }),
    UserModule,
    PrismaModule],
    
    controllers: [AuthController]
})
export class AuthModule{

}