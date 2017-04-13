'use strict';

module.exports = function(Badge) {

    Badge.disableRemoteMethodByName("upsertWithWhere");
    Badge.disableRemoteMethodByName("createChangeStream");
    Badge.disableRemoteMethodByName("replaceOrCreate");
    Badge.disableRemoteMethodByName("patchOrCreate");
    Badge.disableRemoteMethodByName("patchAttributes");
};
