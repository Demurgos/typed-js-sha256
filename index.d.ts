/**
 * If you use node.js, you should require the module first:
 *
 * sha256 = require('js-sha256');
 *
 * or
 *
 * sha256 = require('js-sha256').sha256;
 * sha224 = require('js-sha256').sha224;
 *
 * sha256('');
 * sha256('The quick brown fox jumps over the lazy dog');
 * sha256('The quick brown fox jumps over the lazy dog.');
 * sha224('');
 * sha224('The quick brown fox jumps over the lazy dog');
 * sha224('The quick brown fox jumps over the lazy dog.');
 *
 * It also supports byte Array, Uint8Array, ArrayBuffer input
 */

/**
 * Returns the SHA-256 hash of `message` as an hexadecimal string.
 * @param message The message to hash
 */
export function sha256(message: string | ArrayLike<number> | Uint8Array | ArrayBuffer): string;

/**
 * Returns the SHA-224 hash of `message` as an hexadecimal string.
 * @param message The message to hash
 */
export function sha224(message: string | ArrayLike<number> | Uint8Array | ArrayBuffer): string;
