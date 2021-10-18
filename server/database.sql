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

--placeholder statement for eventual users down the road
CREATE TABLE users(
    user_id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    salt TEXT NOT NULL,
    pass TEXT NOT NULL,
    date_created DATE NOT NULL DEFAULT CURRENT_DATE
)