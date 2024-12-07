"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PERMISSION_TYPE = exports.ADMIN_USER = exports.ADMIN_ROLES = exports.SUPER_ADMIN = exports.GENDERS = exports.USER_ROLES = void 0;
exports.USER_ROLES = ['sadmin', 'admin', 'user'];
exports.GENDERS = ['other', 'male', 'female'];
exports.SUPER_ADMIN = "sadmin";
exports.ADMIN_ROLES = ['sadmin', 'admin'];
exports.ADMIN_USER = [{
        firstName: "india",
        lastName: "renaissance",
        email: "renaissance@india.com",
        password: "Rindia@123",
        username: "renaissance123",
        mobile: "1234567890",
        isAdmin: true
    }];
exports.PERMISSION_TYPE = {
    CREATE_USER: "createUser",
    READ_USER: "readUser",
    UDPATE_USER: "updateUser",
    DELETE_USER: "deleteUser",
    CREATE_BANNER: "createBanner",
    READ_BANNER: "readBanner",
    UPDATE_BANNER: "updateBanner",
    DELETE_BANNER: "deleteBanner",
    CREATE_VEHICLE: "createVehicle",
    READ_VEHICLE: "readVehicle",
    UPDATE_VEHICLE: "updateVehicle",
    DELETE_VEHICLE: "deleteVehicle",
    CREATE_ORDER: "createOrder",
    READ_ORDER: "readOrder",
    UPDATE_ORDER: "updateOrder",
    DELETE_ORDER: "deleteOrder",
    CREATE_CHALLAN: "createChallan",
    READ_CHALLAN: "readChallan",
    UPDATE_CHALLAN: "updateChallan",
    DELETE_CHALLAN: "deleteChallan",
};
//# sourceMappingURL=index.js.map