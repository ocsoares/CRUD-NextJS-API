import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './config/app';
import { mw } from 'request-ip';
import { NestExpressApplication } from '@nestjs/platform-express';
import helmet from 'helmet';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { SwaggerCustomizationUtil } from './utils/swagger-customization.util';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    // To obtain the real IP address of the request on a production server !
    app.set('trust proxy', true);

    app.use(
        helmet({
            contentSecurityPolicy: {
                directives: {
                    defaultSrc: ["'self'"],
                    scriptSrc: [
                        "'self'",
                        "'unsafe-inline'",
                        "'unsafe-eval'",
                        'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/',
                    ],
                    styleSrc: [
                        "'self'",
                        "'unsafe-inline'",
                        'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/',
                    ],
                    imgSrc: [
                        "'self'",
                        'data:',
                        'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/',
                        'https://static-00.iconduck.com',
                    ],
                },
            },
        }),
    );

    app.use(mw());

    app.setGlobalPrefix('api');

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
        }),
    );

    const config = new DocumentBuilder()
        .setTitle('CRUD NextJS API')
        .setDescription(
            'Uma API de CRUD feita para a minha aplicação frontend chamada "CRUD NextJS"',
        )
        .setVersion('1.0')
        .addTag('auth-user')
        .addTag('token-user')
        .addBearerAuth()
        .build();

    const document = SwaggerModule.createDocument(app, config);

    const swaggerCssUrl = SwaggerCustomizationUtil.cssUrl();

    const swaggerBundleJs = SwaggerCustomizationUtil.bundleJs();

    const swaggerStandalonePresetJs =
        SwaggerCustomizationUtil.standalonePresetJs();

    const swaggerFavIcon = SwaggerCustomizationUtil.favIcon();

    SwaggerModule.setup('docs', app, document, {
        customCssUrl: swaggerCssUrl,
        customJs: [swaggerBundleJs, swaggerStandalonePresetJs],
        customfavIcon: swaggerFavIcon,
    });

    const server = app.getHttpAdapter();

    server.get('/', (req: Request, res: Response) => {
        res.redirect('/docs');
    });

    app.enableCors({
        origin: process.env.FRONTEND_URL,
        methods: ['GET', 'POST', 'DELETE'],
    });

    await app.listen(PORT);
}

bootstrap();
