/* eslint-disable camelcase */
exports.up = (pgm) => {
  // memberikan constraint foreign key pada album_id terhadap kolom id dari tabel albums
  pgm.addConstraint('songs', 'fk_songs.albumId_albums.id', 'FOREIGN KEY(album_id) REFERENCES albums(id) ON DELETE CASCADE');
};

exports.down = (pgm) => {
  // menghapus constraint fk_songs.albumId_albums.id pada tabel notes
  pgm.dropConstraint('songs', 'fk_songs.albumId_albums.id');
};
