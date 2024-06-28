import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const AiOutput = pgTable('aiOutput',{
    id:serial('id').primaryKey(),
    formData: varchar('Form-Data').notNull(),
    aiResponse:text('AI-Response'),
    TemplateSlug:varchar("Slug").notNull(),
    createdBy: varchar('Created-By').notNull(),
    createdAt: varchar('Created-At'),
})