const HEX_REGEXP = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/; 

export const validateHex = (value) => {
        return HEX_REGEXP.test(value);
};