const ExceptionType = {
    DB_GET_USERS_NOT_FOUND: "Users table is empty",
    DB_GET__USER_BY_ID_NOT_FOUND: "User by id is not found",
    DB_POST_USER_NOT_CREATE: "User doesn`t create",
    DB_PUT_USER_NOT_UPDATE: "User doesn`t update",
    DB_DELETE_USER_NOT_DELETE: "User doesn`t delete",
    DB_PATCH_USER_NOT_PATCH: "User doesn`t partially update",

    DB_GET_TASKS_NOT_FOUND: "Tasks table is empty",
    DB_GET__TASK_BY_ID_NOT_FOUND: "Task by id is not found",
    DB_POST_TASK_NOT_CREATE: "Task doesn`t create",
    DB_PUT_TASK_NOT_UPDATE: "Task doesn`t update",
    DB_DELETE_TASK_NOT_DELETE: "Task doesn`t delete",
    DB_PATCH_TASK_NOT_PATCH: "Task doesn`t partially update",

    ID_NOT_NUMBER: "id isn't a number",
    ID_NEGATIVE: "id shouldn`t be negative",
    USER_NAME_EMPTY: "no data",
    USER_SURNAME_EMPTY: "no data",
    USER_EMAIL_EMPTY: "no data",
    USER_PWD_EMPTY: "no data",

    TASK_TITLE_EMPTY: "no data",

    USER_NAME_INVALID: "incorrect name",
    USER_SURNAME_INVALID: "incorrect surname",
    USER_EMAIL_INVALID: "incorrect email",
    USER_PWD_INVALID: "length shouldn`t be < 8 symbols",

    TASK_TITLE_INVALID: "incorrect task",
    TASK_USERID_INVALID: "incorrect user_id",
    TASK_USERID_TOO_SMALL: "user_id shouldn`t be negative"
}

module.exports = ExceptionType;
