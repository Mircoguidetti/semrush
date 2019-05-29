const axios = require('axios');

const getOrganicKeywords = (url, res) => {
    axios.get(url)
        .then((resposne) => {
            if (resposne.data === 'Validation Error : target') {
                const data = {
                    status: 'ok',
                    code: 403,
                    keywords:'Validation error. Wrong API Key'
                };
                return res.send(JSON.stringify(data));
            } 
            const data = {
                status: 'ok',
                code: 200,
                keywords:resposne.data
            };
            
            return res.send(JSON.stringify(data));
        })
        .catch((error) => {
            
            if (error.code === 'ENOTFOUND') {
                const data = {
                    status: 'error',
                    'message': 'Network error. Check your connection and the domain'
                };
                return res.send(JSON.stringify(data))
            } 
        });
};

module.exports = getOrganicKeywords;

`https://api.semrush.com/?type=domain_organic&key=f3daea09a3131a99fb368dab5645e11e&
display_filter=%2B%7CPh%7CCo%7Cseo&display_limit=10&export_columns=Ph,Po,Pp,Pd,Nq,Cp,Ur,Tr,Tc,Co,Nr,Td&
domain=reboot.com&database=us&display_sort=po_asc&display_offset=5`