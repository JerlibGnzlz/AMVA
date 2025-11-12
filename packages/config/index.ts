import * as dotenv from "dotenv";
import { resolve } from "path";

dotenv.config({ path: resolve(__dirname, "../../.env") });

export const config = {
  databaseUrl: process.env.DATABASE_URL,
  cloudinaryUrl: process.env.CLOUDINARY_URL,
  mercadopagoToken: process.env.MERCADOPAGO_TOKEN,
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  ports: {
    api: process.env.PORT_API || 3002,
    web: process.env.PORT_WEB || 3000,
    admin: process.env.PORT_ADMIN || 3001
  },
  urls: {
    api: process.env.API_URL || "http://localhost:3002",
    nextPublicApi: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002"
  }
};
