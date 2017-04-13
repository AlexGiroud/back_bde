'use strict';

module.exports = function(Student) {

    Student.disableRemoteMethodByName("upsertWithWhere");
    Student.disableRemoteMethodByName("createChangeStream");
    Student.disableRemoteMethodByName("patchOrCreate");
    Student.disableRemoteMethodByName("patchAttributes");
    Student.disableRemoteMethodByName("replaceOrCreate");

};
