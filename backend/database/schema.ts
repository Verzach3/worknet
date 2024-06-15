import { sql, relations } from "drizzle-orm";
import { text, integer, sqliteTable,   } from "drizzle-orm/sqlite-core";

export const users = sqliteTable('users', {
  id: text('id').primaryKey().notNull(),
  username: text('username').notNull(),
  role: text('role').notNull().default('employee'),
});


export const profile = sqliteTable('user_profile', {
  id: text('id').primaryKey().notNull(),
  name: text('name').notNull(),
  lastname: text('lastname').notNull(),
  about: text('about').notNull(),
  image: text('image').notNull(),
  userId: text('user_id').references(() => users.id),
});


export const userInformation = sqliteTable('user_information', {
  id: text('id').primaryKey().notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  address: text('address').notNull(),
  city: text('city').notNull(),
  state: text('state').notNull(),
  country: text('country').notNull(),
  postal: text('postal').notNull(),
  userId: text('user_id').notNull().references(()=> users.id)
});


export const profileImage = sqliteTable('profile_image', {
  id: text('id').primaryKey().notNull(),
  urlImage: text('url_image'),
  profileId: text('profileId').references(() => profile.id)
})


export const applyjobs = sqliteTable('applyjobs', {
  id: text('id').primaryKey().notNull(),
  name: text('name').notNull().default(''),
  email: text('email').notNull().default(''),
  cv: text('cv').notNull().default(''),
  more_info: text('more_info'),
  userId: text('user_id').references(() => users.id),
  jobId: text('job_id').references(() => jobs.id)
});


export const jobs = sqliteTable('jobs', {
  id: text('id').primaryKey().notNull(),
  title: text('title').notNull(),
  company: text('company').notNull(),
  salary: integer('salary').notNull(),
  role: text('role').notNull(),
  place: text('place').notNull(),
  description: text('description').notNull(),
  requirements_id: text('requirements_id').references(() => jobRequirements.id),
  userId: text('user_id').references(()=> users.id)
});



export const jobRequirements = sqliteTable('job_requirements', {
  id: text('id').primaryKey().notNull(),
  education: text('education'),
  job_level: text('job_level'),
  experience: text('experience'),
  duration: text('duration'),
  time_required: text('time_required')
})


export const notifications = sqliteTable('notifications', {
  id: text('id').primaryKey().notNull(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  salary: text('salary').notNull(),
  status: text('status').notNull(),
  jobId: text('job_id').notNull().references(() => jobs.id),
  userId: text('userId').notNull().references(() => users.id),
})


// Relations 


// ------------ User Profile Relations ------------ //


// Relation between user and profile
export const userRelations = relations(users, ({ one }) => ({
  profile: one(profile),
}));


// Relation between user and userInformation
export const userInformationRelations = relations(users, ({ one }) => ({
  userInformation: one(userInformation)
}))


// Relation between profile and profileImages
export const profileImagesRelations = relations(profile, ({ many }) => ({
  profileImage: many(profileImage)
}))

export const imagesProfileRelations = relations(profileImage, ({ one }) => ({
  profile: one(profile, {
    fields: [profileImage.profileId],
    references: [profile.id]
  })
}))


// ------------ Jobs Relations ------------ //


// Relations between jobs and apply jobs
export const jobsRelation = relations(jobs, ({ many }) => ({
  applyjobs: many(applyjobs)
}));

export const applyRelations = relations(applyjobs, ({ one }) => ({
    apply: one(jobs, {
      fields: [applyjobs.jobId],
      references: [jobs.id]
    })
}));

// Relations between apply job and users
export const applyJobUserRelations = relations(users, ({ many }) => ({
  apply: many(applyjobs)
}))

export const usersApplyJobRelations = relations(applyjobs, ({ one }) => ({
  users: one(users, {
    fields: [applyjobs.userId],
    references: [users.id]
  })
}));

// Relations between jobs requirements and jobs
export const jobsRequirementsRelations = relations(jobs, ({ one }) => ({
  requirements: one(jobRequirements)
}))

// Relations between user and jobs
export const jobsUserRelations = relations(users, ({ many }) => ({
  create: many(jobs) 
}))

export const userJobsRelations = relations(jobs, ({ one }) => ({
  users: one(users, {
    fields: [jobs.userId],
    references: [users.id]
  })
}))


// ------------ Notifications Relations ------------ //


// Relations between user and notifications
export const notificationsUserRelations =  relations(users, ({ many }) => ({
  notification: many(notifications)
}))

export const userNotificationsRelations = relations(notifications, ({ one }) => ({
  user: one(users, {
    fields: [notifications.userId],
    references: [users.id]
  })
}));

// Relations between jobs and notifications
export const jobsNotificationsRelations = relations(jobs, ({ many }) => ({
  notification: many(notifications)
}))

export const notificationsJobsRelations = relations(notifications, ({ one })  => ({ 
  job: one(jobs, {
    fields: [notifications.jobId],
    references: [jobs.id]
  })
}))


