const { semRushApiKey } = require('./keys');

module.exports = (typeApi, domain, database) => {
    switch(typeApi) {
        case 'organic-keywords':
            return `https://api.semrush.com/?type=domain_organic&key=${semRushApiKey}&display_limit=10&export_columns=Ph,Po,Pp,Pd,Nq,Cp,Ur,Tr,Tc,Co,Nr,Td&domain=${domain}&display_sort=po_asc&database=${database}&display_offset=5`
    }
}