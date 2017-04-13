'use strict';

module.exports = function(Categorieevent) {

    Categorieevent.disableRemoteMethodByName("upsertWithWhere");
    Categorieevent.disableRemoteMethodByName("createChangeStream");
    Categorieevent.disableRemoteMethodByName("replaceOrCreate");
    Categorieevent.disableRemoteMethodByName("patchOrCreate");
    Categorieevent.disableRemoteMethodByName("patchAttributes");
};
