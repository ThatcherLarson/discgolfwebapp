CREATE DATABASE discgolfapp;

CREATE TABLE discs(
    disc_id SERIAL PRIMARY KEY,
    brand VARCHAR(255),
    mold VARCHAR(255),
    speed decimal(3, 1),
    glide decimal(3, 1),
    turn decimal(3, 1),
    fade decimal(3, 1)
);