'use strict';

module.exports = function(Commentaireevent) {

    Commentaireevent.disableRemoteMethodByName("upsertWithWhere");
    Commentaireevent.disableRemoteMethodByName("createChangeStream");
    Commentaireevent.disableRemoteMethodByName("replaceOrCreate");
    Commentaireevent.disableRemoteMethodByName("patchOrCreate");
    Commentaireevent.disableRemoteMethodByName("patchAttributes");
};
