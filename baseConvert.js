//ex base_convert('E164',16,8)  =>  160544
function baseConvert(num, init_base, change_base) {
    if ((init_base && change_base) <2 || (init_base && change_base)>36)
        return 'Base between 2 and 36';

    return parseInt(num + '', init_base).toString(change_base);
}

module.exports = baseConvert;