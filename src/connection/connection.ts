import db from "../models/index";
// In development, you may need to drop existing tables and re-sync
// database. Just use force: true as following code: {force:true} in sync
const resync:any= process.env.RESYNC;
const syncDB=resync==1?true:false;
db.sequelize.sync({force:syncDB})
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err:any) => {
    console.log("Failed to sync db: " + err.message);
  });