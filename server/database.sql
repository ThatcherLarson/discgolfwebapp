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

--placeholder statement for eventual users down the road
CREATE TABLE users(
    user_id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    salt TEXT NOT NULL,
    pass TEXT NOT NULL,
    last_modified DATE NOT NULL DEFAULT CURRENT_DATE
)

-- fields tbd
CREATE TABLE bags(
    bag_id SERIAL PRIMARY KEY NOT NULL,
    user_id integer NOT NULL,
    date_created DATE NOT NULL DEFAULT CURRENT_DATE
)

-- fields tbd
CREATE TABLE bag_items(
    id SERIAL PRIMARY KEY NOT NULL,
    disc_id integer NOT NULL,
    bag_id integer NOT NULL,
    weight NUMERIC,
    color TEXT,
    quantity integer,
    last_modified DATE NOT NULL DEFAULT CURRENT_DATE
)