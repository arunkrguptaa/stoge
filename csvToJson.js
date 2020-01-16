// ex  'a,b\nc,d' => {a: 'c', b: 'd'}
function csvToJson(str, deli = ','){
    if(typeof str === 'string'){
        var titles = str.slice(0, str.indexOf('\n')).split(deli);
        return str.slice(str.indexOf('\n') + 1).split('\n').map(v => {
            var values = v.split(deli);
            return titles.reduce((obj, title, index) => ((obj[title] = values[index]), obj), {});
        });
    }else (str || '')
}

module.exports = csvToJson;