/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/Schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: "postgresql://neondb_owner:JjXVaRv26PKB@ep-jolly-bread-a5hdf74l.us-east-2.aws.neon.tech/neondb?sslmode=require",
    }
  };