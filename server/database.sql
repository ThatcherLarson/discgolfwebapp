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

ALTER TABLE discs ADD COLUMN last_modified DATE NOT NULL DEFAULT CURRENT_DATE;

CREATE TABLE users(
    "user_id" SERIAL PRIMARY KEY NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    salt TEXT NOT NULL,
    pass TEXT NOT NULL,
    last_modified DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE bags(
    bag_id SERIAL PRIMARY KEY NOT NULL,
    "user_id" integer NOT NULL,
    date_created DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE bag_items(
    id SERIAL PRIMARY KEY NOT NULL,
    disc_id integer NOT NULL,
    bag_id integer NOT NULL,
    "weight" decimal(4, 1),
    color VARCHAR(255),
    plastic VARCHAR(255),
    quantity integer NOT NULL,
    notes TEXT,
    last_modified DATE NOT NULL DEFAULT CURRENT_DATE
);