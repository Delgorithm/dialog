USE dialogdb;

CREATE TABLE glucose (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
    amount INT UNSIGNED NOT NULL,
    heure DATETIME NOT NULL
);



-- create table user (
--   id int unsigned primary key auto_increment not null,
--   email varchar(255) not null unique,
--   password varchar(255) not null
-- );

-- create table item (
--   id int unsigned primary key auto_increment not null,
--   title varchar(255) not null,
--   user_id int unsigned not null,
--   foreign key(user_id) references user(id)
-- );
