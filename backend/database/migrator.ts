import { migrate } from 'drizzle-orm/bun-sqlite/migrator';
import { db, sqlite} from './db';

// This will run migrations on the database, skipping the ones already applied
migrate(db, { migrationsFolder: './drizzle' });
sqlite.close();
// Don't forget to close the connection, otherwise the script will hang
