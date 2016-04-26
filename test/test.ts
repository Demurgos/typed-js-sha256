import * as test from 'blue-tape';

import {sha256, sha224} from 'js-sha256';

test('sha256(string)', (t) => {
  t.plan(3);
  t.equal(sha256(''), 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855');
  t.equal(sha256('The quick brown fox jumps over the lazy dog'), 'd7a8fbb307d7809469ca9abcb0082e4f8d5651e46d3cdb762d02d0bf37c9e592');
  t.equal(sha256('The quick brown fox jumps over the lazy dog.'), 'ef537f25c895bfa782526529a9b63d97aa631564d5d789c2b765448c8635fb6c');
});

test('sha256(Array<number>)', (t) => {
  t.plan(2);
  t.equal(sha256([]), 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855');
  t.equal(sha256([211, 212]), '182889f925ae4e5cc37118ded6ed87f7bdc7cab5ec5e78faef2e50048999473f');
});

test('sha256(Uint8Array)', (t) => {
  t.plan(2);
  t.equal(sha256(new Uint8Array([])), 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855');
  t.equal(sha256(new Uint8Array([211, 212])), '182889f925ae4e5cc37118ded6ed87f7bdc7cab5ec5e78faef2e50048999473f');
});

test('sha256(ArrayBuffer)', (t) => {
  t.plan(1);
  t.equal(sha256(new ArrayBuffer(0)), 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855');
});

test('sha256(ArrayBuffer)', (t) => {
  t.plan(1);
  t.equal(sha256(new ArrayBuffer(0)), 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855');
});

test('sha224(string)', (t) => {
  t.plan(3);
  t.equal(sha224(''), 'd14a028c2a3a2bc9476102bb288234c415a2b01f828ea62ac5b3e42f');
  t.equal(sha224('The quick brown fox jumps over the lazy dog'), '730e109bd7a8a32b1cb9d9a09aa2325d2430587ddbc0c38bad911525');
  t.equal(sha224('The quick brown fox jumps over the lazy dog.'), '619cba8e8e05826e9b8c519c0a5c68f4fb653e8a3d8aa04bb2c8cd4c');
});
