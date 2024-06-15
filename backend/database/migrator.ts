import { migrate } from 'drizzle-orm/libsql/migrator';
import { db, sqlite} from './db';

// This will run migrations on the database, skipping the ones already applied
await migrate(db, { migrationsFolder: './drizzle' });
sqlite.close();
// Don't forget to close the connection, otherwise the script will hang
