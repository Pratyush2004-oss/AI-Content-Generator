import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const AIOutput = pgTable('aiOutput',{
    id:serial('id').primaryKey(),
    formDat: varchar('Form-Data').notNull(),
    aiResponse:text('AI-Response'),
    TemplateSlug:varchar("Slug").notNull(),
    createdBy: varchar('Created-By').notNull(),
    createdAt: varchar('Created-At'),
})