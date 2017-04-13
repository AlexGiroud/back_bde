'use strict';

module.exports = function(Droit) {

    Droit.disableRemoteMethodByName("upsertWithWhere");
    Droit.disableRemoteMethodByName("createChangeStream");
    Droit.disableRemoteMethodByName("replaceOrCreate");
    Droit.disableRemoteMethodByName("patchOrCreate");
    Droit.disableRemoteMethodByName("patchAttributes");
};
