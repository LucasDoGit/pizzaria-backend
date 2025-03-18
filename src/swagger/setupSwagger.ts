import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options: swaggerJsDoc.Options = {
    definition: {
        openapi: "3.0.0",
            info: {
                title: "API Sujeito Pizza",
                version: "1.0.0",
                description: "Documentação da API do sistema de pizzaria",
            },
            servers: [
                {
                    url: "https://pizzaria-beckend.vercel.app",
                    description: "API em produção"
                }, {
                    url: "http://localhost:3333",
                    description: "Servidor Local",
                },
                
            ],
    },
    apis: ["./dist/routes.js", "./dist/swagger/swaggerDocs.js"]
};

const swaggerSpec = swaggerJsDoc(options);

export function setupSwagger(app: Express) {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}