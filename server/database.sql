CREATE DATABASE discgolfapp;

CREATE TABLE discs(
    disc_id SERIAL PRIMARY KEY,
    brand VARCHAR(255),
    mold VARCHAR(255),
    speed VARCHAR(255),
    glide VARCHAR(255),
    turn VARCHAR(255),
    fade VARCHAR(255)
);