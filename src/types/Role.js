/**
 * @author DURAND Malo <malo.durand@epitech.eu>
 * @description Role object : https://developer.kookapp.cn/doc/objects#角色 Role
 */
/**
 * @typedef {Object} BaseRole
 * @property {Number} role_id
 * @property {String} name
 * @property {Number} color
 * @property {Number} position
 * @property {Number} hoist
 * @property {0 | 1} mentionable
 * @property {Number} permissions Bit-fields permissions representation
 */

/**
 * @param {BaseRole} raw
 */
export function role(raw) {
    return { ...raw };
}
