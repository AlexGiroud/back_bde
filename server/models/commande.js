'use strict';

module.exports = function(Commande) {

    Commande.disableRemoteMethodByName("upsertWithWhere");
    Commande.disableRemoteMethodByName("createChangeStream");
    Commande.disableRemoteMethodByName("replaceOrCreate");
    Commande.disableRemoteMethodByName("patchOrCreate");
    Commande.disableRemoteMethodByName("patchAttributes");
};
