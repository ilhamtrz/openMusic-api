/* eslint-disable camelcase */
const albumMapDBToModel = ({
  id,
  name,
  year,
  created_at,
  updated_at,
  cover,
}) => ({
  id,
  name,
  year,
  createdAt: created_at,
  updatedAt: updated_at,
  coverUrl: cover,
});

const songMapDBToModel = ({
  id,
  title,
  year,
  genre,
  performer,
  duration,
  album_id,
  created_at,
  updated_at,
}) => ({
  id,
  title,
  year,
  genre,
  performer,
  duration,
  albumId: album_id,
  createdAt: created_at,
  updatedAt: updated_at,
});

const playlistSongsMapDBtoModel = ({
  id,
  playlist_id,
  song_id,
}) => ({
  id,
  playlistId: playlist_id,
  songId: song_id,
});

module.exports = { albumMapDBToModel, songMapDBToModel, playlistSongsMapDBtoModel };
