import { sql, relations } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
	id: text("id").primaryKey().notNull(),
	username: text("username").notNull(),
	role: text("role").notNull()
});

export const profile = sqliteTable("user_profile", {
	id: text("id").primaryKey().notNull(),
	name: text("name").notNull(),
	lastname: text("lastname").notNull(),
	about: text("about").notNull(),
	image: text("image").notNull(),
	user_id: text("user_id").references(() => users.id)
});

export const userInformation = sqliteTable("user_information", {
	id: text("id").primaryKey().notNull(),
	email: text("email").notNull(),
	phone: text("phone").notNull(),
	address: text("address").notNull(),
	city: text("city").notNull(),
	state: text("state").notNull(),
	country: text("country").notNull(),
	postal: text("postal").notNull(),
	user_id: text("user_id").references(() => users.id)
});

export const profileImage = sqliteTable("profile_image", {
	id: text("id").primaryKey().notNull(),
	urlImage: text("url_image"),
	profile_id: text("profile_id").references(() => profile.id)
});

export const applyjobs = sqliteTable("applyjobs", {
	id: text("id").primaryKey().notNull(),
	name: text("name").notNull().default(""),
	email: text("email").notNull().default(""),
	cv: text("cv").notNull().default(""),
	user_id: text("user_id").references(() => users.id),
	job_id: text("job_id").references(() => jobs.id)
});

export const jobs = sqliteTable("jobs", {
	id: text("id").primaryKey().notNull(),
	title: text("title").notNull(),
	company: text("company").notNull(),
	salary: integer("salary").notNull(),
	role: text("role").notNull(),
	place: text("place").notNull(),
	description: text("description").notNull(),
	user_id: text("user_id").references(() => users.id)
});

export const jobRequirements = sqliteTable("job_requirements", {
	id: text("id").primaryKey().notNull(),
	education: text("education"),
	job_level: text("job_level"),
	experience: text("experience"),
	duration: text("duration"),
	time_required: text("time_required"),
  job_id: text("job_id").references(() => jobs.id),
});

export const notifications = sqliteTable("notifications", {
	id: text("id").primaryKey().notNull(),
	title: text("title").notNull(),
	description: text("description").notNull(),
	status: text("status").notNull(),
	job_id: text("job_id").references(() => jobs.id),
	user_id: text("userId").references(() => users.id),
});

// Relations

export const userRelations = relations(users, ({ one, many }) => ({
  jobs: many(jobs),
  applyjobs: many(applyjobs),
  notifications: many(notifications)
}))

export const profileRelations = relations(profile, ({ one, many }) => ({
    user: one(users, {
      fields: [profile.user_id],
      references: [users.id]
    }),

    profileImage: many(profileImage)
}))

export const userInformationRelations = relations(userInformation, ({ one }) => ({
  user: one(users, {
    fields: [userInformation.user_id],
    references: [users.id]
  })
}))


export const profileImageRelations = relations(profileImage, ({ one }) => ({
  profile: one(profile, {
    fields: [profileImage.profile_id],
    references: [profile.id]
  })
}))

export const jobsRelations = relations(jobs, ({ one, many }) => ({
  user: one(users, {
    fields: [jobs.user_id],
    references: [users.id]
  }),
  apply: many(applyjobs),
  notifications: many(notifications)
}))

export const jobsRequirementsRelations = relations(jobRequirements, ({ one }) => ({
  job: one(jobs, {
    fields: [jobRequirements.job_id],
    references: [jobs.id]
  })
}))

export const applyRelations = relations(applyjobs, ({ one, many }) => ({
  user: one(users, {
    fields: [applyjobs.user_id],
    references: [users.id]
  }),

  job: one(jobs, {
    fields: [applyjobs.job_id],
    references: [jobs.id]
  })

}))

export const notificationsRelations = relations(notifications, ({ one }) => ({
  user: one(users, {
    fields: [notifications.user_id],
    references: [users.id]
  }),

  job: one(jobs, {
    fields: [notifications.job_id],
    references: [jobs.id]
  })

}))


// Exports

export type usersTypeInsert = typeof users.$inferInsert;
export type usersTypeSelect = typeof users.$inferSelect;

export type profileTypeInsert = typeof profile.$inferInsert;
export type profileTypeSelect = typeof profile.$inferSelect;

export type userInformationTypeInsert = typeof userInformation.$inferInsert;
export type userInformationTypeSelect = typeof userInformation.$inferSelect;

export type profileImageTypeInsert = typeof profileImage.$inferInsert;
export type profileImageTypeSelect = typeof profileImage.$inferSelect;

export type jobsTypeInsert = typeof jobs.$inferInsert;
export type jobsTypeSelect = typeof jobs.$inferSelect;

export type jobRequirementsTypeInsert = typeof jobRequirements.$inferInsert;
export type jobRequirementsTypeSelect = typeof jobRequirements.$inferSelect;

export type applyjobsTypeInsert = typeof applyjobs.$inferInsert;
export type applyjobsTypeSelect = typeof applyjobs.$inferSelect;

export type notificationsTypeInsert = typeof notifications.$inferInsert;
export type notificationsTypeSelect = typeof notifications.$inferSelect;



