import Dexie from 'dexie';
import relationships from 'dexie-relationships'

export const db = new Dexie('superApp', {addons: [relationships]});
db.version(3).stores({
    users: '++id, first_name, last_name, email, city, description, status',
    userOnline: '++id, userId -> users.id'
});